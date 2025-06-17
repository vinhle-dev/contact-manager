import {Component, Input} from '@angular/core';
import {BooleanWidget} from "../../../../../../core/component/BooleanWidget";

@Component({
  selector: 'check-box',
  templateUrl: './check-box.component.html'
})
export class CheckBoxComponent extends BooleanWidget {
  @Input() alignLabel = "left";

  protected get alignClass(): string {
    switch (this.alignLabel) {
      case "center":
        return "justify-self__center"

      case "right":
        return "justify-self__end"

      default:
        return ""
    }
  }
}
