import {Component, OnInit, ViewContainerRef} from '@angular/core';

@Component({
  selector: 'input-header',
  templateUrl: './input-header.component.html',
  host: {'class': 'input-column input-header'}
})
export class InputHeaderComponent implements OnInit {

  constructor(private viewContainerRef: ViewContainerRef) {
  }

  ngOnInit() {
    let element = this.viewContainerRef.element.nativeElement;
    let numColumn = Array.from(element.parentElement.children).filter(e => (e as HTMLElement).classList.contains("input-body")).length;
    element.style.gridColumn = `span ${numColumn}`;
  }
}
