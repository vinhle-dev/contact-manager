import {Component, Input} from '@angular/core';
import {Contact} from "../../../core/data/entity/Contact";
import {DuplicateContactCriteria} from "../../../core/data/entity/DuplicateContactCriteria";
import {BaseScreen} from "../../../core/component/screen/BaseScreen";

@Component({
  selector: 'merge-contacts-screen',
  templateUrl: './merge-contacts-screen.component.html'
})
export class MergeContactsScreenComponent extends BaseScreen {
  @Input({required: true}) duplicateContactCriteria!: DuplicateContactCriteria;
  protected contacts: Contact[] = [];
  protected matchTypeOptions = ["All", "Exact", "Potential"]
}
