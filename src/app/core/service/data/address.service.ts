import {Injectable} from '@angular/core';
import {Address} from "../../data/entity/Address";
import {ContactAddressService} from "./contact-address.service";
import {EntityService} from "./entity.service";
import {EntityTypeKey} from "../../data/typekey/EntityTypeKey";

@Injectable({
  providedIn: 'root'
})
export class AddressService {
  constructor(private caService: ContactAddressService,
              private entityService: EntityService) {
  }

  getById(id: number | null) {
    let address = this.entityService.getEntityById(EntityTypeKey.Address, id)
    return address ? address as Address : null;
  }

  getAddresses(id: number[] | null) {
    let addresses: Address[] = [];
    id?.forEach(id => {
      let address = this.getById(id)
      if (address) {
        addresses.push(address);
      }
    })

    return addresses;
  }

  isPrimary(contactId: number | null, addressId: number | null): boolean {
    let ca = this.caService.getByContactIdAndAddressId(contactId, addressId)
                                                  .find(ca => ca.primary);
    return ca ? ca.primary! : false
  }
}
