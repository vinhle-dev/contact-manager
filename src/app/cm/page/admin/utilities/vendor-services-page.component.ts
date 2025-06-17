import {Component, Type} from '@angular/core';
import {BasePage} from "../../../../core/component/page/BasePage";
import {BaseLocation} from "../../../../core/component/location/BaseLocation";
import {AdminLocationComponent} from "../admin-location.component";

@Component({
  selector: 'vendor-services-page',
  templateUrl: './vendor-services-page.component.html'
})
export class VendorServicesPageComponent extends BasePage {
  location: Type<BaseLocation> = AdminLocationComponent;
  title = "Vendor Services Onboarding";

  protected data = {map: '', mapSub: false, import: '', importSub: false}

  afterCancel(): void {
  }

  afterCommit(): void {
  }
}
