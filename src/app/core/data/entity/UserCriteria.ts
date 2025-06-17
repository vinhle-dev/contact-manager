import {IEntity} from "../IEntity";
import {EntityTypeKey} from "../typekey/EntityTypeKey";

export class UserCriteria implements IEntity {
  constructor(
    public id : number | null = null,
    public userName: string | null = null,
    public firstName: string | null = null,
    public lastName: string | null = null,
    public roleId: number | null = null,
    public country: string | null = null,
    public city: string | null = null,
    public state: string | null = null,
    public zipCode: string | null = null,
    public type = EntityTypeKey.UserCriteria,

  ) {
  }
}
