import {Component, TemplateRef, Type} from '@angular/core';
import {BaseLocation} from "../../../core/component/location/BaseLocation";
import {TabBarComponent} from "../../component/location/tab-bar/tab-bar.component";
import {BaseLocationGroup} from "../../../core/component/location/BaseLocationGroup";
import {AdminMenuActionsComponent} from "./admin-menu-actions/admin-menu-actions.component";
import {AdminMenuTreeComponent} from "./admin-menu-tree/admin-menu-tree.component";
import {AdminLocationGroupComponent} from "./admin-location-group/admin-location-group.component";

@Component({
  selector: 'app-admin-location',
  templateUrl: './admin-location.component.html'
})
export class AdminLocationComponent extends BaseLocation {
  tabbar: Type<any> | null = TabBarComponent;
  locationGroup: Type<BaseLocationGroup> | null = AdminLocationGroupComponent;
  infoBar: TemplateRef<any> | null = null;
  menuAction: Type<any> | null = AdminMenuActionsComponent;
  menuTree: Type<any> | null = AdminMenuTreeComponent;
}
