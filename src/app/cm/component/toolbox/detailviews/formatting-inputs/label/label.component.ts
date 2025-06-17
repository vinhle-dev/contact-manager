import {Component, Input} from '@angular/core';

@Component({
  selector: 'label-tb',
  templateUrl: './label.component.html'
})
export class LabelComponent {
  @Input() label!: string;
}
