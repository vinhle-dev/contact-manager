import {Injectable} from '@angular/core';
import {Router} from "@angular/router";
import {NavigationUtil} from "../util/NavigationUtil";
import {CookieUtil} from "../util/CookieUtil";

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {
  constructor(private router: Router) {
  }

  canActivate(): boolean {
    if (CookieUtil.get("currentUser") !== "") {
      return true;
    }

    NavigationUtil.skipLocationChange(this.router, '');
    console.log("You are not logged in!");
    return false;
  }
}
