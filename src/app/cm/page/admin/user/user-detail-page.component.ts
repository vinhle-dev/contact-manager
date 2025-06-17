import {Component, inject, OnInit, Type} from '@angular/core';
import {User} from "../../../../core/data/entity/User";
import {UserGroup} from "../../../../core/data/entity/UserGroup";
import {UserRole} from "../../../../core/data/entity/UserRole";
import {Region} from "../../../../core/data/entity/Region";
import {BasePage} from "../../../../core/component/page/BasePage";
import {BaseLocation} from "../../../../core/component/location/BaseLocation";
import {AdminLocationComponent} from "../admin-location.component";
import {ActivatedRoute, Router} from "@angular/router";
import {UserGroupService} from "../../../../core/service/data/user-group.service";
import {UserService} from "../../../../core/service/data/user.service";
import {UserRegionService} from "../../../../core/service/data/user-region.service";
import {NavigationUtil} from "../../../../core/util/NavigationUtil";

@Component({
  selector: 'user-detail-page',
  templateUrl: './user-detail-page.component.html'
})
export class UserDetailPageComponent extends BasePage implements OnInit {
  location: Type<BaseLocation> = AdminLocationComponent;
  title = ""
  protected user!: User;
  protected userGroups: UserGroup[] = [];
  protected userRoles: UserRole[] = [];
  protected regions: Region[] = [];

  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private userGroupService = inject(UserGroupService);
  private userService = inject(UserService);
  private userRegionService = inject(UserRegionService);

  ngOnInit() {
    this.route.params.subscribe(params => {
      let id = Number((params['id']));
      if (this.userService.isExist(id)) {
        this.user = this.userService.getById(id)!;
        this.userGroups = this.userGroupService.getByUserId(this.user.id);
        this.userRoles = this.userService.getUserRoles(this.user.id);

      } else {
        this.user = new User();
      }

      this.title = this.user.name ? this.user.name : "New User";

      this.regions = this.userRegionService.getRegionsByUserId(this.user.id)
    });
  }

  afterCancel(): void {
    if (!this.user.id) {
      NavigationUtil.skipLocationChange(this.router, "ab/admin")
    } else {
      this.pageService.editMode$.next(false);
    }
  }

  afterCommit(): void {
    if (this.user) {
      this.userService.updateUser(this.user, this.userGroups);
      this.pageService.editMode$.next(false);
    }
  }
}
