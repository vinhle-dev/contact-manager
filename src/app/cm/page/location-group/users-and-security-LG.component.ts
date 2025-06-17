import {Component} from '@angular/core';
import {BaseLocationGroup} from "../../../core/component/location/BaseLocationGroup";
import {AdminUserSearchPageComponent} from "../admin/user/admin-user-search-page.component";
import {AdminGroupSearchPageComponent} from "../admin/group/admin-group-search-page.component";
import {RolesPageComponent} from "../admin/role/roles-page.component";
import {RegionsPageComponent} from "../admin/regions/regions-page.component";

@Component({
  selector: 'users-and-security',
  templateUrl: './users-and-security-LG.component.html'
})
export class UsersAndSecurityLGComponent extends BaseLocationGroup {
  id: string = "UsersAndSecurity";
  title = "Users & Security";

  protected readonly AdminUserSearchPageComponent = AdminUserSearchPageComponent;
  protected readonly AdminGroupSearchPageComponent = AdminGroupSearchPageComponent;
  protected readonly RolesPageComponent = RolesPageComponent;
  protected readonly RegionsPageComponent = RegionsPageComponent;
}
