import {Injectable} from '@angular/core';
import {UserRole} from "../../data/entity/UserRole";
import {EntityService} from "./entity.service";
import {EntityTypeKey} from "../../data/typekey/EntityTypeKey";
import {Role} from "../../data/entity/Role";

@Injectable({
  providedIn: 'root'
})
export class UserRoleService {
  constructor(private entityService: EntityService) {
  }


  getAll() {
    return this.entityService.getEntityByType(EntityTypeKey.UserRole) as UserRole[];
  }

  getRole(roleId: number | null) {
    let role = this.entityService.getEntityById(EntityTypeKey.Role, roleId);
    return role ? role as Role : null;
  }

  update(ur: UserRole) {
    this.entityService.updateEntity(EntityTypeKey.UserRole, ur);
  }
}
