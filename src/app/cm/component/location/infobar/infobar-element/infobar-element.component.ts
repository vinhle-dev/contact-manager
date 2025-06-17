import {AfterViewInit, Component, ElementRef, Input, ViewChild} from '@angular/core';

@Component({
  selector: 'infobar-element',
  templateUrl: './infobar-element.component.html'
})
export class InfoBarElementComponent implements AfterViewInit {
  @Input({required: true}) id!: string;
  @Input() label?: string;
  @Input() value?: string | null;
  @Input() icon?: string;
  @Input() valueIcons?: string;
  @Input() visible = true;

  @ViewChild("icon") iconElement!: ElementRef<any>;

  ngAfterViewInit() {
    this.showIcon();
  }

  private showIcon() {
    if (this.icon || this.valueIcons) {
      //TODO implement me
    }
  }
}
