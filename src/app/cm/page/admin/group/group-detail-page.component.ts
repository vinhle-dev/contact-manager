import {Component, inject, OnInit, Type} from '@angular/core';
import {BasePage} from "../../../../core/component/page/BasePage";
import {BaseLocation} from "../../../../core/component/location/BaseLocation";
import {AdminLocationComponent} from "../admin-location.component";
import {ActivatedRoute} from "@angular/router";
import {GroupService} from "../../../../core/service/data/group.service";
import {GroupRegionService} from "../../../../core/service/data/group-region.service";
import {UserGroupService} from "../../../../core/service/data/user-group.service";
import {Group} from "../../../../core/data/entity/Group";
import {UserGroup} from "../../../../core/data/entity/UserGroup";
import {Region} from "../../../../core/data/entity/Region";

@Component({
  selector: 'group-detail-page',
  templateUrl: './group-detail-page.component.html'
})
export class GroupDetailPageComponent extends BasePage implements OnInit {
  location: Type<BaseLocation> = AdminLocationComponent;
  title = "";

  protected group!: Group;
  protected userGroups: UserGroup[] = [];
  protected regions: Region[] = [];

  private route = inject(ActivatedRoute)
  private groupService = inject(GroupService)
  private groupRegionService = inject(GroupRegionService)
  private userGroupService = inject(UserGroupService)

  ngOnInit() {
    this.route.params.subscribe(params => {
      let id = Number((params['id']));
      if (this.groupService.isExist(id)) {
        this.group = this.groupService.getById(id)!;
        this.userGroups = this.userGroupService.getByGroupId(this.group.id);
        this.title = this.group.name ? this.group.name : "";

      } else {
        throw `Cannot found group with id ${id}`;
      }

      this.regions = this.groupRegionService.getRegionsByGroupId(this.group.id)
    });

  }

  afterCancel(): void {
    this.pageService.editMode$.next(false);
  }

  afterCommit(): void {
    if (this.group) {
      this.groupService.updateGroup(this.group, this.userGroups);
      this.pageService.editMode$.next(false);
    }
  }
}
