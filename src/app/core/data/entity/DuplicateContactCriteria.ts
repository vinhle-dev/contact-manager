import {IEntity} from "../IEntity";
import {EntityTypeKey} from "../typekey/EntityTypeKey";

export class DuplicateContactCriteria implements IEntity {
  constructor(
    public id : number | null = null,
    public name: string | null = null,
    public matchType: string = "Exact",
    public isLastRun: boolean | null = null,
    public runAfter: Date | null = null,
    public type = EntityTypeKey.DuplicateContactCriteria,

  ) {
  }
}
