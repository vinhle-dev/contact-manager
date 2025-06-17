import {IEntity} from "../IEntity";
import {EntityTypeKey} from "../typekey/EntityTypeKey";

export class UserRole implements IEntity {
  constructor(
    public id : number | null = null,
    public userId: number | null = null,
    public roleId: number | null = null,
    public type = EntityTypeKey.UserRole,
  ) {
  }
}
