import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {DataSharingService} from "../../../../../../core/service/data-sharing.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'iterator-buttons',
  templateUrl: './iterator-buttons.component.html',
  host: {'class': 'toolbar-button'},
})
export class IteratorButtonsComponent implements OnInit, OnDestroy {
  @Input({required: true}) iterator!: string;
  @Input() addLabel = "";
  @Input() removeLabel = "";
  @Input() editable = false;
  @Input() hideIfEditable = false;
  @Input() hideIfReadOnly = true;
  protected listChecked = new Set<number>();
  private subscription: Subscription[] = [];

  constructor(private dataSharingService: DataSharingService) {
  }

  ngOnInit() {
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
    this.subscription.forEach(sub => {
      sub.unsubscribe()
    })
  }

  protected add() {
    this.dataSharingService.sendData(`add-${this.iterator}`, '')
  }

  protected remove() {
    this.dataSharingService.sendData(`remove-${this.iterator}`, Array.from(this.listChecked).sort((a, b) => b - a));
    this.listChecked.clear();
  }

  protected get visibility() {
    if (this.editable) {
      return !this.hideIfEditable
    }

    return !this.hideIfReadOnly
  }
}
