import {Component, OnInit, ViewContainerRef} from '@angular/core';

@Component({
  selector: 'toolbar',
  templateUrl: './toolbar.component.html',
  host: {'class': 'toolbar'}
})
export class ToolbarComponent implements OnInit {

  constructor(private viewContainerRef: ViewContainerRef) {
  }

  ngOnInit() {
    let element = this.viewContainerRef.element.nativeElement
    let parentElement = element.parentElement;
    this.extendGridColumn(element, parentElement);
  }

  private extendGridColumn(element: HTMLElement, parentElement: HTMLElement) {
    if (parentElement.classList.contains("detail-view")) {
      element.classList.add("input-toolbar");
      let numColumn = Array.from(parentElement.children).filter(e => (e as HTMLElement).classList.contains("input-body")).length;
      element.style.gridColumn = `span ${numColumn}`;
    }
  }
}
