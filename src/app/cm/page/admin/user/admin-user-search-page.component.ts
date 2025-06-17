import {Component, Type} from '@angular/core';
import {UserCriteria} from "../../../../core/data/entity/UserCriteria";
import {BasePage} from "../../../../core/component/page/BasePage";
import {BaseLocation} from "../../../../core/component/location/BaseLocation";
import {AdminLocationComponent} from "../admin-location.component";

@Component({
  selector: 'admin-user-search-page',
  templateUrl: './admin-user-search-page.component.html'
})
export class AdminUserSearchPageComponent extends BasePage {
  location: Type<BaseLocation> = AdminLocationComponent;
  title = "Users";

  protected userCriteria!: UserCriteria;

  afterCancel(): void {
  }

  afterCommit(): void {
  }
}
