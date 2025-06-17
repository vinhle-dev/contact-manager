import {IEntity} from "../IEntity";
import {EntityTypeKey} from "../typekey/EntityTypeKey";

export class Contact implements IEntity {
  constructor(
    public id: number | null = null,
    public name: string | null = null,
    public contactType: string | null = null,
    public phoneId: number | null = null,
    public employeeNumber: string | null = null,
    public emailAddress1: string | null = null,
    public emailAddress2: string | null = null,
    public notes: string | null = null,
    public vendorAvailability: string | null = null,
    public vendorUnavailableMessage: string | null = null,
    public preferred: boolean | null = null,
    public w9Received: string | null = null,
    public w9ReceivedDate: string | null = null,
    public w9ValidFrom: string | null = null,
    public w9ValidTo: string | null = null,
    public eFTRecords: number[] | null = null,
    public primaryContact: number[] | null = null,
    public tagType: string | null = null,
    public taxId: string | null = null,
    public type = EntityTypeKey.Contact,

  ) {
  }
}
