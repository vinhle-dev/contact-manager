import {Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'menu-actions',
  templateUrl: './menu-actions.component.html'
})
export class MenuActionsComponent {
  @ViewChild('dropdown') private dropdownRef!: ElementRef;
}
