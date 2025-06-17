import {Component, Input, TemplateRef} from '@angular/core';

@Component({
  selector: 'menu-tree',
  templateUrl: './menu-tree.component.html'
})
export class MenuTreeComponent {
  @Input({required: true}) height!: number;
  @Input({required: true}) treeViewTemplateRef!: TemplateRef<any>;
}
