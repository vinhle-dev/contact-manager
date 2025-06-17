import {AfterViewInit, Component, inject, Input, OnDestroy, OnInit, TemplateRef, Type, ViewChild} from '@angular/core';
import {LocationService} from "../../../../core/service/location/LocationService";
import {PageService} from "../../../../core/service/page/PageService";
import {Subscription} from "rxjs";
import {NavigationUtil} from "../../../../core/util/NavigationUtil";
import {Router} from "@angular/router";

@Component({
  selector: 'page',
  templateUrl: './page.component.html'
})
export class PageComponent implements AfterViewInit, OnInit, OnDestroy {
  @Input({required: true}) id!: string;
  @Input({required: true}) title!: string;
  @Input({required: true}) location!: Type<any>;
  @Input({required: true}) screenRef!: TemplateRef<any>;
  @Input() infoBar!: TemplateRef<any>;
  @Input() afterCancel!: (...args: any[]) => void;
  @Input() afterCommit!: (...args: any[]) => void;
  @Input() startInEditMode = false;
  @ViewChild("pageTempRef") pageTempRef!: TemplateRef<any>;

  parent: { title: string, url: string } = {title: "", url: ""};

  private locationService = inject(LocationService);
  private router = inject(Router);
  private pageService = inject(PageService);
  private subscriptions: Subscription[] = []

  ngOnInit() {
    this.subscriptions.push(this.pageService.cancel$.subscribe(data => {
      if (data) {
        this.afterCancel()
      }
    }))

    this.subscriptions.push(this.pageService.commit$.subscribe(data => {
      if (data) {
        this.afterCommit()
      }
    }))

    this.subscriptions.push(this.pageService.editMode$.subscribe(data => {
      this.pageService.currentEditMode = data;
    }))

    this.parent = this.pageService.parent
    this.pageService.id = this.id;
    this.pageService.currentEditMode = this.startInEditMode;
    this.pageService.title = this.title;
  }

  ngAfterViewInit() {
    // Emmit page template ref to location
    this.locationService.currentPageTemplate$.next(this.pageTempRef);
    this.locationService.currentInfoBarTemplate$.next(this.infoBar);
  }

  ngOnDestroy() {
    if (this.parent.title && this.parent.url) {
      this.pageService.parent = {title: "", url: ""};
    }
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  returnParent() {
    if (this.parent.title && this.parent.url) {

      NavigationUtil.skipLocationChange(this.router, this.parent.url)
    }
  }
}
