import {IEntity} from "../IEntity";
import {EntityTypeKey} from "../typekey/EntityTypeKey";

export class RegionCriteria implements IEntity{
  constructor(
    public id : number | null = null,
    public name: string | null = null,
    public regionType: string = 'State',
    public code: string | null = null,
    public type = EntityTypeKey.RegionCriteria,

  ) {
  }
}
