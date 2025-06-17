import {Component, Input, TemplateRef} from '@angular/core';
import {NavigationUtil} from "../../../../core/util/NavigationUtil";
import {Router} from "@angular/router";
import {CookieUtil} from "../../../../core/util/CookieUtil";

@Component({
  selector: 'tab-bar',
  templateUrl: './tab-bar.component.html'
})
export class TabBarComponent {
  @Input() tabsTemplate!: TemplateRef<any>;
  @Input() linksTemplate!: TemplateRef<any>;

  constructor(protected router: Router) {
  }

  protected onClickLogo() {
    NavigationUtil.skipLocationChange(this.router, '/')
  }

  protected onClickTab(router: Router, path: string, id?: string) {
    if (id) {
      // Update tabbar value
      CookieUtil.update("control", "tabbar", id);

      CookieUtil.reset("treeView");
      CookieUtil.reset("treeViewArrow");
      CookieUtil.reset("location");
    }

    NavigationUtil.skipLocationChange(router, path)
  }
}
