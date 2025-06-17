import {Component} from '@angular/core';
import {NavigationUtil} from "../../../../core/util/NavigationUtil";
import {Router} from "@angular/router";
import {MenuActionsComponent} from "../../../component/location/menu-actions/menu-actions.component";

@Component({
  selector: 'admin-menu-actions',
  templateUrl: './admin-menu-actions.component.html'
})
export class AdminMenuActionsComponent extends MenuActionsComponent {
  constructor(protected router: Router) {
    super();
  }

  onClickLink(path: string, router: Router) {
    NavigationUtil.skipLocationChange(router, path)
  }
}
