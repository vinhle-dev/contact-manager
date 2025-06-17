import {Injectable} from '@angular/core';
import {User} from "../../data/entity/User";
import {UserGroupService} from "./user-group.service";
import {UserGroup} from "../../data/entity/UserGroup";
import {UserRole} from "../../data/entity/UserRole";
import {Contact} from "../../data/entity/Contact";
import {EntityService} from "./entity.service";
import {EntityTypeKey} from "../../data/typekey/EntityTypeKey";
import {Group} from "../../data/entity/Group";
import {StringUtil} from "../../util/StringUtil";

@Injectable({
  providedIn: 'root',
})
export class UserService {

  constructor(private entityService: EntityService,
              private userGroupService: UserGroupService) {
  }


  getAll() {
    return this.entityService.getEntityByType(EntityTypeKey.User) as User[];
  }

  getContact(contactId: number | null) {
    let contact = this.entityService.getEntityById(EntityTypeKey.Contact, contactId);
    return contact ? contact as Contact : new Contact();
  }

  getById(id: number | null) {
    let user = this.entityService.getEntityById(EntityTypeKey.User, id);
    return user ? user as User : null;
  }

  getUserRoles(id: number | null) {
    let userRoles = this.entityService.getEntityByType(EntityTypeKey.UserRole) as UserRole[];
    return userRoles.filter(ur => ur.userId == id)
  }

  isExist(id: number) {
    return this.getById(id) !== null
  }

  updateUser(user: User, userGroups: UserGroup[]): void {
    user.name = user.FullName;
    this.entityService.updateEntity(EntityTypeKey.User, user);

    userGroups.forEach(ug => {
      ug.userId = user.id
      this.userGroupService.updateUserGroup(ug)
    });
  }

  getGroupName(userId: number | null) {
    let userGroup = this.userGroupService.getAll().filter(ug => ug.userId == userId);
    let group = (this.entityService.getEntityByType(EntityTypeKey.Group) as Group[])
                        .filter(g => userGroup.forEach(ug => ug.groupId == g.id));
    let listName: string[] = []
    group.forEach(g => {
      listName.push(StringUtil.safe(g.name));
    })

    return listName.join(", ");
  }
}
