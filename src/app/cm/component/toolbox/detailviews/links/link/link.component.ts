import {Component, Input} from '@angular/core';

@Component({
  selector: 'link-tb',
  templateUrl: './link.component.html'
})
export class LinkComponent {
  @Input() label!: string;
  @Input() icon!: string;
  @Input() style!: "none" | "bigButton";
  @Input() action!: { callback: Function; initParams?: any[] };

  protected getStyle() {
    switch (this.style) {
      case "bigButton": {
        return "link--big-btn"
      }
      default:
        return "none"
    }
  }

  doAction() {
    if (this.action && this.action.callback) {
      const params = [...this.action.initParams !== undefined ? this.action.initParams : []];
      this.action.callback(...params);
    }
  }
}
