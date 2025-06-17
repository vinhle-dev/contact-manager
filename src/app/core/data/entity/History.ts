import {IEntity} from "../IEntity";
import {EntityTypeKey} from "../typekey/EntityTypeKey";

export class History implements IEntity{
  constructor(
    public id : number | null = null,
    public hisrotyType: string | null = null,
    public user: string | null = null,
    public reviewedBy: string | null = null,
    public date: string | null = null,
    public description: string | null = null,
    public changeDetails: string | null = null,
    public contactId: number | null = null,
    public type = EntityTypeKey.History,

  ) {
  }
}
