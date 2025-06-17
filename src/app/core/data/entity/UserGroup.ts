import {IEntity} from "../IEntity";
import {EntityTypeKey} from "../typekey/EntityTypeKey";

export class UserGroup implements IEntity {
  constructor(
    public id : number | null = null,
    public userId: number | null = null,
    public groupId: number | null = null,
    public name: string | null = null,
    public member: boolean | null = null,
    public manager: boolean | null = null,
    public proximityStatus: string = "Failed",
    public type = EntityTypeKey.UserGroup,

  ) {
  }
}
