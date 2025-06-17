import {Component} from '@angular/core';
import {BaseLocationGroup} from "../../../core/component/location/BaseLocationGroup";
import {ImportDataPageComponent} from "../admin/utilities/import-data-page.component";
import {ExportDataPageComponent} from "../admin/utilities/export-data-page.component";
import {ScriptParametersPageComponent} from "../admin/utilities/script-parameters-page.component";
import {VendorServicesPageComponent} from "../admin/utilities/vendor-services-page.component";
import {DataChangePageComponent} from "../admin/utilities/data-change-page.component";

@Component({
  selector: 'app-utilities-LG',
  templateUrl: './utilities-LG.component.html'
})
export class UtilitiesLGComponent extends BaseLocationGroup {
  id: string = "Utilities";
  title: string = "Utilities";

  protected readonly ImportDataPageComponent = ImportDataPageComponent;
  protected readonly ExportDataPageComponent = ExportDataPageComponent;
  protected readonly ScriptParametersPageComponent = ScriptParametersPageComponent;
  protected readonly VendorServicesPageComponent = VendorServicesPageComponent;
  protected readonly DataChangePageComponent = DataChangePageComponent;
}
