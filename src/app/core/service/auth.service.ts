import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {CookieUtil} from "../util/CookieUtil";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {
  }

  login(username: string, password: string): Observable<any> {
    // Simulate login progress
    if (username === 'admin' && password === 'password') {
      const token = 'fake-jwt-token';
      const user = {username, token};
      CookieUtil.set("currentUser", JSON.stringify(user))
      return new Observable(observer => {
        observer.next(user);
        observer.complete();
      });
    } else {
      return new Observable(observer => {
        observer.error('The submitted user name/password is invalid.');
      });
    }
  }

  logout() {
    // Clear cookie
    CookieUtil.reset("control");
    CookieUtil.reset("currentUser");
    // Clear local storage
    localStorage.clear();
  }
}
