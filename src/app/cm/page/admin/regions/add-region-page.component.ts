import {Component, inject, Type} from '@angular/core';
import {BasePage} from "../../../../core/component/page/BasePage";
import {BaseLocation} from "../../../../core/component/location/BaseLocation";
import {AdminLocationComponent} from "../admin-location.component";
import {Region} from "../../../../core/data/entity/Region";
import {Router} from "@angular/router";
import {RegionService} from "../../../../core/service/data/region.service";
import {NavigationUtil} from "../../../../core/util/NavigationUtil";

@Component({
  selector: 'add-region-page',
  templateUrl: './add-region-page.component.html'
})
export class AddRegionPageComponent extends BasePage {
  location: Type<BaseLocation> = AdminLocationComponent;
  title = "Add Region";

  protected region = new Region();
  protected router = inject(Router);

  private regionService = inject(RegionService);

  afterCancel(): void {
    NavigationUtil.skipLocationChange(this.router, "ab/admin/regions")
  }

  afterCommit(): void {
    if (this.region) {
      this.regionService.update(this.region);
      NavigationUtil.skipLocationChange(this.router, 'ab/admin/regions')
    }
  }
}
