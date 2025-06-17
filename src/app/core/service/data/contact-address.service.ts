import {Injectable} from '@angular/core';
import {EntityService} from "./entity.service";
import {EntityTypeKey} from "../../data/typekey/EntityTypeKey";
import {ContactAddress} from "../../data/entity/ContactAddress";

@Injectable({
  providedIn: 'root'
})
export class ContactAddressService {

  constructor(private entityService: EntityService) {
  }

  getAll() {
    return this.entityService.getEntityByType(EntityTypeKey.ContactAddress) as ContactAddress[]
  }

  getByContactId(contactId: number | null) {
    return this.getAll().filter(ca => ca.contactId === contactId);
  }

  getByContactIdAndAddressId(contactId: number | null, addressId: number | null) {
    let ca = this.getAll().filter(ca => ca.contactId === contactId && ca.addressId === addressId);
    return ca ? ca : []
  }
}
