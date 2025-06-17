import {AfterViewInit, Component, ElementRef, Input, TemplateRef, ViewChild} from '@angular/core';
import {CookieUtil} from "../../../../../core/util/CookieUtil";

@Component({
  selector: 'tab',
  templateUrl: './tab.component.html',
  host: {'class': 'tab'}
})
export class TabComponent implements AfterViewInit {
  @Input({required: true}) id!: string;
  @Input() label!: string;
  @Input() action!: { callback: Function; initParams?: any[] };
  @Input() dropdownTemplate!: TemplateRef<any>;
  @Input() shortcut!: 'a' | 'b' | 'c' | 'd' | 'e' | 'f' | 'g' | 'h' | 'i' | 'j' | 'k'
    | 'l' | 'm' | 'n' | 'o' | 'p' | 'q' | 'r' | 's' | 't' | 'u' | 'v' | 'w' | 'x'
    | 'y' | 'z' | 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I' | 'J' | 'K'
    | 'L' | 'M' | 'N' | 'O' | 'P' | 'Q' | 'R' | 'S' | 'T' | 'U' | 'V' | 'W' | 'X'
    | 'Y' | 'Z';

  @ViewChild('labelRef') private labelRef!: ElementRef;
  @ViewChild('dropdown') private dropdownRef!: ElementRef;

  ngAfterViewInit() {
    this.updateLabel();
    this.dropdownControl();
  }

  protected doAction() {
    if (this.action && this.action.callback) {
      const params = [...this.action.initParams !== undefined ? this.action.initParams : []];
      this.action.callback(...params);
    }
  }

  toggleDropdown() {
    let dropdown = this.dropdownRef.nativeElement as Element
    dropdown.classList.toggle('dropdown-container__show')
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

  private dropdownControl() {
    if (this.dropdownTemplate) {
      document.addEventListener("click", (event: MouseEvent) => {
        let element = (event.target as Element)
        let dropdown = this.dropdownRef.nativeElement as Element
        if (!(element.matches('.tab-icon-box') ||
              element.matches('.tab-icon'))) {
          dropdown.classList.remove('dropdown-container__show');
        }
      })
    }
  }

  protected isActive() {
    let tab = CookieUtil.getValueByName("control", "tab")
    return tab === this.id;
  }
}
