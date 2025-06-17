import {AfterViewInit, Component, ElementRef, Input, ViewChild} from '@angular/core';

@Component({
  selector: 'toolbar-button',
  templateUrl: './toolbar-button.component.html',
  host: {'class': 'toolbar-button'},
})
export class ToolbarButtonComponent implements AfterViewInit {
  @Input({required: true}) id!: string;
  @Input() label!: string;
  @Input() action!: { callback: Function; initParams?: any[] };
  @Input() shortcut!: 'a' | 'b' | 'c' | 'd' | 'e' | 'f' | 'g' | 'h' | 'i' | 'j' | 'k'
    | 'l' | 'm' | 'n' | 'o' | 'p' | 'q' | 'r' | 's' | 't' | 'u' | 'v' | 'w' | 'x'
    | 'y' | 'z' | 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I' | 'J' | 'K'
    | 'L' | 'M' | 'N' | 'O' | 'P' | 'Q' | 'R' | 'S' | 'T' | 'U' | 'V' | 'W' | 'X'
    | 'Y' | 'Z';
  @Input() editable = false;
  @Input() hideIfEditable = false;
  @Input() hideIfReadOnly = false;
  @Input() available = true;
  @Input() visible = true;

  @ViewChild('labelRef') private labelRef!: ElementRef;

  ngAfterViewInit() {
    this.updateLabel();
  }

  private updateLabel() {
    let label = this.labelRef.nativeElement as Element
    if (this.shortcut) {
      label.innerHTML = this.label.slice(0, this.label.indexOf(this.shortcut)) +
        `<span class='text-underline'>${this.shortcut}</span>` +
        this.label.slice(this.label.indexOf(this.shortcut) + 1, this.label.length)
    } else {
      label.innerHTML = this.label
    }
  }

  protected get visibility() {
    if (this.editable) {
      return !this.hideIfEditable
    }

    return !this.hideIfReadOnly
  }

  doAction() {
    if (this.action && this.action.callback) {
      const params = this.action.initParams !== undefined ? this.action.initParams : [];
      this.action.callback(...params);
    }
  }
}
