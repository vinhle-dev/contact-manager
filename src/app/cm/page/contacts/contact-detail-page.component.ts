import {Component, inject, OnInit, Type} from '@angular/core';
import {Contact} from "../../../core/data/entity/Contact";
import {BasePage} from "../../../core/component/page/BasePage";
import {BaseLocation} from "../../../core/component/location/BaseLocation";
import {ActivatedRoute, Router} from "@angular/router";
import {ContactService} from "../../../core/service/data/contact.service";
import {NavigationUtil} from "../../../core/util/NavigationUtil";
import {ContactLocationComponent} from "./contact-location.component";

@Component({
  selector: 'contact-detail-page',
  templateUrl: './contact-detail-page.component.html'
})
export class ContactDetailPageComponent extends BasePage implements OnInit {
  location: Type<BaseLocation> = ContactLocationComponent;
  title = ""
  protected contact!: Contact;

  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private contactService = inject(ContactService);

  ngOnInit() {
    this.route.params.subscribe(params => {
      let id = Number((params['id']));
      if (this.contactService.isExist(id)) {
        this.contact = this.contactService.getById(id)!;
        this.title = this.contact.name ? this.contact.name : "New Contact";

      } else {
        this.contact = new Contact();
      }
    });
  }


  afterCancel(): void {
    if (!this.contact.id) {
      NavigationUtil.skipLocationChange(this.router, "ab/contacts")
    } else {
      this.pageService.editMode$.next(false);
    }
  }

  afterCommit(): void {
    if (this.contact) {
      this.contactService.update(this.contact);
      this.pageService.editMode$.next(false);
    }
  }
}
