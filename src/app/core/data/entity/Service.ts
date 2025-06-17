import {IEntity} from "../IEntity";
import {EntityTypeKey} from "../typekey/EntityTypeKey";

export class Service implements IEntity{
  constructor(
    public id : number | null = null,
    public category: string | null = null,
    public subCategory: string | null = null,
    public serviceType: string | null = null,
    public contactId: number | null = null,
    public type = EntityTypeKey.ServiceRequest,

  ) {
  }
}
