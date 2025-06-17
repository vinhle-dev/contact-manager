import {Component, Input} from '@angular/core';
import {Contact} from "../../../core/data/entity/Contact";
import {BaseScreen} from "../../../core/component/screen/BaseScreen";

@Component({
  selector: 'pending-changes-screen',
  templateUrl: './pending-changes-screen.component.html'
})
export class PendingChangesScreenComponent extends BaseScreen {
  @Input({required: true}) updateContacts!: Contact[];
  @Input({required: true}) createContacts!: Contact[];
}
