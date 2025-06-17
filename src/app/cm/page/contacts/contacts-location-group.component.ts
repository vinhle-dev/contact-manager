import {Component} from '@angular/core';
import {BaseLocationGroup} from "../../../core/component/location/BaseLocationGroup";
import {ContactsPageComponent} from "./contacts-page.component";
import {MergeContactsPageComponent} from "./merge-contacts-page.component";
import {PendingChangesPageComponent} from "./pending-changes-page.component";

@Component({
  selector: 'contacts-location-group',
  templateUrl: './contacts-location-group.component.html'
})
export class ContactsLocationGroupComponent extends BaseLocationGroup {
  id: string = "ContactsLocationGroup";
  title = "Search";

  protected readonly ContactsPageComponent = ContactsPageComponent;
  protected readonly MergeContactsPageComponent = MergeContactsPageComponent;
  protected readonly PendingChangesPageComponent = PendingChangesPageComponent;
}
