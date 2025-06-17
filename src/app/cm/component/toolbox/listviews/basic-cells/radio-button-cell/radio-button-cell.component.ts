import {Component, Input, OnInit, TemplateRef, ViewChild, ViewContainerRef} from '@angular/core';
import {BooleanWidget} from "../../../../../../core/component/BooleanWidget";

@Component({
  selector: 'radio-button-cell',
  templateUrl: './radio-button-cell.component.html'
})
export class RadioButtonCellComponent extends BooleanWidget implements OnInit {
  @ViewChild('template', {static: true}) template: TemplateRef<any> | undefined;
  @Input() icon!: string;

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
