import {Component, inject, Type} from '@angular/core';
import {BasePage} from "../../../../core/component/page/BasePage";
import {BaseLocation} from "../../../../core/component/location/BaseLocation";
import {AdminLocationComponent} from "../admin-location.component";
import {Group} from "../../../../core/data/entity/Group";
import {UserGroup} from "../../../../core/data/entity/UserGroup";
import {Router} from "@angular/router";
import {GroupService} from "../../../../core/service/data/group.service";
import {NavigationUtil} from "../../../../core/util/NavigationUtil";

@Component({
  selector: 'new-group-page',
  templateUrl: './new-group-page.component.html'
})
export class NewGroupPageComponent extends BasePage {
  location: Type<BaseLocation> = AdminLocationComponent;
  title = "New Group";

  protected group = new Group();
  protected userGroups: UserGroup[] = [];
  private router = inject(Router);
  private groupService = inject(GroupService);


  afterCancel(): void {
    NavigationUtil.skipLocationChange(this.router, "ab/admin")
  }

  afterCommit(): void {
    if (this.group) {
      this.groupService.updateGroup(this.group, this.userGroups);
      if (this.group.id) {
        this.pageService.editMode$.next(false);
      } else {
        NavigationUtil.skipLocationChange(this.router, "ab/admin")
      }
    }
  }
}
