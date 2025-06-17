import {Component, Input, OnInit, TemplateRef, ViewChild, ViewContainerRef} from '@angular/core';
import {RangeWidget} from "../../../../../../core/component/RangeWidget";

@Component({
  selector: 'range-cell',
  templateUrl: './range-cell.component.html'
})
export class RangeCellComponent extends RangeWidget implements OnInit {
  @ViewChild('template', {static: true}) template!: TemplateRef<any>;
  @Input() isLink = false;

  constructor(private viewContainerRef: ViewContainerRef) {
    super();
  }

  override ngOnInit() {
    super.ngOnInit();
    if (this.template) {
      this.viewContainerRef.createEmbeddedView(this.template)
      this.viewContainerRef.element.nativeElement.remove()
    }
  }
}
