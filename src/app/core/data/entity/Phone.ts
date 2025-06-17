import {IEntity} from "../IEntity";
import {EntityTypeKey} from "../typekey/EntityTypeKey";

export class Phone implements IEntity{
  constructor(
    public id : number | null = null,
    public primaryPhone: string | null = null,
    public home: string | null = null,
    public fax: string | null = null,
    public mobile: string | null = null,
    public work: string | null = null,
    public type = EntityTypeKey.Phone,

  ) {
  }
}
