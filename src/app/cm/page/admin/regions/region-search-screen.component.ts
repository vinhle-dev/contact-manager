import {Component, inject, Input} from '@angular/core';
import {Router} from "@angular/router";
import {RegionCriteria} from "../../../../core/data/entity/RegionCriteria";
import {Region} from "../../../../core/data/entity/Region";
import {RegionService} from "../../../../core/service/data/region.service";
import {NavigationUtil} from "../../../../core/util/NavigationUtil";
import {User} from "../../../../core/data/entity/User";
import {Group} from "../../../../core/data/entity/Group";
import {GroupRegionService} from "../../../../core/service/data/group-region.service";
import {UserRegionService} from "../../../../core/service/data/user-region.service";
import {BaseScreen} from "../../../../core/component/screen/BaseScreen";

@Component({
  selector: 'region-search-screen',
  templateUrl: './region-search-screen.component.html'
})
export class RegionSearchScreenComponent extends BaseScreen {
  @Input({required: true}) regionCriteria!: RegionCriteria;
  @Input({required: true}) group!: Group;
  @Input({required: true}) user!: User;
  protected router = inject(Router);
  protected regionService = inject(RegionService);
  protected groupRegionService = inject(GroupRegionService);
  protected userRegionService = inject(UserRegionService);
  protected regions: Region[] = [];

  protected search(regionService: RegionService, regions: Region[]) {
    regionService.getAll().forEach(c => {
      regions.push(c);
    })
  }

  get Action() {
    if (this.group) {
      return {
        callback: this.selectRegionForGroup,
        initParams: [this.router, this.group.id, this.groupRegionService, this.regions]
      }

    } else {
      return {
        callback: this.selectRegionForUser,
        initParams: [this.router, this.user.id, this.userRegionService, this.regions]
      }
    }
  }

  private selectRegionForGroup(router: Router, groupId: number, service: GroupRegionService,
                               listData: Region[], items: number[]) {
    items.forEach(i => {
      if (listData[i].id) {
        service.create(groupId, listData[i].id!)
      }
    })

    NavigationUtil.skipLocationChange(router, `ab/admin/group/${groupId}`)
  }

  private selectRegionForUser(router: Router, userId: number, service: UserRegionService,
                              listData: Region[], items: number[]) {
    items.forEach(i => {
      if (listData[i].id) {
        service.create(userId, listData[i].id!)
      }
    })

    NavigationUtil.skipLocationChange(router, `ab/admin/user/${userId}`)
  }
}
