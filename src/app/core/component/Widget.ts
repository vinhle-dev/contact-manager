import {Component, inject, Input, OnDestroy, OnInit} from "@angular/core";
import {Subscription} from "rxjs";
import {PageService} from "../service/page/PageService";

@Component({
  selector: "abstract-widget",
  template: ``,
  standalone: true
})
export class Widget implements OnDestroy, OnInit {
  @Input({required: true}) id!: string;
  @Input({required: true}) value!: string;
  @Input({required: true}) data!: any;

  @Input() editable = false;
  @Input() required = false;
  @Input() label = "";
  @Input() visible = true;

  private pageEditMode: boolean = false;
  private subscription!: Subscription;
  private pageService = inject(PageService);

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

  ngOnInit() {
    this.subscription = this.pageService.editMode$.subscribe(data => this.pageEditMode = data);
    this.pageEditMode = this.pageService.currentEditMode
  }

  get EditMode() {
    return this.editable && this.pageEditMode;
  }

  protected getPropertyValue(data: any, propertyName?: string | undefined) {
    if (data) {
      if (propertyName && data.hasOwnProperty(propertyName) && propertyName !== '') {
        return data[propertyName] != null ? data[propertyName] : "";

      } else {
        return data.hasOwnProperty('name') ? data['name'] : data;
      }
    }
    return "";
  }

  protected setPropertyValue(value: any, propertyName?: string) {
    if (value !== null && value !== undefined) {
      if (propertyName !== '' && this.data.hasOwnProperty(propertyName)) {
        this.data[propertyName!] = value.hasOwnProperty(propertyName) ? value[propertyName!] : value;
      } else {

        this.data = value;
      }
    }
  }

  protected getValue() {
    return this.getPropertyValue(this.data, this.value)
  }

  protected setValue(value: any) {
    this.setPropertyValue(value, this.value);
  }
}
