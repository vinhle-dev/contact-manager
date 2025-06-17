import {Component, Input, OnDestroy, OnInit, TemplateRef, ViewChild, ViewContainerRef} from '@angular/core';
import {DataSharingService} from "../../../../../../../core/service/data-sharing.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'row',
  templateUrl: './row.component.html'
})
export class RowComponent implements OnInit, OnDestroy {
  @ViewChild('template', {static: true}) template: TemplateRef<any> | undefined;
  @Input() iterator!: string;
  @Input() editable: boolean = false;
  @Input() rowNumber!: number;

  protected isChecked = false;
  private subscriptions: Subscription[] = [];

  constructor(private viewContainerRef: ViewContainerRef,
              private dataSharingService: DataSharingService) {
  }

  ngOnInit() {
    if (this.template) {
      this.viewContainerRef.createEmbeddedView(this.template)
      this.viewContainerRef.element.nativeElement.remove()
    }

    this.subscriptions.push(this.dataSharingService.getData(`remove-${this.iterator}`).subscribe(() => {
      this.isChecked = false;
    }))

    this.subscriptions.push(this.dataSharingService.getData(`action-${this.iterator}`).subscribe(() => {
      this.isChecked = false;
    }))
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  onChange() {
    if (this.isChecked) {
      this.dataSharingService.sendData(`checked-${this.iterator}`, [this.rowNumber])
    } else {
      this.dataSharingService.sendData(`unchecked-${this.iterator}`, [this.rowNumber])
    }
  }
}
