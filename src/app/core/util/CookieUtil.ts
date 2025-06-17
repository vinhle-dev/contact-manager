import {StringUtil} from "./StringUtil";

export class CookieUtil {
  static get(cName: string) {
    let name = cName + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  static getValueByName(cName: string, valueName: string) {
    let cookie = this.get(cName);
    let values = cookie.split(',');
    let value = values.find(val => val.startsWith(valueName));
    return value !== undefined && value !== "" ? value.split('-')[1] : "";
  }

  static reset(cName: string) {
    this.set(cName, "");
  }

  static update(cName: string, cValueName: string, cValue: string) {
    let cookie = this.get(cName);
    let cookieValues = cookie.split(",").filter(val => !val.startsWith(cValueName));
    //Update value
    cookieValues.push(cValueName + "-" + cValue);
    //update cookie value
    cookie = StringUtil.join(cookieValues, ",");

    this.set(cName, cookie);
  }

  static set(cName: string, cValue: string) {
    document.cookie = cName + "=" + cValue + ";path=/;domain=localhost;samesite=lax;secure=true";
  }
}
