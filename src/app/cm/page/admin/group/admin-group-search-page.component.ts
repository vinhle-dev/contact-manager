import {Component, Type} from '@angular/core';
import {BasePage} from "../../../../core/component/page/BasePage";
import {BaseLocation} from "../../../../core/component/location/BaseLocation";
import {AdminLocationComponent} from "../admin-location.component";
import {GroupCriteria} from "../../../../core/data/entity/GroupCriteria";

@Component({
  selector: 'admin-group-search-page',
  templateUrl: './admin-group-search-page.component.html'
})
export class AdminGroupSearchPageComponent extends BasePage {
  location: Type<BaseLocation> = AdminLocationComponent;
  title = "Groups";

  protected groupCriteria = new GroupCriteria();

  afterCancel(): void {
  }

  afterCommit(): void {
  }
}
