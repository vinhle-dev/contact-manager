import {Component, inject, Input, OnInit} from '@angular/core';
import {Contact} from "../../../core/data/entity/Contact";
import {ContactService} from "../../../core/service/data/contact.service";
import {Address} from "../../../core/data/entity/Address";
import {Phone} from "../../../core/data/entity/Phone";
import {EFTData} from "../../../core/data/entity/EFTData";
import {AddressService} from "../../../core/service/data/address.service";
import {ContactAddressService} from "../../../core/service/data/contact-address.service";
import {DocumentService} from "../../../core/service/data/document.service";
import {Document} from "../../../core/data/entity/Document";
import {Service} from "../../../core/data/entity/Service";
import {ServiceRequestService} from "../../../core/service/data/service-request.service";
import {History} from "../../../core/data/entity/History";
import {HistoryService} from "../../../core/service/data/history.service";

import {BaseScreen} from "../../../core/component/screen/BaseScreen";

@Component({
  selector: 'contact-detail-screen',
  templateUrl: './contact-detail-screen.component.html'
})
export class ContactDetailScreenComponent extends BaseScreen implements OnInit {
  @Input({required: true}) contact!: Contact;

  protected documents: Document[] = [];
  protected services: Service[] = [];
  protected histories: History[] = [];
  protected primaryAddress!: Address;
  protected phone!: Phone;
  protected eftRecords: EFTData[] = [];
  protected addresses: Address[] = [];

  // Services
  protected addressService = inject(AddressService);
  private contactService = inject(ContactService);
  private contactAddressService = inject(ContactAddressService);
  private documentService = inject(DocumentService);
  private serviceService = inject(ServiceRequestService);
  private historyService = inject(HistoryService);

  //TODO create type list
  protected tagOptions = ["Claim Party", "Client", "Vendor"];
  protected availableOptions = ["Available", "Unavailable"];
  protected addressTypeOptions = ["Billing", "Business", "Home", "Other"];
  protected accountTypeOptions = ["Checking", "Savings", "Other"];
  protected documentFilterOptions = ["Only Current Documents", "All Documents", "Only Hidden Documents"];
  protected documentTypeOptions = ["Email", "Letter Received", "Letter Sent", "Service Level Agreement", "W-9", "Other"];
  protected documentStatusOptions = ["Draft", "Approving", "Approved", "Final"];
  protected historyFilterByDateOptions = ["Last 30 days", "Last 60 days", "Last 90 days", "Last 120 days", "Last 180 days", "Last year", "Last 3 years", "All"];
  protected historyFilterByTypeOptions = ["All", "Contact Created", "Name Updated", "Primary Phone Type Changed", "Phone Number Added", "Phone Number Updated", "Phone Number Removed", "Address Added", "Address Updated", "Address Removed", "Primary Address Added", "Primary Address Updated", "Primary Address Removed", "Primary Address Changed", "Pending Change Rejected", "Pending Create Approved"];


  ngOnInit() {
    this.primaryAddress = this.contactService.getAddress(this.contact);
    this.phone = this.contactService.getPhone(this.contact.phoneId);
    this.documents = this.documentService.getByContactId(this.contact.id);
    this.services = this.serviceService.getByContactId(this.contact.id);
    this.histories = this.historyService.getByContactId(this.contact.id);

    let listCA = this.contactAddressService.getByContactId(this.contact.id)
    this.addresses = this.addressService.getAddresses(listCA.map(ca => ca.addressId!))
  }

  protected toAddEFTData(listData: EFTData[]) {
    listData.push(new EFTData());
  }

  protected toRemoveEFTData(listData: EFTData[], items: number[]) {
    items.forEach(i => listData.splice(i, 1));
  }

  protected toAddAddress(listData: Address[]) {
    listData.push(new Address());
  }

  protected toRemoveAddress(listData: Address[], items: number[]) {
    items.forEach(i => listData.splice(i, 1));
  }
}
