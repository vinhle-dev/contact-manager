import {Component, Input} from '@angular/core';

@Component({
  selector: 'screen',
  templateUrl: './screen.component.html',
  host: {class: 'screen-container'},
})
export class ScreenComponent {
  @Input() editable = true;
}
