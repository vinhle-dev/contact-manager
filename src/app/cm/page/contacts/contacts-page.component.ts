import {Component, OnInit, Type} from '@angular/core';
import {ContactCriteria} from "../../../core/data/entity/ContactCriteria";
import {CookieUtil} from "../../../core/util/CookieUtil";
import {BasePage} from "../../../core/component/page/BasePage";
import {BaseLocation} from "../../../core/component/location/BaseLocation";
import {ContactLocationComponent} from "./contact-location.component";

@Component({
  selector: 'app-contacts-page',
  templateUrl: './contacts-page.component.html'
})
export class ContactsPageComponent extends BasePage implements OnInit {
  location: Type<BaseLocation> = ContactLocationComponent;
  title = "Search";
  protected contactCriteria = new ContactCriteria();

  ngOnInit() {
    if (CookieUtil.getValueByName("control", "tab") === "") {
      // open Contacts tab for first time.
      CookieUtil.update("control", "tabbar", "Contacts");

      CookieUtil.reset("location");
      CookieUtil.reset("treeView");
      CookieUtil.reset("treeViewArrow");
    }
  }


  afterCancel(): void {
  }

  afterCommit(): void {
  }
}
