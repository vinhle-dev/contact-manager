import {Directive, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
    selector: '[dynamicTemplate]'
})
export class DynamicTemplateDirective {
    constructor(public viewContainer: ViewContainerRef,
                private templateRef: TemplateRef<any>) {
    }

    dynamicTemplate(template: TemplateRef<any> | undefined) {
        this.viewContainer.clear();

        if (template) {
            this.viewContainer.createEmbeddedView(template);
        } else {
            this.viewContainer.createEmbeddedView(this.templateRef);
        }
    }
}
