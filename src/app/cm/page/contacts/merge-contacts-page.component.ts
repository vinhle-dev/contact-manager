import {Component, Type} from '@angular/core';
import {DuplicateContactCriteria} from "../../../core/data/entity/DuplicateContactCriteria";
import {BasePage} from "../../../core/component/page/BasePage";
import {BaseLocation} from "../../../core/component/location/BaseLocation";
import {ContactLocationComponent} from "./contact-location.component";

@Component({
  selector: 'merge-contacts-page',
  templateUrl: './merge-contacts-page.component.html'
})
export class MergeContactsPageComponent extends BasePage {
  location: Type<BaseLocation> = ContactLocationComponent;
  title = "Potential Merge Contacts";

  protected duplicateContactCriteria = new DuplicateContactCriteria();

  afterCancel(): void {
  }

  afterCommit(): void {
  }
}
