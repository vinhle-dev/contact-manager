import {Component, Type} from '@angular/core';
import {BasePage} from "../../../../core/component/page/BasePage";
import {BaseLocation} from "../../../../core/component/location/BaseLocation";
import {AdminLocationComponent} from "../admin-location.component";

@Component({
  selector: 'data-change-page',
  templateUrl: './data-change-page.component.html'
})
export class DataChangePageComponent extends BasePage {
  location: Type<BaseLocation> = AdminLocationComponent;
  title = "Data Change";

  protected dataChange: {
    reference: string,
    description: string,
    status: string,
    createBy: string,
    createOn: string,
    executedBy: string,
    executed: string
  }[] = [];

  protected filterOptions = ["All", "Open", "Discard", "Executing", "Failed", "Completed"];

  afterCancel(): void {
  }

  afterCommit(): void {
  }
}
