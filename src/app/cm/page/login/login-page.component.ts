import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {NavigationUtil} from "../../../core/util/NavigationUtil";
import {AuthService} from "../../../core/service/auth.service";
import {CookieUtil} from "../../../core/util/CookieUtil";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements AfterViewInit {
  @ViewChild("button") _buttonRef!: ElementRef;
  protected credential = {username: '', password: ''}
  protected error!: string;

  constructor(private authService: AuthService,
              private router: Router) {
  }

  ngAfterViewInit() {
    if (CookieUtil.get("currentUser") !== "") {
      let currentUrl = CookieUtil.getValueByName("control", "url")
      if (currentUrl !== "") {
        NavigationUtil.skipLocationChange(this.router, currentUrl);
      }
    } else {
      CookieUtil.reset("control");
    }

    this.shortcutForButton();
  }

  private shortcutForButton() {
    document.addEventListener("keypress", (event) => {
      if (event.key === "Enter") {
        this._buttonRef.nativeElement.click();
      }
    });
  }

  onSubmit() {
    this.authService.login(this.credential.username, this.credential.password).subscribe({
        next: () => {
          NavigationUtil.skipLocationChange(this.router, "/ab/contacts")
        },

        error: (error) => {
          this.error = error;
        }
      }
    )
  }
}
