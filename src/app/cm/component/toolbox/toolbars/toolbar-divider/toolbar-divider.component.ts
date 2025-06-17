import {Component, Input} from '@angular/core';

@Component({
  selector: 'toolbar-divider',
  templateUrl: './toolbar-divider.component.html'
})
export class ToolbarDividerComponent {
  @Input() editable = false;
  @Input() hideIfEditable = false;
  @Input() hideIfReadOnly = false;

  constructor() {
  }

  protected get visibility() {
    if (this.editable) {
      return !this.hideIfEditable
    }

    return !this.hideIfReadOnly
  }
}
