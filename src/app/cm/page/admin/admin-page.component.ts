import {Component, Type} from '@angular/core';
import {BasePage} from "../../../core/component/page/BasePage";
import {BaseLocation} from "../../../core/component/location/BaseLocation";
import {AdminLocationComponent} from "./admin-location.component";

@Component({
  selector: 'admin-page',
  templateUrl: './admin-page.component.html'
})
export class AdminPageComponent extends BasePage {
  location: Type<BaseLocation> = AdminLocationComponent;
  title = "Administration"

  afterCancel(): void {
  }

  afterCommit(): void {
  }
}
