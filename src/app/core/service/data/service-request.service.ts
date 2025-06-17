import {Injectable} from '@angular/core';
import {EntityService} from "./entity.service";
import {EntityTypeKey} from "../../data/typekey/EntityTypeKey";
import {Service} from "../../data/entity/Service";

@Injectable({
  providedIn: 'root'
})
export class ServiceRequestService {

  constructor(private entityService: EntityService) {
  }

  getAll() {
    return this.entityService.getEntityByType(EntityTypeKey.ServiceRequest) as Service[]
  }

  getByContactId(contactId: number | null) {
    return this.getAll().filter(service => service.contactId === contactId);
  }
}
