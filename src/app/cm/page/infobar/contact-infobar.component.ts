import {Component, Input} from '@angular/core';
import {Contact} from "../../../core/data/entity/Contact";

@Component({
  selector: 'contact-infobar',
  templateUrl: './contact-infobar.component.html'
})
export class ContactInfobarComponent {
  @Input({required: true}) contact!: Contact;
}
