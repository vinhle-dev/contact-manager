import {Subject} from "rxjs";
import {Injectable, TemplateRef, Type} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  currentInfoBarTemplate$ = new Subject<TemplateRef<any>>();
  currentLocationRef$ = new Subject<Type<any> | null>;
  currentLocationGroup$ = new Subject<string>;
  currentPageTemplate$ = new Subject<TemplateRef<any>>();
  menuTree = "";

  getNodeLevel(currentElement: HTMLElement) {
    let level = 0
    let matchCount = 0
    while (!currentElement.classList.contains("location-group")) {
      if (currentElement.parentElement) {
        currentElement = currentElement.parentElement;
        if (currentElement.nodeName == "LOCATION-GROUP") {
          matchCount++;

          // Root will not be counted as a level
          level = matchCount > 1 ? level + 1 : level;
        }
      } else {
        break
      }
    }

    return level;
  }
}
