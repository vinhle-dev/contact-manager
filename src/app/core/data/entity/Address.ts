import {IEntity} from "../IEntity";
import {EntityTypeKey} from "../typekey/EntityTypeKey";

export class Address implements IEntity {
  constructor(
    public id: number | null = null,
    public country: string | null = null,
    public address1: string | null = null,
    public address2: string | null = null,
    public address3: string | null = null,
    public city: string | null = null,
    public county: string | null = null,
    public state: string | null = null,
    public zipCode: string | null = null,
    public addressType: string | null = null,
    public description: string | null = null,
    public validUntil: string | null = null,
    public type = EntityTypeKey.Address,
  ) {
  }

  get SummaryAddress() {
    let left: string
    let right = `${this.state ? this.state : ""} ${this.zipCode ? this.zipCode : ""}`
    let sumAddress: string

    if (this.address1 && this.city) {
      left = `${this.address1}, ${this.city}`
    } else {
      left = `${this.address1 ? this.address1 : ""} ${this.city ? this.city : ""}`
    }

    if (left !== " " && right !== " ") {
      sumAddress = left + ", " + right
    } else {
      sumAddress = left + right
    }

    return sumAddress;
  }
}
