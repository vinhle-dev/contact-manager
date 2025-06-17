import {Component} from '@angular/core';
import {BaseLocationGroup} from "../../../../core/component/location/BaseLocationGroup";
import {UsersAndSecurityLGComponent} from "../../location-group/users-and-security-LG.component";
import {MonitoringLGComponent} from "../../location-group/monitoring-LG.component";
import {UtilitiesLGComponent} from "../../location-group/utilities-LG.component";

@Component({
  selector: 'admin-location-group',
  templateUrl: './admin-location-group.component.html'
})
export class AdminLocationGroupComponent extends BaseLocationGroup {
  id: string = "AdminLocationGroup";
  title = "Administration";
  protected readonly UsersAndSecurityLGComponent = UsersAndSecurityLGComponent;
  protected readonly MonitoringLGComponent = MonitoringLGComponent;
  protected readonly UtilitiesLGComponent = UtilitiesLGComponent;
}
