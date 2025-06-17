import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgOptimizedImage} from "@angular/common";
import {DynamicTemplateDirective} from './cm/directive/dynamic-template.directive';
import {TestComponent} from './test/test.component';
import {ListViewComponent} from "./cm/component/toolbox/listviews/list-view/list-view.component";
import {ListViewInputComponent} from './cm/component/toolbox/listviews/list-view-input/list-view-input.component';
import {ToolbarComponent} from './cm/component/toolbox/toolbars/toolbar/toolbar.component';
import {ToolbarDividerComponent} from './cm/component/toolbox/toolbars/toolbar-divider/toolbar-divider.component';
import {
  RowIteratorComponent
} from "./cm/component/toolbox/listviews/list-view/row-and-cell-layout/row-iterator/row-iterator.component";
import {RowComponent} from "./cm/component/toolbox/listviews/list-view/row-and-cell-layout/row/row.component";
import {RangeCellComponent} from "./cm/component/toolbox/listviews/basic-cells/range-cell/range-cell.component";
import {
  RadioButtonCellComponent
} from "./cm/component/toolbox/listviews/basic-cells/radio-button-cell/radio-button-cell.component";
import {TextCellComponent} from './cm/component/toolbox/listviews/basic-cells/text-cell/text-cell.component';
import {CardComponent} from './cm/component/toolbox/cardviews/card/card.component';
import {CardPanelComponent} from './cm/component/toolbox/cardviews/card-panel/card-panel.component';
import {DetailViewComponent} from "./cm/component/toolbox/detailviews/detail-view/detail-view.component";
import {ScreenComponent} from './cm/component/location/page/screen/screen.component';
import {
  InputColumnComponent
} from './cm/component/toolbox/detailviews/input-layout/input-column/input-column.component';
import {TextInputComponent} from './cm/component/toolbox/detailviews/basic-inputs/text-input/text-input.component';
import {
  TypekeyInputComponent
} from './cm/component/toolbox/detailviews/range-inputs/typekey-input/typekey-input.component';
import {LoginPageComponent} from "./cm/page/login/login-page.component";
import {
  PasswordInputComponent
} from './cm/component/toolbox/detailviews/common-app-inputs/password-input/password-input.component';
import {PageComponent} from './cm/component/location/page/page.component';
import {TabBarComponent} from './cm/component/location/tab-bar/tab-bar.component';
import {MenuActionsComponent} from './cm/component/location/menu-actions/menu-actions.component';
import {MenuTreeComponent} from './cm/component/location/menu-tree/menu-tree.component';
import {LocationGroupComponent} from "./cm/component/location/location-group/location-group.component";
import {LocationRefComponent} from './cm/component/toolbox/location-groups/location-ref/location-ref.component';
import {TreeViewComponent} from './cm/component/toolbox/tree-views/tree-view/tree-view.component';
import {MenuItemComponent} from './cm/component/toolbox/menus/basic-menu-items/menu-item/menu-item.component';
import {TabComponent} from './cm/component/toolbox/tab-bar/tab/tab.component';
import {QuickJumpComponent} from './cm/component/toolbox/tab-bar/quick-jump/quick-jump.component';
import {SettingComponent} from './cm/component/toolbox/tab-bar/setting/setting.component';
import {UnsavedWorkComponent} from "./cm/component/toolbox/tab-bar/unsaved-work/unsaved-work.component";
import {AdminPageComponent} from './cm/page/admin/admin-page.component';
import {AdminLocationGroupComponent} from './cm/page/admin/admin-location-group/admin-location-group.component';
import {AdminScreenComponent} from './cm/page/admin/admin-screen/admin-screen.component';
import {AdminMenuActionsComponent} from './cm/page/admin/admin-menu-actions/admin-menu-actions.component';
import {AdminMenuTreeComponent} from './cm/page/admin/admin-menu-tree/admin-menu-tree.component';
import {RolesPageComponent} from './cm/page/admin/role/roles-page.component';
import {VerbatimTextComponent} from './cm/component/toolbox/messages/verbatim-text/verbatim-text.component';
import {PopupComponent} from './cm/component/location/page/popup/popup.component';
import {NewRolePageComponent} from './cm/page/admin/role/new-role-page.component';
import {RoleDetailPopupComponent} from './cm/page/admin/role/role-detail-popup.component';
import {RoleDetailScreenComponent} from './cm/page/admin/role/role-detail-screen.component';
import {UserDetailPageComponent} from './cm/page/admin/user/user-detail-page.component';
import {UserDetailScreenComponent} from './cm/page/admin/user/user-detail-screen.component';
import {GroupDetailScreenComponent} from './cm/page/admin/group/group-detail-screen.component';
import {GroupDetailPageComponent} from './cm/page/admin/group/group-detail-page.component';
import {ContactsLocationGroupComponent} from './cm/page/contacts/contacts-location-group.component';
import {ContactsPageComponent} from './cm/page/contacts/contacts-page.component';
import {ContactSearchScreenComponent} from './cm/page/contacts/contact-search-screen.component';
import {TitleBarComponent} from './cm/component/toolbox/panel-layout/title-bar/title-bar.component';
import {LinkComponent} from './cm/component/toolbox/detailviews/links/link/link.component';
import {InputSetComponent} from './cm/component/toolbox/detailviews/input-layout/input-set/input-set.component';
import {
  InputFooterComponent
} from './cm/component/toolbox/detailviews/input-layout/input-footer/input-footer.component';
import {ContentInputComponent} from './cm/component/toolbox/detailviews/links/content-input/content-input.component';
import {PanelRefComponent} from './cm/component/toolbox/panel-layout/panel-ref/panel-ref.component';
import {SearchPanelComponent} from './cm/component/toolbox/special-panels/search-panel/search-panel.component';
import {
  IteratorButtonsComponent
} from "./cm/component/toolbox/toolbars/toolbar-buttons/iterator-buttons/iterator-buttons.component";
import {
  EditButtonsComponent
} from "./cm/component/toolbox/toolbars/toolbar-buttons/edit-buttons/edit-buttons.component";
import {
  CheckedValueToolbarButtonComponent
} from "./cm/component/toolbox/toolbars/toolbar-buttons/checked-value-toolbar-button/checked-value-toolbar-button.component";
import {
  BooleanRadioButtonInputComponent
} from './cm/component/toolbox/detailviews/basic-inputs/boolean-radio-button-input/boolean-radio-button-input.component';
import {
  InputDividerComponent
} from './cm/component/toolbox/detailviews/input-layout/input-divider/input-divider.component';
import {LabelComponent} from './cm/component/toolbox/detailviews/formatting-inputs/label/label.component';
import {NewGroupPageComponent} from './cm/page/admin/group/new-group-page.component';
import {NewGroupScreenComponent} from './cm/page/admin/group/new-group-screen.component';
import {RegionsPageComponent} from './cm/page/admin/regions/regions-page.component';
import {RegionsScreenComponent} from './cm/page/admin/regions/regions-screen.component';
import {
  ToolbarButtonComponent
} from "./cm/component/toolbox/toolbars/toolbar-buttons/toolbar-button/toolbar-button.component";
import {AdminGroupSearchPageComponent} from './cm/page/admin/group/admin-group-search-page.component';
import {AdminGroupSearchScreenComponent} from './cm/page/admin/group/admin-group-search-screen.component';
import {SearchAndResetInputSetComponent} from './cm/page/shared/search-and-reset-input-set.component';
import {AdminUserSearchPageComponent} from './cm/page/admin/user/admin-user-search-page.component';
import {UserSearchScreenComponent} from './cm/page/admin/user/user-search-screen.component';
import {MergeContactsScreenComponent} from './cm/page/contacts/merge-contacts-screen.component';
import {MergeContactsPageComponent} from './cm/page/contacts/merge-contacts-page.component';
import {PendingChangesPageComponent} from './cm/page/contacts/pending-changes-page.component';
import {PendingChangesScreenComponent} from './cm/page/contacts/pending-changes-screen.component';
import {MessageQueuesPageComponent} from './cm/page/admin/messaging/message-queues-page.component';
import {ImportDataPageComponent} from './cm/page/admin/utilities/import-data-page.component';
import {ExportDataPageComponent} from './cm/page/admin/utilities/export-data-page.component';
import {ScriptParametersPageComponent} from './cm/page/admin/utilities/script-parameters-page.component';
import {VendorServicesPageComponent} from "./cm/page/admin/utilities/vendor-services-page.component";
import {DataChangePageComponent} from "./cm/page/admin/utilities/data-change-page.component";
import {
  ToolbarFilterComponent
} from './cm/component/toolbox/toolbars/toolbar-inputs/toolbar-filter/toolbar-filter.component';
import {CheckBoxComponent} from './cm/component/toolbox/detailviews/basic-inputs/check-box/check-box.component';
import {ContactDetailPageComponent} from './cm/page/contacts/contact-detail-page.component';
import {ContactDetailScreenComponent} from './cm/page/contacts/contact-detail-screen.component';
import {InfoBarComponent} from './cm/component/location/infobar/infobar.component';
import {InfoBarElementComponent} from './cm/component/location/infobar/infobar-element/infobar-element.component';
import {
  InputHeaderComponent
} from './cm/component/toolbox/detailviews/input-layout/input-header/input-header.component';
import {
  ListDetailPanelComponent
} from './cm/component/toolbox/special-panels/list-detail-panel/list-detail-panel.component';
import {AddressInputSetComponent} from './cm/page/shared/address-input-set.component';
import {LinkCellComponent} from "./cm/component/toolbox/listviews/link-cells/link-cell/link-cell.component";
import {AddRegionPageComponent} from './cm/page/admin/regions/add-region-page.component';
import {AddRegionScreenComponent} from './cm/page/admin/regions/add-region-screen.component';
import {RegionSearchPageComponent} from './cm/page/admin/regions/region-search-page.component';
import {RegionSearchScreenComponent} from './cm/page/admin/regions/region-search-screen.component';
import {LocationComponent} from './cm/component/location/location.component';
import {AdminLocationComponent} from './cm/page/admin/admin-location.component';
import {UsersAndSecurityLGComponent} from './cm/page/location-group/users-and-security-LG.component';
import {ContactLocationComponent} from './cm/page/contacts/contact-location.component';
import {MonitoringLGComponent} from './cm/page/location-group/monitoring-LG.component';
import {UtilitiesLGComponent} from './cm/page/location-group/utilities-LG.component';
import {ContactInfobarComponent} from './cm/page/infobar/contact-infobar.component';

@NgModule({
  declarations: [
    AddRegionPageComponent,
    AddRegionScreenComponent,
    AddressInputSetComponent,
    AdminGroupSearchPageComponent,
    AdminGroupSearchScreenComponent,
    AdminLocationGroupComponent,
    AdminMenuActionsComponent,
    AdminMenuTreeComponent,
    AdminPageComponent,
    AdminScreenComponent,
    AdminUserSearchPageComponent,
    AppComponent,
    BooleanRadioButtonInputComponent,
    CardComponent,
    CardPanelComponent,
    CheckBoxComponent,
    CheckedValueToolbarButtonComponent,
    ContactDetailPageComponent,
    ContactDetailScreenComponent,
    ContactSearchScreenComponent,
    ContactsLocationGroupComponent,
    ContactsPageComponent,
    ContentInputComponent,
    DataChangePageComponent,
    DetailViewComponent,
    DynamicTemplateDirective,
    EditButtonsComponent,
    ExportDataPageComponent,
    GroupDetailPageComponent,
    GroupDetailScreenComponent,
    ImportDataPageComponent,
    InfoBarComponent,
    InfoBarElementComponent,
    InputColumnComponent,
    InputDividerComponent,
    InputFooterComponent,
    InputHeaderComponent,
    InputSetComponent,
    IteratorButtonsComponent,
    LabelComponent,
    LinkCellComponent,
    LinkComponent,
    ListDetailPanelComponent,
    ListViewComponent,
    ListViewInputComponent,
    LocationComponent,
    LocationGroupComponent,
    LocationRefComponent,
    LoginPageComponent,
    MenuActionsComponent,
    MenuItemComponent,
    MenuTreeComponent,
    MergeContactsPageComponent,
    MergeContactsScreenComponent,
    MessageQueuesPageComponent,
    NewGroupPageComponent,
    NewGroupScreenComponent,
    NewRolePageComponent,
    PageComponent,
    PanelRefComponent,
    PasswordInputComponent,
    PendingChangesPageComponent,
    PendingChangesScreenComponent,
    PopupComponent,
    QuickJumpComponent,
    RadioButtonCellComponent,
    RangeCellComponent,
    RegionSearchPageComponent,
    RegionSearchScreenComponent,
    RegionsPageComponent,
    RegionsScreenComponent,
    RoleDetailPopupComponent,
    RoleDetailScreenComponent,
    RolesPageComponent,
    RowComponent,
    RowIteratorComponent,
    ScreenComponent,
    ScriptParametersPageComponent,
    SearchAndResetInputSetComponent,
    SearchPanelComponent,
    SettingComponent,
    TabBarComponent,
    TabComponent,
    TextCellComponent,
    TextInputComponent,
    TitleBarComponent,
    ToolbarButtonComponent,
    ToolbarComponent,
    ToolbarDividerComponent,
    ToolbarFilterComponent,
    TreeViewComponent,
    TypekeyInputComponent,
    UnsavedWorkComponent,
    UserDetailPageComponent,
    UserDetailScreenComponent,
    UserSearchScreenComponent,
    VendorServicesPageComponent,
    VerbatimTextComponent,
    AdminLocationComponent,
    UsersAndSecurityLGComponent,
    ContactLocationComponent,
    MonitoringLGComponent,
    UtilitiesLGComponent,
    ContactInfobarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgOptimizedImage,
    ReactiveFormsModule,
    TestComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
