import {Component, Type} from '@angular/core';
import {BasePage} from "../../../../core/component/page/BasePage";
import {BaseLocation} from "../../../../core/component/location/BaseLocation";
import {AdminLocationComponent} from "../admin-location.component";

@Component({
  selector: 'export-data-page',
  templateUrl: './export-data-page.component.html'
})
export class ExportDataPageComponent extends BasePage {
  location: Type<BaseLocation> = AdminLocationComponent;
  title = "Export Data";

  protected exportCriteria = {data: "Admin", format: "HTML"};
  // TODO create type list
  protected dataOptions = ['<none>', 'Admin', 'Role', 'Vendor Service Tree'];
  protected formatOptions = ['HTML', 'XML'];

  afterCancel(): void {
  }

  afterCommit(): void {
  }
}
