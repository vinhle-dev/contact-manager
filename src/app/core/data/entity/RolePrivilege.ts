import {IEntity} from "../IEntity";
import {EntityTypeKey} from "../typekey/EntityTypeKey";

export class RolePrivilege implements IEntity {
  constructor(
    public id: number | null = null,
    public roleId: number | null = null,
    public permissionId: number | null = null,
    public type = EntityTypeKey.RolePrivilege,
  ) {
  }
}
