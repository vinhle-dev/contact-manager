import {Injectable} from '@angular/core';
import {EntityService} from "./entity.service";
import {EntityTypeKey} from "../../data/typekey/EntityTypeKey";
import {History} from "../../data/entity/History";

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  constructor(private entityService: EntityService) {
  }

  getAll() {
    return this.entityService.getEntityByType(EntityTypeKey.History) as History[];
  }

  getByContactId(contactId: number | null) {
    return this.getAll().filter(history => history.contactId === contactId);
  }
}
