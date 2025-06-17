import {EntityTypeKey} from "../typekey/EntityTypeKey";
import {IEntity} from "../IEntity";

export class EFTData implements IEntity {
  constructor(
    public id : number | null = null,
    public accountName: string | null = null,
    public bankName: string | null = null,
    public accountType: string | null = null,
    public accountNumber: string | null = null,
    public routingNumber: string | null = null,
    public primary: boolean | null = null,
    public type = EntityTypeKey.EFTData,

  ){}
}
