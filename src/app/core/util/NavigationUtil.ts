import {Router} from "@angular/router";
import {CookieUtil} from "./CookieUtil";

export class NavigationUtil {
  static skipLocationChange(router: Router, path: string) {
    router.navigateByUrl(path, {skipLocationChange: true})
      .then(
        (value) => {
          if (value) {
            console.log(`Navigate to ${path} successfully`)
            CookieUtil.update("control", "url", path)

          } else {
            console.log(`Navigate to ${path} failed`)
          }
        },
        (reason) => {
          console.error("Unknown error", reason)
        })
  }
}
