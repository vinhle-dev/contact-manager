import {Component, inject, Input, OnDestroy, OnInit, ViewContainerRef} from '@angular/core';
import {Router} from "@angular/router";
import {LocationService} from "../../../../../core/service/location/LocationService";
import {Subscription} from "rxjs";
import {CookieUtil} from "../../../../../core/util/CookieUtil";
import {BasePage} from "../../../../../core/component/page/BasePage";
import {Location} from "../../../location/location-group/location-group.component";
import {NavigationUtil} from "../../../../../core/util/NavigationUtil";
import {PageService} from "../../../../../core/service/page/PageService";
import {TreeViewService} from "../../../../../core/service/tree-view/TreeViewService";

@Component({
  selector: 'location-ref',
  templateUrl: './location-ref.component.html'
})
export class LocationRefComponent implements OnInit, OnDestroy {
  @Input({required: true}) location!: Location;
  @Input() label: string | null = null;

  router = inject(Router);
  viewContainerRef = inject(ViewContainerRef);
  treeViewService = inject(TreeViewService);
  locationService = inject(LocationService);
  pageService = inject(PageService);
  isSelect = false;
  subscriptions: Subscription[] = [];


  get IsPage() {
    return this.location.component.prototype instanceof BasePage;
  }

  get NodeLevel() {
    return this.locationService.getNodeLevel(this.Container)
  }

  private get Container(): HTMLElement {
    return this.viewContainerRef.element.nativeElement
  }

  private get IsCurrentGroup() {
    return this.Parent.id === CookieUtil.getValueByName("location", "group");
  }

  private get IsFirstChild() {
    return Array.from(this.Parent.children).findIndex(child => child === this.Container) === 1;
  }

  private get Parent() {
    return this.Container.parentElement!;
  }

  ngOnInit() {
    this.checkStatusOnInit();

    this.subscribeService();
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  onClick() {
    this.locationService.currentLocationRef$.next(this.location.component)
    this.resetTreeView();

    CookieUtil.update("location", "ref", this.location.component.name)

    if (this.location.url) {
      NavigationUtil.skipLocationChange(this.router, this.location.url);
    }
  }

  private checkStatusOnInit() {
    // Check current page  is the same as location ref component
    if (this.pageService.id === this.location.component.name) {
      this.isSelect = true;
    }

    if (this.IsCurrentGroup) {
      let currentLocationRef = CookieUtil.getValueByName("location", "ref");
      /**
       * If Location Group is opened
       * And location ref is not selected
       * And menu tree is not selected
       * */
      if (currentLocationRef === "" && CookieUtil.get("treeView") === "") {
        // Then choose the first one
        if (this.IsFirstChild) {
          this.doSelect()
        }
      } else {
        // Get last status
        this.isSelect = this.location.component.name === currentLocationRef
      }
    }
  }

  private subscribeService() {
    if (this.locationService.menuTree !== "") {
      // Listen to the selected menu tree of location
      this.subscriptions.push(this.treeViewService.getData(`${this.locationService.menuTree}`).subscribe(data => {
        if (typeof data === "number") {
          // Reset location group when menu tree id selected.
          this.locationService.currentLocationRef$.next(null)
          CookieUtil.update("location", "ref", "")
        }
      }))
    }

    // Listen to the selected location ref
    this.subscriptions.push(this.locationService.currentLocationRef$.subscribe(data => {
      // Update all location ref status when one is selected
      if (this.IsCurrentGroup) {
        this.isSelect = this.location.component === data;
      }
    }))

    // Listen to the selected location group
    this.subscriptions.push(this.locationService.currentLocationGroup$.subscribe(() => {
      if (this.IsCurrentGroup && this.IsFirstChild) {
        this.doSelect()
      }
    }))
  }

  private doSelect() {
    this.isSelect = true;
    this.onClick();

    this.resetTreeView();
  }

  private resetTreeView() {
    if (this.locationService.menuTree !== "") {
      this.treeViewService.sendData(`${this.locationService.menuTree}`, "")
      CookieUtil.reset("treeView");
    }
  }
}
