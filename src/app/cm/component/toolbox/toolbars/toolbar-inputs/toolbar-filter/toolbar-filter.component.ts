import {Component, Input} from '@angular/core';

@Component({
  selector: 'toolbar-filter',
  templateUrl: './toolbar-filter.component.html'
})
export class ToolbarFilterComponent {
  @Input({required: true}) name!: string;
  @Input() iterator!: string;
  @Input() filterOptions!: string[];
  @Input() label = "";
  @Input() editable = false;
  @Input() hideIfEditable = false;
  @Input() hideIfReadOnly = false;

  onSelect(filter: HTMLInputElement,
           dropdown: HTMLDivElement,
           item: HTMLAnchorElement,
           option: string) {
    //TODO send selected option to iterator
    filter.value = option;

    Array.from(dropdown.getElementsByClassName("dropdown-item"))
      .forEach(i => {
        i === item ? i.classList.add("dropdown-item__selected")
          : i.classList.remove("dropdown-item__selected")
      });
  }

  protected get visibility() {
    if (this.editable) {
      return !this.hideIfEditable
    }

    return !this.hideIfReadOnly;
  }
}
