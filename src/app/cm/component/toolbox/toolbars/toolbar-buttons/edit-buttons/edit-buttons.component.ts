import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {PageService} from "../../../../../../core/service/page/PageService";
import {Subscription} from "rxjs";

@Component({
  selector: 'edit-buttons',
  templateUrl: './edit-buttons.component.html',
  host: {'class': 'btn-container'}
})
export class EditButtonsComponent implements OnInit, OnDestroy {
  editMode = false;
  private pageService = inject(PageService);
  private subscription!: Subscription;

  ngOnInit() {
    this.subscription = this.pageService.editMode$.subscribe(data => {
      this.editMode = data;
    })

    this.editMode = this.pageService.currentEditMode;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  edit() {
    this.pageService.editMode$.next(true);
  }

  update() {
    this.pageService.commit$.next(true);
  }

  cancel() {
    this.pageService.cancel$.next(true);
  }
}
