import {Component, inject, Input, OnInit} from '@angular/core';
import {Role} from "../../../../core/data/entity/Role";
import {RolePrivilege} from "../../../../core/data/entity/RolePrivilege";
import {Permission} from "../../../../core/data/entity/Permission";
import {Router} from "@angular/router";
import {RoleService} from "../../../../core/service/data/role.service";
import {RolePrivilegeService} from "../../../../core/service/data/role-privilege.service";
import {PermissionService} from "../../../../core/service/data/permission.service";
import {BaseScreen} from "../../../../core/component/screen/BaseScreen";

@Component({
  selector: 'role-detail-screen',
  templateUrl: './role-detail-screen.component.html'
})
export class RoleDetailScreenComponent extends BaseScreen implements OnInit {
  @Input({required: true}) role!: Role;

  private roleService = inject(RoleService);
  private rolePrivilegeService = inject(RolePrivilegeService);
  private permissionService = inject(PermissionService);
  protected router = inject(Router);
  protected rolePrivileges: RolePrivilege[] = [];
  protected options = this.permissionService.getAll();

  ngOnInit(): void {
    if (this.role.id) {
      this.rolePrivileges = this.roleService.getRolePrivileges(this.role.id);
    }
  }

  getPermission(id: number | null) {
    let perm = this.rolePrivilegeService.getPermission(id)
    if (perm) {
      return perm;
    }

    return new Permission();
  }

  toAdd(listData: RolePrivilege[]) {
    listData.push(new RolePrivilege());
  }

  toRemove(listData: RolePrivilege[], items: number[]) {
    items.forEach(i => listData.splice(i, 1));
  }
}
