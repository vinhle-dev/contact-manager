import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  ngOnInit() {
    this.clickHandle();
  }

  private clickHandle() {
    document.addEventListener("click", (event: MouseEvent) => {
      let element = (event.target as Element);
      this.dropdownHandle(element);
    })
  }

  private dropdownHandle(element: Element) {
    let dropdowns = Array.from(document.getElementsByClassName("dropdown-container"));

    // Get current dropdown
    let currentDropdown: Element | null = null;
    if (element.matches('.dropdown-trigger')) {
      currentDropdown = element.nextElementSibling;
      if (currentDropdown && !currentDropdown.matches(".dropdown-container")) {
        currentDropdown = currentDropdown.children[0];
      }

    } else if (element.matches('.tab-icon-box') &&
               element.parentElement &&
               element.parentElement.nextElementSibling) {
      currentDropdown = element.parentElement.nextElementSibling.children[0];
    }

    // Close the dropdown if the user clicks outside of it.
    if (currentDropdown) {
      dropdowns.forEach(dropdown => {
        if (currentDropdown && currentDropdown !== dropdown) {
          dropdown.classList.remove("dropdown-container__show");
        }
      });
    } else {
      dropdowns.forEach(dropdown => {
        dropdown.classList.remove("dropdown-container__show");
      });
    }
  }
}
