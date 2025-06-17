import {Injectable} from '@angular/core';
import {UserGroup} from "../../data/entity/UserGroup";
import {EntityService} from "./entity.service";
import {EntityTypeKey} from "../../data/typekey/EntityTypeKey";
import {User} from "../../data/entity/User";

@Injectable({
  providedIn: 'root'
})
export class UserGroupService {

  constructor(private entityService: EntityService) {
  }

  getAll() {
    return this.entityService.getEntityByType(EntityTypeKey.UserGroup) as UserGroup[];
  }

  getByGroupId(groupId: number | null): UserGroup[] {
    return this.getAll().filter(ug => ug.groupId == groupId);
  }

  getByUserId(userId: number | null): UserGroup[] {
    return this.getAll().filter(ug => ug.userId == userId);
  }

  updateUserGroup(userGroup: UserGroup): void {
    let user = this.entityService.getEntityById(EntityTypeKey.User, userGroup.userId)
    userGroup.name = user ? (user as User).name : "";
    this.entityService.updateEntity(EntityTypeKey.UserGroup, userGroup);
  }
}
