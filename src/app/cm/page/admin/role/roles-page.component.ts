import {Component, inject, OnInit, Type} from '@angular/core';
import {Role} from "../../../../core/data/entity/Role";
import {BasePage} from "../../../../core/component/page/BasePage";
import {BaseLocation} from "../../../../core/component/location/BaseLocation";
import {AdminLocationComponent} from "../admin-location.component";
import {RoleService} from "../../../../core/service/data/role.service";
import {PageService} from "../../../../core/service/page/PageService";

@Component({
  selector: 'roles-page',
  templateUrl: './roles-page.component.html',
  providers: [{
    provide: RolesPageComponent, useFactory: () => {
      const pageService = inject(PageService);
      const roleService = inject(RoleService);
      return new RolesPageComponent(pageService, roleService);
    }
  }]
})
export class RolesPageComponent extends BasePage implements OnInit {
  location: Type<BaseLocation> = AdminLocationComponent;
  title = "Roles";

  protected roles: Role[] = [];

  constructor(pageService: PageService, protected roleService: RoleService) {
    super(pageService)
  }

  ngOnInit() {
    this.roles = this.roleService.getAll()
  }

  onClickLink(pageService: PageService, path: string) {
    pageService.go(path)
  }

  toRemove(listData: Role[], items: number[]) {
    items.forEach(i => listData.splice(i, 1));
  }

  afterCancel(): void {
  }

  afterCommit(): void {
  }
}
