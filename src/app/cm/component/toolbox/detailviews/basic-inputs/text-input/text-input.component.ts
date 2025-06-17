import {Component, Input} from '@angular/core';
import {Widget} from "../../../../../../core/component/Widget";

@Component({
  selector: 'text-input',
  templateUrl: './text-input.component.html'
})

export class TextInputComponent extends Widget {
  @Input() action!: { callback: Function; initParams?: any[] };
  @Input() boldLabel = false;
  @Input() isLink = false;
  @Input() alignLabel = "left";
  @Input() hideIfEditable = false;
  @Input() hideIfReadOnly = false;

  onValueChange(value: string) {
    this.setValue(value)
  }

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

  override getPropertyValue(data: object | string | number | null | undefined,
                           propertyName?: string | undefined) {
    const result = super.getPropertyValue(data, propertyName);

    return result ? result : "";
  }

  protected get visibility() {
    if (this.editable) {
      return !this.hideIfEditable
    }

    return !this.hideIfReadOnly
  }
}
