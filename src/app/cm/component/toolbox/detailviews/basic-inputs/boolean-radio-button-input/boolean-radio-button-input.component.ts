import {Component, Input} from '@angular/core';
import {BooleanWidget} from "../../../../../../core/component/BooleanWidget";

@Component({
  selector: 'boolean-radio-button-input',
  templateUrl: './boolean-radio-button-input.component.html'
})
export class BooleanRadioButtonInputComponent extends BooleanWidget {
  @Input() falseLabel = "No";
  @Input() trueLabel = "Yes";

}
