import {Component, Input} from '@angular/core';

@Component({
  selector: 'menu-item',
  templateUrl: './menu-item.component.html'
})
export class MenuItemComponent {
  @Input({required:true}) id!: string;
  @Input() label!: string;
  @Input() action!: { callback: Function; initParams?: any[] };

  protected doAction() {
    if (this.action && this.action.callback) {
      const params = [...this.action.initParams !== undefined ? this.action.initParams : []];
      this.action.callback(...params);
    }
  }
}
