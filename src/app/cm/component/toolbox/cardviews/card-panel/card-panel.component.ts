import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  inject,
  Input,
  OnDestroy,
  OnInit,
  TemplateRef,
  ViewChild
} from '@angular/core';
import {CardService} from "../../../../../core/service/card/CardService";
import {Subscription} from "rxjs";

@Component({
  selector: 'card-panel',
  templateUrl: './card-panel.component.html'
})
export class CardPanelComponent implements AfterViewInit, OnInit, OnDestroy {
  @Input({required: true}) cardTemplateRef!: TemplateRef<any>;
  @ViewChild("item") itemRef!: ElementRef;
  id = "";
  contentTemplateRef: TemplateRef<any> | null = null;

  private cardService = inject(CardService);
  private crd = inject(ChangeDetectorRef);
  private subscription!: Subscription;

  ngAfterViewInit() {
    let firstChild = this.itemRef.nativeElement.children[0]
    if (firstChild && this.contentTemplateRef === null) {
      firstChild.children[0].click();
    }
  }

  ngOnInit(): void {
    this.cardService.counter++;
    this.id = this.constructor.name + this.cardService.counter;
    this.subscription = this.cardService.getData(this.id).subscribe(content => {
      this.contentTemplateRef = content
      this.crd.detectChanges()
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}
