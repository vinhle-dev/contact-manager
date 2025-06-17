import {Component, TemplateRef, Type} from '@angular/core';
import {BaseLocation} from "../../../core/component/location/BaseLocation";
import {TabBarComponent} from "../../component/location/tab-bar/tab-bar.component";
import {BaseLocationGroup} from "../../../core/component/location/BaseLocationGroup";
import {AdminMenuActionsComponent} from "../admin/admin-menu-actions/admin-menu-actions.component";
import {ContactsLocationGroupComponent} from "./contacts-location-group.component";

@Component({
  selector: 'app-contact-location',
  templateUrl: './contact-location.component.html'
})
export class ContactLocationComponent extends BaseLocation {
  tabbar: Type<any> | null = TabBarComponent;
  locationGroup: Type<BaseLocationGroup> | null = ContactsLocationGroupComponent;
  infoBar: TemplateRef<any> | null = null;
  menuAction: Type<any> | null = AdminMenuActionsComponent;
  menuTree: Type<any> | null = null;
}
