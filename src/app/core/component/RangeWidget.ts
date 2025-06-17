import {Component, Input} from "@angular/core";
import {Widget} from "./Widget";

@Component({
  selector: "abstract-range-widget",
  template: ``,
  standalone: true
})
export class RangeWidget extends Widget {
  @Input({required: true}) override data!: object | string | number | null;
  @Input({required: true}) options!: (object | string | number | null)[];
  @Input() referenceData?: { data: object | string | number | null, displayValue?: string, updateValue?: string };

  override getPropertyValue(data: object | string | number | null | undefined,
                            propertyName?: string | undefined) {
    const result = super.getPropertyValue(data, propertyName);
    return result ? result : "<none>";
  }

  getOptionValue(option: object | string | number | null | undefined) {
    if (option) {
      if (this.referenceData) {
        return this.getPropertyValue(option, this.referenceData.displayValue)
      }

      return this.getPropertyValue(option)
    }

    return null;
  }

  override getValue() {
    let value: string
    if (this.referenceData) {
      value = this.getPropertyValue(this.referenceData.data, this.referenceData.displayValue)
    } else {
      value = this.getPropertyValue(this.data, this.value)
    }

    if (value === "<none>" && !this.EditMode) {
      value = "";
    }

    return value
  }

  override setValue(value: object | string | number | null) {
    if (this.value && this.referenceData?.updateValue) {
      (this.data as any)[this.value] = (value as any)[this.referenceData?.updateValue];

    } else if (this.value) {
      this.setPropertyValue(value, this.value)

    } else if (this.referenceData?.updateValue) {
      this.setPropertyValue(value, this.referenceData?.updateValue)

    } else {
      this.setPropertyValue(value)
    }
  }
}
