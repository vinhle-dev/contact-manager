import {Component, inject, OnInit, Type} from '@angular/core';
import {BasePage} from "../../../../core/component/page/BasePage";
import {BaseLocation} from "../../../../core/component/location/BaseLocation";
import {AdminLocationComponent} from "../admin-location.component";
import {RegionCriteria} from "../../../../core/data/entity/RegionCriteria";
import {Group} from "../../../../core/data/entity/Group";
import {User} from "../../../../core/data/entity/User";
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../../../../core/service/data/user.service";
import {GroupService} from "../../../../core/service/data/group.service";

@Component({
  selector: 'region-search',
  templateUrl: './region-search-page.component.html'
})
export class RegionSearchPageComponent extends BasePage implements OnInit {
  location: Type<BaseLocation> = AdminLocationComponent;
  title = ""

  private route = inject(ActivatedRoute);
  private userService = inject(UserService);
  private groupService = inject(GroupService);

  protected regionCriteria = new RegionCriteria();
  protected group!: Group;
  protected user!: User;

  ngOnInit() {
    this.route.params.subscribe(params => {
      let groupId = Number((params['groupId']));
      if (groupId > 0 && this.userService.isExist(groupId)) {
        this.group = this.groupService.getById(groupId)!;
        this.title = "Browse Group Regions";
      }

      let userId = Number((params['userId']));
      if (userId > 0 && this.userService.isExist(userId)) {
        this.user = this.userService.getById(userId)!;
        this.title = "Browse User Regions";
      }
    });
  }

  afterCancel(): void {
  }

  afterCommit(): void {
  }
}
