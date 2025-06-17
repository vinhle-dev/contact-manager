import {IEntity} from "../IEntity";
import {EntityTypeKey} from "../typekey/EntityTypeKey";

export class ContactCriteria implements IEntity {
  constructor(
    public id : number | null = null,
    public contactType: string = "Contact",
    public name: string | null = null,
    public score: number | null = null,
    public tag: string | null = null,
    public tagRequired: boolean = false,
    public availableForWork: string | null = null,
    public pendingCreate: boolean = false,
    public country: string | null = null,
    public city: string | null = null,
    public state: string | null = null,
    public zipCode: string | null = null,
    public type = EntityTypeKey.ContactCriteria,
  ) {
  }
}
