import {AfterViewInit, Component, ElementRef, Input, OnDestroy, ViewChild} from '@angular/core';
import {Subscription} from "rxjs";
import {DataSharingService} from "../../../../../core/service/data-sharing.service";

@Component({
  selector: 'list-detail-panel',
  templateUrl: './list-detail-panel.component.html'
})
export class ListDetailPanelComponent implements AfterViewInit, OnDestroy {
  @Input({required: true}) id!: string

  @ViewChild('view', {read: ElementRef}) private _view!: ElementRef;
  private subscription!: Subscription;

  constructor(private dataSharingService: DataSharingService) {
  }

  ngAfterViewInit() {
    this.subscription = this.dataSharingService.getData(`visibility-${this.id}`).subscribe(data => {
      if ((typeof data) === "boolean") {
        data ? this._view.nativeElement.classList.remove("hidden")
             : this._view.nativeElement.classList.add("hidden")
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}
