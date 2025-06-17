import {Injectable} from '@angular/core';
import {Role} from "../../data/entity/Role";
import {EntityService} from "./entity.service";
import {EntityTypeKey} from "../../data/typekey/EntityTypeKey";
import {RolePrivilege} from "../../data/entity/RolePrivilege";

@Injectable({
  providedIn: 'root',
})
export class RoleService {
  constructor(private entityService: EntityService) {
  }

  getAll() {
    return this.entityService.getEntityByType(EntityTypeKey.Role) as Role[];
  }

  getRolePrivileges(roleId: number | null) {
    return (this.entityService.getEntityByType(EntityTypeKey.RolePrivilege) as RolePrivilege[])
      .filter(rp => rp.roleId === roleId)
  }

  isExist(id: number) {
    return this.getById(id) !== undefined
  }

  updateRole(role: Role): void {
    this.entityService.updateEntity(EntityTypeKey.Role, role);
  }

  getById(id: number | null) {
    let role = this.entityService.getEntityById(EntityTypeKey.Role, id);
    return role ? role as Role : null;
  }
}
