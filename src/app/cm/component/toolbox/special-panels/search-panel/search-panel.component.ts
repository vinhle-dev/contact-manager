import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {DataSharingService} from "../../../../../core/service/data-sharing.service";

@Component({
  selector: 'search-panel',
  templateUrl: './search-panel.component.html'
})
export class SearchPanelComponent implements OnInit, OnDestroy {
  @Input() id!: string;
  @Input({required: true}) searchCriteria!: object;
  @Input({required: true}) searchResults!: object[];
  @Input({required: true}) search!: { callback: Function; initParams?: any[] }[];

  constructor(private dataSharingService: DataSharingService) {
  }

  private subscriptions: Subscription[] = [];

  ngOnInit() {
    this.subscriptions.push(this.dataSharingService.getData(`search-${this.id}`).subscribe(() => {
      this.doSearch()
    }));
    this.subscriptions.push(this.dataSharingService.getData(`reset-${this.id}`).subscribe(() => {
      this.doReset()
    }));
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => {
      subscription.unsubscribe()
    });
  }

  protected doSearch() {
    if (this.search) {
      this.search.forEach(func => {
        if (func.callback) {
          const params = func.initParams !== undefined ? func.initParams : [];
          func.callback(...params);
        }
      })
    }
  }

  protected doReset() {
    //TODO implement me.
  }
}
