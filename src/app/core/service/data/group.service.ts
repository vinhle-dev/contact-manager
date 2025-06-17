import {Injectable} from '@angular/core';
import {Group} from "../../data/entity/Group";
import {UserGroup} from "../../data/entity/UserGroup";
import {EntityService} from "./entity.service";
import {EntityTypeKey} from "../../data/typekey/EntityTypeKey";
import {User} from "../../data/entity/User";

@Injectable({
  providedIn: 'root',
})
export class GroupService {
  constructor(private entityService: EntityService) {
  }

  getAll() {
    return this.entityService.getEntityByType(EntityTypeKey.Group) as Group[];
  }

  updateGroup(group: Group, userGroups: UserGroup[]): void {
    this.entityService.updateEntity(EntityTypeKey.Group, group);

    userGroups.forEach(ug => {
      ug.groupId = group.id
      let user = this.entityService.getEntityById(EntityTypeKey.User, ug.userId)
      ug.name = user ? (user as User).name : "";
      this.entityService.updateEntity(EntityTypeKey.UserGroup, ug);
    });
  }

  getById(id: number | null) {
    let group = this.entityService.getEntityById(EntityTypeKey.Group, id)
    return group ? group as Group : null;
  }

  getRootGroup() {
    return this.getById(1)!;
  }

  isExist(id: number) {
    return this.getById(id) !== null;
  }

  getParentName(id: number | null) {
    let parent = this.getById(id)
    return parent ? parent.name : ""
  }

  getSubGroup(groupId: number) {
    return this.getAll().filter(g => g.parent === groupId);
  }

  getSubUser(groupId: number) {
    let users: User[] = [];
    let userGroups = this.entityService.getEntityByType(EntityTypeKey.UserGroup) as UserGroup[]
    userGroups.filter(ug => ug.groupId == groupId).forEach(ug => {
      let user = this.entityService.getEntityById(EntityTypeKey.User, ug.userId);
      if (user) {
        users.push(user as User);
      }
    })
    return users;
  }
}
