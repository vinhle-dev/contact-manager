import {Component, Input} from "@angular/core";
import {Widget} from "./Widget";

@Component({
  selector: "abstract-boolean-widget",
  template: ``,
  standalone: true
})
export class BooleanWidget extends Widget {
  @Input({required: true}) override data!: object | boolean | null;

  override getPropertyValue(data: object | boolean | null | undefined,
                            propertyName?: string | undefined) {
    const result = super.getPropertyValue(data, propertyName);

    return result !== "" ? result : false;
  }
}
