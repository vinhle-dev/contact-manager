import {Component, inject, OnInit, Type} from '@angular/core';
import {Role} from "../../../../core/data/entity/Role";
import {Permission} from "../../../../core/data/entity/Permission";
import {BasePage} from "../../../../core/component/page/BasePage";
import {BaseLocation} from "../../../../core/component/location/BaseLocation";
import {AdminLocationComponent} from "../admin-location.component";
import {ActivatedRoute, Router} from "@angular/router";
import {RoleService} from "../../../../core/service/data/role.service";
import {NavigationUtil} from "../../../../core/util/NavigationUtil";

@Component({
  selector: 'role-detail-popup',
  templateUrl: './role-detail-popup.component.html'
})
export class RoleDetailPopupComponent extends BasePage implements OnInit {
  location: Type<BaseLocation> = AdminLocationComponent;
  title = "";
  role!: Role;
  options!: Permission[];

  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private roleService = inject(RoleService);

  ngOnInit() {
    this.route.params.subscribe(params => {
      let id = Number((params['id']));
      if (this.roleService.isExist(id)) {
        this.role = this.roleService.getById(id) as Role;
        this.title = this.role.name ? this.role.name : "";

      } else {
        throw "Could not found role";
      }
    });
  }


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
