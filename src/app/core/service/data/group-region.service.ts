import {Injectable} from '@angular/core';
import {GroupRegion} from "../../data/entity/GroupRegion";
import {Region} from "../../data/entity/Region";
import {EntityService} from "./entity.service";
import {EntityTypeKey} from "../../data/typekey/EntityTypeKey";

@Injectable({
  providedIn: 'root'
})
export class GroupRegionService {

  constructor(private entityService: EntityService) {
  }

  getAll() {
    return this.entityService.getEntityByType(EntityTypeKey.GroupRegion) as GroupRegion[];
  }

  create(groupId: number, regionId: number) {
    this.entityService.updateEntity(EntityTypeKey.GroupRegion, new GroupRegion(null, groupId, regionId));
  }

  getRegionsByGroupId(groupId: number | null) {
    let regionsId = this.getAll().filter(ur => ur.groupId == groupId);
    let result: Region[] = [];
    regionsId.forEach(ur => {
      let region = this.entityService.getEntityById(EntityTypeKey.Region, ur.regionId)
      if (region) {
        result.push(region as Region);
      }
    })

    return result
  }
}
