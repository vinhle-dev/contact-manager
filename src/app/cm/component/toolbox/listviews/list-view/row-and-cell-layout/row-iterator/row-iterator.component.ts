import {Component, Input, OnDestroy, OnInit, TemplateRef, ViewChild, ViewContainerRef} from '@angular/core';
import {DataSharingService} from "../../../../../../../core/service/data-sharing.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'row-iterator',
  templateUrl: './row-iterator.component.html'
})
export class RowIteratorComponent implements OnInit, OnDestroy {
  @ViewChild('template', {static: true}) template: TemplateRef<any> | undefined;
  @Input({required: true}) id!: string;
  @Input({required: true}) listData!: any[];
  @Input({required: true}) names!: string[];
  @Input() toAdd!: { callback: Function; initParams?: any[] };
  @Input() toRemove!: { callback: Function; initParams?: any[] };
  @Input() editable: boolean = false;

  protected isChecked = false;
  private subscription: Subscription[] = [];

  constructor(private viewContainerRef: ViewContainerRef,
              private dataSharingService: DataSharingService) {
  }

  ngOnInit() {
    if (this.template) {
      this.viewContainerRef.createEmbeddedView(this.template)
      this.viewContainerRef.element.nativeElement.remove()
    }

    this.subscription.push(this.dataSharingService.getData(`add-${this.id}`).subscribe(() => {
      this.doAction(this.toAdd)
    }))

    this.subscription.push(this.dataSharingService.getData(`remove-${this.id}`).subscribe(listIndex => {
        this.doAction(this.toRemove, listIndex);
        this.isChecked = false;
      })
    )

    this.subscription.push(this.dataSharingService.getData(`action-${this.id}`).subscribe(data => {
        this.doAction(data[0], data[1]);
        this.isChecked = false;
      })
    )
  }

  ngOnDestroy() {
    this.subscription.forEach(sub => {
      sub.unsubscribe()
    })
  }

  onChange() {
    if (this.isChecked) {
      this.dataSharingService.sendData(`checked-${this.id}`, Array.from(this.listData.keys()))
    } else {
      this.dataSharingService.sendData(`unChecked-${this.id}`, Array.from(this.listData.keys()))
    }
  }

  doAction(action: { callback: Function, initParams?: any[] }, rearParams?: any[]) {
    if (action && action.callback) {
      const params = [...action.initParams !== undefined ? action.initParams : []];
      if (rearParams) {
        action.callback(...params, rearParams);
      } else {
        action.callback(...params);
      }
    }
  }
}
