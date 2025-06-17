import {Component, inject, Input, OnInit, TemplateRef, Type, ViewContainerRef} from '@angular/core';
import {LocationService} from "../../../../core/service/location/LocationService";
import {CookieUtil} from "../../../../core/util/CookieUtil";
import {BaseLocationGroup} from "../../../../core/component/location/BaseLocationGroup";
import {BasePage} from "../../../../core/component/page/BasePage";

@Component({
  selector: 'location-group',
  templateUrl: './location-group.component.html'
})
export class LocationGroupComponent implements OnInit {
  @Input({required: true}) id!: string;
  @Input({required: true}) title!: string;
  @Input({required: true}) locationRef!: TemplateRef<any>;

  viewContainerRef = inject(ViewContainerRef);
  locationService = inject(LocationService);
  isSelect = false;

  get Container(): HTMLElement {
    return this.viewContainerRef.element.nativeElement
  }

  get IsRoot() {
    if (this.Container.parentElement && this.Container.parentElement.parentElement) {
      return this.Container.parentElement.parentElement.classList.contains('location-group');
    }

    return false
  }

  get NodeLevel() {
    return this.locationService.getNodeLevel(this.Container)
  }

  ngOnInit() {
    this.Container.id = this.id;

    if (CookieUtil.getValueByName("location", "group") === this.id) {
      this.isSelect = true;
    }
  }

  onClick() {
    // Reset menu tree
    CookieUtil.reset("treeView")

    // If location group is not selected
    if (!this.isSelect) {
      // Reset location ref in cookie
      CookieUtil.update("location", "ref", "")
    }

    // Update location group on cookie
    CookieUtil.update("location", "group", this.id);
    // Update location group on service
    this.locationService.currentLocationGroup$.next(this.id);

    // Select location group
    this.isSelect = true
  }
}

export type Location = { component: Type<BaseLocationGroup | BasePage>, title: string, url?: string }
