import {Component, OnInit, ViewContainerRef} from '@angular/core';

@Component({
  selector: 'input-footer',
  templateUrl: './input-footer.component.html',
  host: {'class': 'input-column input-footer'}
})
export class InputFooterComponent implements OnInit {

  constructor(private viewContainerRef: ViewContainerRef) {
  }

  ngOnInit() {
    let element = this.viewContainerRef.element.nativeElement;
    let numColumn = Array.from(element.parentElement.children).filter(e => (e as HTMLElement).classList.contains("input-body")).length;
    element.style.gridColumn = `span ${numColumn}`;
  }
}
