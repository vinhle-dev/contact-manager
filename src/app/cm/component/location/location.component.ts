import {
  AfterViewInit,
  Component,
  ElementRef,
  inject,
  Input,
  Renderer2,
  TemplateRef,
  Type,
  ViewChild
} from '@angular/core';
import {BaseLocationGroup} from "../../../core/component/location/BaseLocationGroup";
import {TabBarComponent} from "./tab-bar/tab-bar.component";

@Component({
  selector: 'location',
  templateUrl: './location.component.html'
})
export class LocationComponent implements AfterViewInit {
  @Input({required: true}) id!: string;
  @Input({required: true}) locationGroup!: Type<BaseLocationGroup> | null;
  @Input({required: true}) pageTempRef!: TemplateRef<any>;
  @Input() infoBar: TemplateRef<any> | null = null;
  @Input() menuAction: Type<any> | null = null;
  @Input() menuTree: Type<any> | null = null;
  @Input() tabbar: Type<any> | null = null;

  @ViewChild('sidebar') sidebar!: ElementRef;

  isSidebarCollapse = false;
  isResizing = false;
  currentSidebarWidth = 0;

  protected readonly window = window;

  private startX!: number;
  private startSidebarWidth!: number;
  private minSidebarWidth = 200; // 200px
  private minPageWidthPercent = 0.3; // 30% of container
  private renderer = inject(Renderer2);

  ngAfterViewInit() {
    this.checkSidebarOnInit();

    this.renderer.listen('window', 'mousemove', this.onMouseMove.bind(this));
    this.renderer.listen('window', 'mouseup', this.onMouseUp.bind(this));
  }

  get Tabbar() {
    if (this.tabbar) {
      return this.tabbar;
    }
    //Default tabbar
    return TabBarComponent
  }

  onSplitterClick(sidebar: HTMLDivElement, collapsedSidebar: HTMLDivElement) {
    // Toggle splitter Status
    this.isSidebarCollapse = !this.isSidebarCollapse;

    if (this.isSidebarCollapse) {
      this.renderer.addClass(collapsedSidebar, "location-body-collapsed-sidebar__show");

      this.renderer.removeClass(sidebar, "location-body-sidebar__unCollapse");
      this.renderer.setStyle(sidebar, "opacity", "0");
      this.renderer.setStyle(sidebar, "transition", "all .7s, opacity 0s");

    } else {
      this.renderer.removeClass(collapsedSidebar, "location-body-collapsed-sidebar__show");

      this.renderer.addClass(sidebar, "location-body-sidebar__unCollapse");
      this.renderer.setStyle(sidebar, "transition", "all .7s, opacity .1s");
    }

    localStorage.setItem("sidebar:collapse", String(this.isSidebarCollapse))
  }

  startDraggingSplitter(event: MouseEvent) {
    // Dragging is allowed only when splitter has not collapsed
    if (!this.isSidebarCollapse) {
      this.isResizing = true;
      this.startX = event.clientX;
      this.startSidebarWidth = this.sidebar.nativeElement.offsetWidth;
    }
  }

  private checkSidebarOnInit() {
    // Get last width of sidebar
    const width = localStorage.getItem("sidebar:width");
    if (width && width !== "") {
      this.currentSidebarWidth = Number(width);
    } else {
      this.currentSidebarWidth = this.minSidebarWidth;
    }

    // Get last status of sidebar
    const isCollapse = localStorage.getItem("sidebar:collapse")
    this.isSidebarCollapse = isCollapse === 'true';

    // Hide sidebar content if sidebar collapsed
    if (this.isSidebarCollapse) {
      this.renderer.setStyle(this.sidebar.nativeElement, 'opacity', '0');
    }
  }

  private onMouseMove(event: MouseEvent) {
    if (this.isResizing) {
      const newWidth = this.startSidebarWidth + (event.clientX - this.startX);
      const containerWidth = this.sidebar.nativeElement.parentElement.offsetWidth;
      const minScreenWidth = containerWidth * this.minPageWidthPercent;
      const screenWidth = containerWidth - newWidth;

      if (newWidth >= this.minSidebarWidth && screenWidth >= minScreenWidth) {
        // Update sidebar width
        this.renderer.setStyle(this.sidebar.nativeElement, 'width', `${newWidth}px`);
        // Store sidebar width value
        this.currentSidebarWidth = newWidth;
        localStorage.setItem("sidebar:width", String(newWidth));
      }
    }
  }

  private onMouseUp() {
    this.isResizing = false;
  }
}
