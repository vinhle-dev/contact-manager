import {EntityTypeKey} from "../typekey/EntityTypeKey";
import {IEntity} from "../IEntity";

export class Region implements IEntity{
  constructor(
    public id : number | null = null,
    public name: string | null = null,
    public zones: string | null = null,
    public country: string = 'United States',
    public regionType: string = "State",
    public type = EntityTypeKey.Region,

  ) {
  }
}
