import {Component, Input} from '@angular/core';
import {RangeWidget} from "../../../../../../core/component/RangeWidget";

@Component({
  selector: 'typekey-input',
  templateUrl: './typekey-input.component.html'
})
export class TypekeyInputComponent extends RangeWidget {
  @Input() hideIfEditable = false;
  @Input() hideIfReadOnly = false;

  onSelect(dropdown: HTMLDivElement,
           item: HTMLAnchorElement,
           option: object | string | number | null) {
    this.setValue(this.getOptionValue(option))

    Array.from(dropdown.getElementsByClassName("dropdown-item"))
      .forEach(i => {
        i === item ? i.classList.add("dropdown-item__selected")
          : i.classList.remove("dropdown-item__selected")
      });
  }

  protected get visibility() {
    if (this.EditMode) {
      return !this.hideIfEditable
    }

    return !this.hideIfReadOnly
  }
}
