import {IEntity} from "../IEntity";
import {EntityTypeKey} from "../typekey/EntityTypeKey";

export class Group implements IEntity {
  constructor(
    public id : number | null = null,
    public name: string | null = null,
    public groupType: string | null = null,
    public parent: number | null = null,
    public supervisor: string | null = null,
    public type = EntityTypeKey.Group,

  ) {
  }
}
