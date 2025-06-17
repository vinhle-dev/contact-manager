import {AfterViewInit, Component, ElementRef, Input, OnDestroy, ViewChild} from '@angular/core';
import {Subscription} from "rxjs";
import {DataSharingService} from "../../../../../../core/service/data-sharing.service";

@Component({
  selector: 'checked-value-toolbar-button',
  templateUrl: './checked-value-toolbar-button.component.html'
})
export class CheckedValueToolbarButtonComponent implements AfterViewInit, OnDestroy {
  @Input({required: true}) id!: string;
  @Input({required: true}) iterator!: string;
  @Input() label!: string;
  @Input() action!: { callback: Function; initParams?: any[] };
  @Input() shortcut!: 'a' | 'b' | 'c' | 'd' | 'e' | 'f' | 'g' | 'h' | 'i' | 'j' | 'k'
    | 'l' | 'm' | 'n' | 'o' | 'p' | 'q' | 'r' | 's' | 't' | 'u' | 'v' | 'w' | 'x'
    | 'y' | 'z' | 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I' | 'J' | 'K'
    | 'L' | 'M' | 'N' | 'O' | 'P' | 'Q' | 'R' | 'S' | 'T' | 'U' | 'V' | 'W' | 'X'
    | 'Y' | 'Z';

  @ViewChild('labelRef') private labelRef!: ElementRef;
  protected listChecked = new Set<number>();
  private subscription: Subscription[] = [];

  constructor(private dataSharingService: DataSharingService) {
  }

  ngAfterViewInit() {
    this.updateLabel();
    this.subscription.push(this.dataSharingService.getData(`checked-${this.iterator}`).subscribe(data => {
      for (let d of data) {
        this.listChecked.add(d);
      }
    }))


    this.subscription.push(this.dataSharingService.getData(`unChecked-${this.iterator}`).subscribe(data => {
        for (let d of data) {
          this.listChecked.delete(d);
        }
      })
    )
  }

  ngOnDestroy() {
    this.subscription.forEach(sub => sub.unsubscribe());
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

  doAction() {
    if (this.listChecked.size > 0) {
      this.dataSharingService.sendData(`action-${this.iterator}`,
        [this.action, Array.from(this.listChecked).sort((a, b) => b - a)])
      this.listChecked.clear();
    }
  }
}
