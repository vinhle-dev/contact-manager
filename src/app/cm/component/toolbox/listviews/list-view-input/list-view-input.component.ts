import {AfterViewInit, Component, ElementRef, Input, OnDestroy, ViewChild} from '@angular/core';
import {Subscription} from "rxjs";
import {DataSharingService} from "../../../../../core/service/data-sharing.service";

@Component({
  selector: 'list-view-input',
  templateUrl: './list-view-input.component.html'
})
export class ListViewInputComponent implements AfterViewInit, OnDestroy {
  @Input() id = "";
  @Input() label = "";
  @Input() labelAbove = false;
  @Input() boldLabel = false;

  @ViewChild('view', {read: ElementRef}) private _view!: ElementRef;
  private subscription!: Subscription;

  constructor(private dataSharingService: DataSharingService) {
  }

  ngAfterViewInit() {
    if (this.id) {
      this.subscription = this.dataSharingService.getData(`visibility-${this.id}`).subscribe(data => {
        if ((typeof data) === "boolean") {
          data ? this._view.nativeElement.classList.remove("hidden")
            : this._view.nativeElement.classList.add("hidden")
        }
      });
    }
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe()
  }
}
