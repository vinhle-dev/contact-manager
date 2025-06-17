import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  inject,
  Input,
  OnDestroy,
  OnInit,
  TemplateRef,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {CardService} from "../../../../../core/service/card/CardService";
import {Subscription} from "rxjs";

@Component({
  selector: 'card',
  templateUrl: './card.component.html'
})
export class CardComponent implements AfterViewInit, OnInit, OnDestroy {
  @Input({required: true}) label!: string;
  @Input() selectOnEnter = false;
  @ViewChild("template",) templateRef: TemplateRef<any> | null = null;

  selected = false;
  private cardService = inject(CardService);
  private crd = inject(ChangeDetectorRef);
  private container = inject(ViewContainerRef);
  private subscription!: Subscription;

  ngAfterViewInit() {
    if (this.selectOnEnter) {
      this.cardService.sendData(this.ParentId, this.templateRef);
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  ngOnInit() {
    this.subscription = this.cardService.getData(this.ParentId).subscribe(templateRef => {
      this.selected = this.templateRef === templateRef;
      this.crd.detectChanges();
    })
  }

  onClick() {
    this.cardService.sendData(this.ParentId, this.templateRef)
  }

  private get ParentId() {
    const parent = this.container.element.nativeElement.parentElement
    return parent ? parent.id : ""
  }
}
