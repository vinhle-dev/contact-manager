import {Type} from "@angular/core";
import {BasePage} from "../page/BasePage";
import {Location} from "../../../cm/component/location/location-group/location-group.component";

export abstract class BaseLocationGroup {
  abstract id: string;
  abstract title: string;

  getLocation(type: Type<BaseLocationGroup | BasePage>, url?: string): Location {
    const title = new type().title;
    if (url) {
      return {component: type, title: title, url: url}
    }

    return {component: type, title: title}
  }
}
