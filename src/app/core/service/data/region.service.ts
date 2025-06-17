import {Injectable} from '@angular/core';
import {Region} from "../../data/entity/Region";
import {EntityService} from "./entity.service";
import {EntityTypeKey} from "../../data/typekey/EntityTypeKey";

@Injectable({
  providedIn: 'root'
})
export class RegionService {
  constructor(private entityService: EntityService) {
  }

  getAll() {
    return this.entityService.getEntityByType(EntityTypeKey.Region) as Region[];
  }

  getById(id: number | null) {
    let region = this.entityService.getEntityById(EntityTypeKey.Region, id);
    return region ? region as Region : null;
  }

  update(region: Region) {
    this.entityService.updateEntity(EntityTypeKey.Region, region);
  }
}
