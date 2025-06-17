import {Component, inject, Input} from '@angular/core';
import {Region} from "../../../../core/data/entity/Region";
import {NavigationUtil} from "../../../../core/util/NavigationUtil";
import {Router} from "@angular/router";
import {BaseScreen} from "../../../../core/component/screen/BaseScreen";

@Component({
  selector: 'regions-screen',
  templateUrl: './regions-screen.component.html'
})
export class RegionsScreenComponent extends BaseScreen {
  @Input({required: true}) regions!: Region[];

  protected router = inject(Router)

  addRegion(router: Router, path: string) {
    NavigationUtil.skipLocationChange(router, path)
  }

  removeRegion(listData: Region[], items: number[]) {
    items.forEach(i => listData.splice(i, 1));
  }
}
