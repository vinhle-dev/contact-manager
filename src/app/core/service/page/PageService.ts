import {inject, Injectable} from "@angular/core";
import {CookieUtil} from "../../util/CookieUtil";
import {NavigationUtil} from "../../util/NavigationUtil";
import {Router} from "@angular/router";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PageService {
  private router = inject(Router);

  id = "";
  cancel$ = new Subject<boolean>;
  commit$ = new Subject<boolean>;
  editMode$ = new Subject<boolean>;
  parent: { title: string, url: string } = {title: "", url: ""};
  title = "";
  currentEditMode = false;

  go(url: string) {
    let parentTitle = this.title;
    let parentURL = CookieUtil.getValueByName("control", "url");
    NavigationUtil.skipLocationChange(this.router, url);
    this.parent = {title: parentTitle, url: parentURL};
  }
}
