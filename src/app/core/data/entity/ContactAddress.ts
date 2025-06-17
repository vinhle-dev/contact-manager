import {IEntity} from "../IEntity";
import {EntityTypeKey} from "../typekey/EntityTypeKey";

export class ContactAddress implements IEntity{
  constructor(
    public id: number | null = null,
    public contactId: number | null = null,
    public addressId: number | null = null,
    public primary: boolean | null = false,
    public type = EntityTypeKey.ContactAddress,

  ) {
  }
}
