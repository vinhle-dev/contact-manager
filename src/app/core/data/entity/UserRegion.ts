import {IEntity} from "../IEntity";
import {EntityTypeKey} from "../typekey/EntityTypeKey";

export class UserRegion implements IEntity {
  constructor(
    public id : number | null = null,
    public userId: number | null = null,
    public regionId: number | null = null,
    public type = EntityTypeKey.UserRegion,

  ) {
  }
}
