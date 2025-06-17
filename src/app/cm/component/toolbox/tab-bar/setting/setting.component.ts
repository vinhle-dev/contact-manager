import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {NavigationUtil} from "../../../../../core/util/NavigationUtil";

@Component({
  selector: 'setting',
  templateUrl: './setting.component.html',
  host: {'class': 'setting'}
})
export class SettingComponent {
  protected options = ["International", "Help", "About", "Preferences", "Clear Layout Preferences", "Log Out"];

  constructor(protected router: Router) {
  }

  protected onClickLink(path: string) {
    NavigationUtil.skipLocationChange(this.router, path)
  }
}
