import {Component, Type} from "@angular/core";
import {BaseLocation} from "../location/BaseLocation";
import {PageService} from "../../service/page/PageService";

@Component({
  selector: "abstract-page",
  template: ``,
  standalone: true
})
export abstract class BasePage {
  id = "";

  constructor(protected pageService: PageService) {
    this.id = this.constructor.name;
  }

  abstract location: Type<BaseLocation>;

  abstract title: string;

  abstract afterCancel(): void

  abstract afterCommit(): void
}
