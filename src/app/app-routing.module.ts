import {inject, NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TestComponent} from "./test/test.component";
import {LoginPageComponent} from "./cm/page/login/login-page.component";
import {AdminPageComponent} from "./cm/page/admin/admin-page.component";
import {RolesPageComponent} from "./cm/page/admin/role/roles-page.component";
import {NewRolePageComponent} from "./cm/page/admin/role/new-role-page.component";
import {RoleDetailPopupComponent} from "./cm/page/admin/role/role-detail-popup.component";
import {UserDetailPageComponent} from "./cm/page/admin/user/user-detail-page.component";
import {GroupDetailPageComponent} from "./cm/page/admin/group/group-detail-page.component";
import {ContactsPageComponent} from "./cm/page/contacts/contacts-page.component";
import {NewGroupPageComponent} from "./cm/page/admin/group/new-group-page.component";
import {RegionsPageComponent} from "./cm/page/admin/regions/regions-page.component";
import {AdminGroupSearchPageComponent} from "./cm/page/admin/group/admin-group-search-page.component";
import {AdminUserSearchPageComponent} from "./cm/page/admin/user/admin-user-search-page.component";
import {MergeContactsPageComponent} from "./cm/page/contacts/merge-contacts-page.component";
import {PendingChangesPageComponent} from "./cm/page/contacts/pending-changes-page.component";
import {MessageQueuesPageComponent} from "./cm/page/admin/messaging/message-queues-page.component";
import {ImportDataPageComponent} from "./cm/page/admin/utilities/import-data-page.component";
import {ExportDataPageComponent} from "./cm/page/admin/utilities/export-data-page.component";
import {ScriptParametersPageComponent} from "./cm/page/admin/utilities/script-parameters-page.component";
import {VendorServicesPageComponent} from "./cm/page/admin/utilities/vendor-services-page.component";
import {DataChangePageComponent} from "./cm/page/admin/utilities/data-change-page.component";
import {ContactDetailPageComponent} from "./cm/page/contacts/contact-detail-page.component";
import {AddRegionPageComponent} from "./cm/page/admin/regions/add-region-page.component";
import {RegionSearchPageComponent} from "./cm/page/admin/regions/region-search-page.component";
import {AuthGuardService} from "./core/service/auth-guard.service";

const routes: Routes = [
  // This path is for testing purposes only
  {path: "test", component: TestComponent},

  // CM path
  {path: "", redirectTo: "ContactManager", pathMatch: "full"},
  {path: "ContactManager", component: LoginPageComponent},

  {path: "",
    canActivateChild:[() => inject(AuthGuardService).canActivate()],
    children: [
      {path: "ab/contacts", component: ContactsPageComponent },
      {path: "ab/contacts/contact", component: ContactDetailPageComponent},
      {path: "ab/contacts/contact/:id", component: ContactDetailPageComponent},
      {path: "ab/contacts/merge", component: MergeContactsPageComponent},
      {path: "ab/contacts/pendingchanges", component: PendingChangesPageComponent},

      {path: "ab/admin", component: AdminPageComponent},
      {path: "ab/admin/regions", component: RegionsPageComponent},
      {path: "ab/admin/regions/region", component: AddRegionPageComponent},
      {path: "ab/admin/regions/regionsearch/:groupId/:userId", component: RegionSearchPageComponent},

      {path: "ab/admin/groups", component: AdminGroupSearchPageComponent},
      {path: "ab/admin/group", component: NewGroupPageComponent},
      {path: "ab/admin/group/:id", component: GroupDetailPageComponent},

      {path: "ab/admin/users", component: AdminUserSearchPageComponent},
      {path: "ab/admin/user", component: UserDetailPageComponent},
      {path: "ab/admin/user/:id", component: UserDetailPageComponent},

      {path: "ab/admin/roles", component: RolesPageComponent},
      {path: "ab/admin/role", component: NewRolePageComponent},
      {path: "ab/admin/role/:id", component: RoleDetailPopupComponent},

      {path: "ab/admin/messaging", component: MessageQueuesPageComponent},
      {path: "ab/admin/importdata", component: ImportDataPageComponent},
      {path: "ab/admin/exportdata", component: ExportDataPageComponent},
      {path: "ab/admin/scriptparameters", component: ScriptParametersPageComponent},
      {path: "ab/admin/vendorservices", component: VendorServicesPageComponent},
      {path: "ab/admin/datachange", component: DataChangePageComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
