import {Component, Type} from '@angular/core';
import {Contact} from "../../../core/data/entity/Contact";
import {BasePage} from "../../../core/component/page/BasePage";
import {BaseLocation} from "../../../core/component/location/BaseLocation";
import {ContactLocationComponent} from "./contact-location.component";

@Component({
  selector: 'pending-changes-page',
  templateUrl: './pending-changes-page.component.html'
})
export class PendingChangesPageComponent extends BasePage {
  location: Type<BaseLocation> = ContactLocationComponent;
  title = "Pending Changes";

  protected updateContacts: Contact[] = [];
  protected createContacts: Contact[] = [];

  afterCancel(): void {
  }

  afterCommit(): void {
  }
}
