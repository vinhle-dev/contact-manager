import {IEntity} from "../IEntity";
import {EntityTypeKey} from "../typekey/EntityTypeKey";

export class Document implements IEntity {
  constructor(
    public id: number | null = null,
    public name: string | null = null,
    public status: string | null = null,
    public author: string | null = null,
    public uploaded: string | null = null,
    public documentType: string | null = null,
    public contactId: number | null = null,
    public type = EntityTypeKey.Document,

  ) {
  }
}
