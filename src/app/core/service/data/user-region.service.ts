import {Injectable} from '@angular/core';
import {UserRegion} from "../../data/entity/UserRegion";
import {Region} from "../../data/entity/Region";
import {EntityService} from "./entity.service";
import {EntityTypeKey} from "../../data/typekey/EntityTypeKey";

@Injectable({
  providedIn: 'root'
})
export class UserRegionService {

  constructor(private entityService: EntityService) {
  }

  getAll() {
    return this.entityService.getEntityByType(EntityTypeKey.UserRegion) as UserRegion[];
  }

  create(userId: number, regionId: number) {
    this.entityService.updateEntity(EntityTypeKey.UserRegion, new UserRegion(null, userId, regionId));
  }

  getRegionsByUserId(userId: number | null) {
    let regionsId = this.getAll().filter(ur => ur.userId === userId);
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
