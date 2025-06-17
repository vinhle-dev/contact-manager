import {Component, Input} from '@angular/core';

@Component({
  selector: 'verbatim-text',
  templateUrl: './verbatim-text.component.html'
})
export class VerbatimTextComponent {
  @Input() label!: string;
  @Input() warning!: boolean;
}
