import {Component, inject, Type} from '@angular/core';
import {Role} from "../../../../core/data/entity/Role";
import {BasePage} from "../../../../core/component/page/BasePage";
import {BaseLocation} from "../../../../core/component/location/BaseLocation";
import {AdminLocationComponent} from "../admin-location.component";
import {Router} from "@angular/router";
import {RoleService} from "../../../../core/service/data/role.service";
import {NavigationUtil} from "../../../../core/util/NavigationUtil";

@Component({
  selector: 'new-role-page',
  templateUrl: './new-role-page.component.html'
})
export class NewRolePageComponent extends BasePage {
  location: Type<BaseLocation> = AdminLocationComponent;
  title = "New Role";
  role = new Role();

  private router = inject(Router);
  private roleService = inject(RoleService);

  afterCancel(): void {
    NavigationUtil.skipLocationChange(this.router, `ab/admin/roles`)
  }

  afterCommit(): void {
    if (this.role) {
      this.roleService.updateRole(this.role);
      NavigationUtil.skipLocationChange(this.router, `ab/admin/roles`)
    }
  }
}
