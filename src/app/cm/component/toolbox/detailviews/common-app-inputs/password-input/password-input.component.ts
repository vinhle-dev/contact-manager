import {Component, Input} from '@angular/core';
import {Widget} from "../../../../../../core/component/Widget";

@Component({
  selector: 'password-input',
  templateUrl: './password-input.component.html'
})
export class PasswordInputComponent extends Widget {
  @Input() action!: { callback: Function; initParams?: any[] };
  @Input() isLink = false;
  @Input() alignLabel = "left";

  doAction() {
    if (this.action && this.action.callback) {
      const params = this.action.initParams !== undefined ? this.action.initParams : [];
      this.action.callback(...params);
    }
  }

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
