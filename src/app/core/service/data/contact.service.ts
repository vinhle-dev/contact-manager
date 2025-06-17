import {Injectable} from '@angular/core';
import {Address} from "../../data/entity/Address";
import {Phone} from "../../data/entity/Phone";
import {Contact} from "../../data/entity/Contact";
import {ContactAddressService} from "./contact-address.service";
import {AddressService} from "./address.service";
import {EntityService} from "./entity.service";
import {EntityTypeKey} from "../../data/typekey/EntityTypeKey";

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private addressService: AddressService,
              private caService: ContactAddressService,
              private entityService: EntityService) {
  }

  getAll(): Contact[] {
    return this.entityService.getEntityByType(EntityTypeKey.Contact) as Contact[];
  }

  getAddress(contact: Contact | null): Address {
    let address = null;
    if (contact) {
      let ca = this.caService.getByContactId(contact.id).find(ca => ca.primary);
      address = this.addressService.getById(ca?.addressId!)
    }
    return address ? address : new Address();
  }

  getPhone(id: number | null): Phone {
    let phone = null
    if (id) {
      phone = this.entityService.getEntityById(EntityTypeKey.Phone, id) as Phone;
    }
    return phone ? phone : new Phone();
  }

  getById(id: number | null) {
    let contact = this.entityService.getEntityById(EntityTypeKey.Contact, id)
    return contact ? contact as Contact : null;
  }

  isExist(id: number) {
    return this.getById(id) !== null;
  }

  update(contact: Contact): void {
    this.entityService.updateEntity(EntityTypeKey.Contact, contact)
  }
}
