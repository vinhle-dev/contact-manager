import {ChangeDetectorRef, Component, inject, OnDestroy, OnInit, TemplateRef, Type} from '@angular/core';
import {Subscription} from "rxjs";
import {BaseLocationGroup} from "./BaseLocationGroup";
import {LocationService} from "../../service/location/LocationService";
import {BaseMenuTree} from "../menu-tree/BaseMenuTree";

@Component({
  selector: 'abstract-location',
  standalone: true,
  template: ``
})
export abstract class BaseLocation implements OnInit, OnDestroy {
  id: string = "";
  abstract infoBar: TemplateRef<any> | null;
  abstract locationGroup: Type<BaseLocationGroup> | null;
  abstract menuAction: Type<any> | null;
  abstract menuTree: Type<BaseMenuTree> | null;
  abstract tabbar: Type<any> | null;

  private subscriptions: Subscription[] = [];
  private locationService = inject(LocationService)
  private crd = inject(ChangeDetectorRef)

  protected pageTempRef!: TemplateRef<any>;

  ngOnInit() {
    this.id = this.constructor.name;
    // Listen page template
    this.subscriptions.push(this.locationService.currentPageTemplate$.subscribe(data => {
      if (data) {
        this.pageTempRef = data
        this.crd.detectChanges()
      }
    }));

    // Listen infoBar template
    this.subscriptions.push(this.locationService.currentInfoBarTemplate$.subscribe(data => {
      if (data) {
        this.infoBar = data
        this.crd.detectChanges()
      }
    }));

    if (this.menuTree) {
      this.locationService.menuTree = this.menuTree.name
    }
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
