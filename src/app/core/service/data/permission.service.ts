import {Injectable} from '@angular/core';
import {Permission} from "../../data/entity/Permission";
import {EntityService} from "./entity.service";
import {EntityTypeKey} from "../../data/typekey/EntityTypeKey";

@Injectable({
  providedIn: 'root'
})
export class PermissionService {

  constructor(private entityService: EntityService) {
  }

  getAll(): Permission[] {
    return this.entityService.getEntityByType(EntityTypeKey.Permission) as Permission[];
  }

  isExist(id: number) {
    return this.getById(id) !== null
  }

  update(permission: Permission): void {
    this.entityService.updateEntity(EntityTypeKey.Permission, permission);
  }

  getById(id: number | null) {
    let perm = this.entityService.getEntityById(EntityTypeKey.Permission, id)
    return perm ? perm as Permission : null;
  }
}
