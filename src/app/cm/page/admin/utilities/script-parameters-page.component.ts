import {Component, Type} from '@angular/core';
import {BasePage} from "../../../../core/component/page/BasePage";
import {BaseLocation} from "../../../../core/component/location/BaseLocation";
import {AdminLocationComponent} from "../admin-location.component";

@Component({
  selector: 'script-parameters-page',
  templateUrl: './script-parameters-page.component.html'
})
export class ScriptParametersPageComponent extends BasePage {
  location: Type<BaseLocation> = AdminLocationComponent;
  title = "Script Parameters";

  protected parameters: { name: string, type: string, value: string }[] = [];

  afterCancel(): void {
  }

  afterCommit(): void {
  }
}
