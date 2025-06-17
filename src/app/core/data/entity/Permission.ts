import {IEntity} from "../IEntity";
import {EntityTypeKey} from "../typekey/EntityTypeKey";

export class Permission implements IEntity{
  constructor(
    public id : number | null = null,
    public name: string | null = null,
    public code: string | null = null,
    public description: string | null = null,
    public type = EntityTypeKey.Permission,

  ) {
  }
}
