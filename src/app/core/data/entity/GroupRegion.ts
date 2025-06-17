import {IEntity} from "../IEntity";
import {EntityTypeKey} from "../typekey/EntityTypeKey";

export class GroupRegion implements IEntity {
  constructor(
    public id : number | null = null,
    public groupId: number | null = null,
    public regionId: number | null = null,
    public type = EntityTypeKey.GroupRegion,

  ) {
  }
}
