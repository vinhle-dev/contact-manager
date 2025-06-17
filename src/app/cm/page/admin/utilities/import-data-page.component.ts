import {Component, Type} from '@angular/core';
import {BasePage} from "../../../../core/component/page/BasePage";
import {BaseLocation} from "../../../../core/component/location/BaseLocation";
import {AdminLocationComponent} from "../admin-location.component";

@Component({
  selector: 'import-data-page',
  templateUrl: './import-data-page.component.html'
})
export class ImportDataPageComponent extends BasePage {
  location: Type<BaseLocation> = AdminLocationComponent;
  title = "Import Administrative Data";

  afterCancel(): void {
  }

  afterCommit(): void {
  }
}
