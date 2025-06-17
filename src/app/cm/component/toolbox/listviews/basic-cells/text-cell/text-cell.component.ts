import {Component, Input, OnInit, TemplateRef, ViewChild, ViewContainerRef} from '@angular/core';
import {TextWidget} from "../../../../../../core/component/TextWidget";

@Component({
  selector: 'text-cell',
  templateUrl: './text-cell.component.html'
})
export class TextCellComponent extends TextWidget implements OnInit {
  @ViewChild('template', {static: true}) template: TemplateRef<any> | undefined;

  @Input() action!: { callback: Function; initParams?: any[] };
  @Input() isLink = false;
  @Input() width!: number;

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

  doAction() {
    if (this.action && this.action.callback) {
      const params = this.action.initParams !== undefined ? this.action.initParams : [];
      this.action.callback(...params);
    }
  }

  onValueChange(value: string) {
    this.setValue(value);
  }

  protected get customStyle() {
    return this.width ? `width: ${this.width}px` : ""
  }
}
