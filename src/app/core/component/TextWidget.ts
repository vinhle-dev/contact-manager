import {Component, Input} from "@angular/core";
import {Widget} from "./Widget";

@Component({
  selector: "abstract-text-widget",
  template: ``,
  standalone: true
})
export class TextWidget extends Widget {
  @Input({required: true}) override data!: object | string | number | null;
}
