import {Component, inject, OnInit, Type} from '@angular/core';
import {BasePage} from "../../../../core/component/page/BasePage";
import {BaseLocation} from "../../../../core/component/location/BaseLocation";
import {AdminLocationComponent} from "../admin-location.component";
import {RegionService} from "../../../../core/service/data/region.service";
import {Region} from "../../../../core/data/entity/Region";
import {PageService} from "../../../../core/service/page/PageService";

@Component({
  selector: 'regions-page',
  templateUrl: './regions-page.component.html',
  providers: [{
    provide: RegionsPageComponent, useFactory: () => {
      const pageService = inject(PageService);
      const regionService = inject(RegionService);
      return new RegionsPageComponent(pageService, regionService);
    }
  }]
})
export class RegionsPageComponent extends BasePage implements OnInit {
  location: Type<BaseLocation> = AdminLocationComponent;
  title = "Regions";

  protected regions: Region[] = [];

  constructor(pageService: PageService, private regionService: RegionService) {
    super(pageService);
  }

  ngOnInit() {
    this.regions = this.regionService.getAll()
  }

  afterCancel(): void {
  }

  afterCommit(): void {
  }
}
