import {Injectable} from '@angular/core';
import {EntityService} from "./entity.service";
import {EntityTypeKey} from "../../data/typekey/EntityTypeKey";
import {Document} from "../../data/entity/Document";

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  constructor(private entityService: EntityService) {
  }

  getAll() {
    return this.entityService.getEntityByType(EntityTypeKey.Document) as Document[];
  }

  getById(id: number | null) {
    let doc = this.entityService.getEntityById(EntityTypeKey.Document, id)
    return doc ? doc as Document : null;
  }

  getByContactId(contactId: number | null) {
    return this.getAll().filter(doc => doc.contactId == contactId)
  }
}
