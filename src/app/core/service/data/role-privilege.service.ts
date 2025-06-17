import {Injectable} from '@angular/core';
import {RolePrivilege} from "../../data/entity/RolePrivilege";
import {EntityService} from "./entity.service";
import {EntityTypeKey} from "../../data/typekey/EntityTypeKey";
import {Permission} from "../../data/entity/Permission";

@Injectable({
  providedIn: 'root'
})
export class RolePrivilegeService {
  constructor(private entityService: EntityService) {
  }

  getAll() {
    return this.entityService.getEntityByType(EntityTypeKey.RolePrivilege) as RolePrivilege[];
  }

  getPermission(permId: number | null) {
    let perm = this.entityService.getEntityById(EntityTypeKey.Permission, permId);
    return perm ? perm as Permission : null
  }

  update(rp: RolePrivilege): void {
    this.entityService.updateEntity(EntityTypeKey.RolePrivilege, rp);
  }
}
