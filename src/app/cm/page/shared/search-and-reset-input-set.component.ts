import {Component, Input} from '@angular/core';
import {InputSetComponent} from "../../component/toolbox/detailviews/input-layout/input-set/input-set.component";
import {DataSharingService} from "../../../core/service/data-sharing.service";

@Component({
  selector: 'search-and-reset-input-set',
  templateUrl: './search-and-reset-input-set.component.html'
})
export class SearchAndResetInputSetComponent extends InputSetComponent {
  @Input() searchId!: string;

  constructor(private dataSharingService: DataSharingService) {
    super();
  }

  search() {
    this.dataSharingService.sendData(`search-${this.searchId}`, null);
  }

  reset() {
    this.dataSharingService.sendData(`reset-${this.searchId}`, null);
  }
}
