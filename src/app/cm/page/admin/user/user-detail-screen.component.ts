import {Component, inject, Input, OnInit} from '@angular/core';
import {User} from "../../../../core/data/entity/User";
import {UserService} from "../../../../core/service/data/user.service";
import {UserRole} from "../../../../core/data/entity/UserRole";
import {UserGroup} from "../../../../core/data/entity/UserGroup";
import {UserRoleService} from "../../../../core/service/data/user-role.service";
import {RoleService} from "../../../../core/service/data/role.service";
import {GroupService} from "../../../../core/service/data/group.service";
import {Region} from "../../../../core/data/entity/Region";
import {Contact} from "../../../../core/data/entity/Contact";
import {Phone} from "../../../../core/data/entity/Phone";
import {Address} from "../../../../core/data/entity/Address";
import {ContactService} from "../../../../core/service/data/contact.service";
import {BaseScreen} from "../../../../core/component/screen/BaseScreen";
import {PageService} from "../../../../core/service/page/PageService";

@Component({
  selector: 'user-detail-screen',
  templateUrl: './user-detail-screen.component.html'
})
export class UserDetailScreenComponent extends BaseScreen implements OnInit {
  @Input({required: true}) user!: User;
  @Input({required: true}) userGroups!: UserGroup[];
  @Input({required: true}) userRoles!: UserRole[];
  @Input({required: true}) regions!: Region[];

  protected contact!: Contact;
  protected address!: Address;
  protected summaryAddress!: string;
  protected phone!: Phone;
  protected userRoleService = inject(UserRoleService);
  protected roleService = inject(RoleService);
  protected groupService = inject(GroupService);
  protected pageService = inject(PageService);
  private userService = inject(UserService);
  private contactService = inject(ContactService);
  protected backupOptions = ["<none>", ...this.userService.getAll().map(u => u.name)];

  // TODO create type list
  protected prefixOptions = ["<none>", "Mr.", "Mrs.", "Ms.", "Dr."];
  protected suffixOptions = ["<none>", "Jr.", "Sr.", "I", "II", "III", "IV", "M.D", "PhD.", "D.O.", "Esq."];
  protected vacationOptions = ["<none>", "On vacation", "On vacation(Inactive)"];
  protected countryOptions = ["Afghanistan", "Albania", "Algeria", "American Samoa", "Andorra", "Angola", "Anguilla", "Antarctica", "Antigua and Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Bouvet Island (Bouvetoya)", "Brazil", "British Indian Ocean Territory (Chagos Archipelago)", "British Virgin Islands", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Cayman Islands", "Central African Republic", "Chad", "Chile", "China", "Christmas Island", "Cocos (Keeling) Islands", "Colombia", "Comoros", "Congo - Brazzaville", "Congo - Kinshasa", "Cook Islands", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Ivory Coast", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Faroe Islands", "Falkland Islands (Malvinas)", "Fiji, Republic of the Fiji Islands", "Finland", "France", "French Guiana", "French Polynesia", "French Southern Territories", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Heard and McDonald Islands", "Honduras", "Hong Kong SAR China", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea, North", "Korea, South", "Kuwait", "Kyrgyz Republic", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau SAR China", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Martinique", "Mauritania", "Mauritius", "Mayotte", "Mexico", "Micronesia, Federated States of", "Moldova", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Myanmar [Burma]", "Namibia", "Nauru", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Niue", "Norfolk Island", "Northern Mariana Islands", "Norway", "Oman", "Pakistan", "Palau", "Palestinian Interim Self-Government Authority", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Pitcairn Island", "Poland", "Portugal", "Puerto Rico", "Qatar", "Romania", "Russia", "Rwanda", "Reunion", "St. Helena", "St. Kitts and Nevis", "St. Lucia", "St. Pierre and Miquelon", "St. Vincent and the Grenadines", "Samoa", "San Marino", "Saint Barthelemy", "Saint Martin", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Georgia and the South Sandwich Islands", "Spain", "Sri Lanka", "Sudan", "Suriname", "Svalbard and Jan Mayen Islands", "Swaziland", "Sweden", "Switzerland", "Syria", "Sao Tome and Principe", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tokelau (Tokelau Islands)", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks and Caicos Islands", "Tuvalu", "U.S. Minor Outlying Islands", "U.S. Virgin Islands", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Wallis and Futuna Islands", "Western Sahara", "Yemen", "Zambia", "Zimbabwe"];
  protected stateOptions = ["Alaska", "Alabama", "Arkansas", "Arizona", "California", "Colorado", "Connecticut", "District of Columbia", "Delaware", "Florida", "Georgia", "Hawaii", "Iowa", "Idaho", "Illinois", "Indiana", "Kansas", "Kentucky", "Louisiana", "Massachusetts", "Maryland", "Maine", "Michigan", "Minnesota", "Missouri", "Mississippi", "Montana", "North Carolina", "North Dakota", "Nebraska", "New Hampshire", "New Jersey", "New Mexico", "Nevada", "New York", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Puerto Rico", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Virginia", "Vermont", "Washington", "Wisconsin", "West Virginia", "Wyoming", "Virgin Islands", "Northern Mariana Islands", "Marshall Islands", "Guam", "Federated States of Micronesia", "Alberta", "British Columbia", "Manitoba", "New Brunswick", "Newfoundland and Labrador", "Northwest Territories", "Nova Scotia", "Nunavut", "Ontario", "Prince Edward Island", "Quebec", "Saskatchewan", "Yukon", "South Australia", "Northern Territory", "Queensland", "New South Wales", "Victoria", "Western Australia", "Tasmania", "Australian Capital Territory", "Jervis Bay Territory", "Bavaria", "Baden-Wuerttemberg", "Berlin", "Brandenburg", "Bremen", "Hamburg", "Hesse", "Mecklenburg-Vorpommern", "Lower Saxony", "North Rhine-Westphalia", "Rhineland-Palatinate", "Saxony-Anhalt", "Schleswig-Holstein", "Saarland", "Saxony", "Thuringia", "Aichi", "Akita", "Aomori", "Chiba", "Ehime", "Fukui", "Fukuoka", "Fukushima", "Gifu", "Gumma", "Hiroshima", "Hokkaido", "Hyogo", "Ibaraki", "Ishikawa", "Iwate", "Kagawa", "Kagoshima", "Kanagawa", "Kochi", "Kumamoto", "Kyoto", "Mie", "Miyagi", "Miyazaki", "Nagano", "Nagasaki", "Nara", "Niigata", "Oita", "Okayama", "Okinawa", "Osaka", "Saga", "Saitama", "Shiga", "Shimane", "Shizuoka", "Tochigi", "Tokushima", "Tokyo", "Tottori", "Toyama", "Wakayama", "Yamagata", "Yamaguchi", "Yamanashi"];
  protected phoneOptions = ["Work", "Home", "Mobile"];
  protected experienceOptions = ["High", "Low", "Mid"];
  protected regionalOptions = ["Users' preferred languages", "United States (English)", "Great Britain (English)", "Canada (English)", "Australia (English)", "Canada (French)", "France (French)", "Germany (German)", "Japan (Japanese)"];
  protected phoneRegionOptions = ["Ascension Island (247)", "Andorra (376)", "United Arab Emirates (971)", "Afghanistan (93)", "Antigua and Barbuda (1)", "Anguilla (1)", "Albania (355)", "Armenia (374)", "Netherlands Antilles (599)", "Angola (244)", "Argentina (54)", "American Samoa (1)", "Austria (43)", "Australia (61)", "Aruba (297)", "&#197;land Islands (358)", "Azerbaijan (994)", "Bosnia and Herzegovina (387)", "Barbados (1)", "Bangladesh (880)", "Belgium (32)", "Burkina Faso (226)", "Bulgaria (359)", "Bahrain (973)", "Burundi (257)", "Benin (229)", "Saint Barth&#233;lemy (590)", "Bermuda (1)", "Brunei (673)", "Bolivia (591)", "BQ (599)", "Brazil (55)", "Bahamas (1)", "Bhutan (975)", "Botswana (267)", "Belarus (375)", "Belize (501)", "Canada (1)", "Cocos [Keeling] Islands (61)", "Congo - Kinshasa (243)", "Central African Republic (236)", "Congo - Brazzaville (242)", "Switzerland (41)", "Ivory Coast (225)", "Cook Islands (682)", "Chile (56)", "Cameroon (237)", "China (86)", "Colombia (57)", "Costa Rica (506)", "Cuba (53)", "Cape Verde (238)", "Cura&#231;ao (599)", "Christmas Island (61)", "Cyprus (357)", "Czech Republic (420)", "Germany (49)", "Djibouti (253)", "Denmark (45)", "Dominica (1)", "Dominican Republic (1)", "Algeria (213)", "Ecuador (593)", "Estonia (372)", "Egypt (20)", "Eritrea (291)", "Spain (34)", "Ethiopia (251)", "Finland (358)", "Fiji (679)", "Falkland Islands (500)", "Micronesia (691)", "Faroe Islands (298)", "France (33)", "Gabon (241)", "United Kingdom (44)", "Grenada (1)", "Georgia (995)", "French Guiana (594)", "Guernsey (44)", "Ghana (233)", "Gibraltar (350)", "Greenland (299)", "Gambia (220)", "Guinea (224)", "Guadeloupe (590)", "Equatorial Guinea (240)", "Greece (30)", "Guatemala (502)", "Guam (1)", "Guinea-Bissau (245)", "Guyana (592)", "Hong Kong SAR China (852)", "Honduras (504)", "Croatia (385)", "Haiti (509)", "Hungary (36)", "Indonesia (62)", "Ireland (353)", "Israel (972)", "Isle of Man (44)", "India (91)", "British Indian Ocean Territory (246)", "Iraq (964)", "Iran (98)", "Iceland (354)", "Italy (39)", "Jersey (44)", "Jamaica (1)", "Jordan (962)", "Japan (81)", "Kenya (254)", "Kyrgyzstan (996)", "Cambodia (855)", "Kiribati (686)", "Comoros (269)", "Saint Kitts and Nevis (1)", "North Korea (850)", "South Korea (82)", "Kuwait (965)", "Cayman Islands (1)", "Kazakhstan (7)", "Laos (856)", "Lebanon (961)", "Saint Lucia (1)", "Liechtenstein (423)", "Sri Lanka (94)", "Liberia (231)", "Lesotho (266)", "Lithuania (370)", "Luxembourg (352)", "Latvia (371)", "Libya (218)", "Morocco (212)", "Monaco (377)", "Moldova (373)", "Montenegro (382)", "Saint Martin (590)", "Madagascar (261)", "Marshall Islands (692)", "Macedonia (389)", "Mali (223)", "Myanmar [Burma] (95)", "Mongolia (976)", "Macau SAR China (853)", "Northern Mariana Islands (1)", "Martinique (596)", "Mauritania (222)", "Montserrat (1)", "Malta (356)", "Mauritius (230)", "Maldives (960)", "Malawi (265)", "Mexico (52)", "Malaysia (60)", "Mozambique (258)", "Namibia (264)", "New Caledonia (687)", "Niger (227)", "Norfolk Island (672)", "Nigeria (234)", "Nicaragua (505)", "Netherlands (31)", "Norway (47)", "Nepal (977)", "Nauru (674)", "Niue (683)", "New Zealand (64)", "Oman (968)", "Panama (507)", "Peru (51)", "French Polynesia (689)", "Papua New Guinea (675)", "Philippines (63)", "Pakistan (92)", "Poland (48)", "Saint Pierre and Miquelon (508)", "Puerto Rico (1)", "Palestinian Territories (970)", "Portugal (351)", "Palau (680)", "Paraguay (595)", "Qatar (974)", "R&#233;union (262)", "Romania (40)", "Serbia (381)", "Russia (7)", "Rwanda (250)", "Saudi Arabia (966)", "Solomon Islands (677)", "Seychelles (248)", "Sudan (249)", "Sweden (46)", "Singapore (65)", "Saint Helena (290)", "Slovenia (386)", "Svalbard and Jan Mayen (47)", "Slovakia (421)", "Sierra Leone (232)", "San Marino (378)", "Senegal (221)", "Somalia (252)", "Suriname (597)", "SS (211)", "S&#227;o Tom&#233; and Pr&#237;ncipe (239)", "El Salvador (503)", "Sint Maarten (1)", "Syria (963)", "Swaziland (268)", "Turks and Caicos Islands (1)", "Chad (235)", "Togo (228)", "Thailand (66)", "Tajikistan (992)", "Tokelau (690)", "Timor-Leste (670)", "Turkmenistan (993)", "Tunisia (216)", "Tonga (676)", "Turkey (90)", "Trinidad and Tobago (1)", "Tuvalu (688)", "Taiwan (886)", "Tanzania (255)", "Ukraine (380)", "Uganda (256)", "United States (1)", "Uruguay (598)", "Uzbekistan (998)", "Vatican City (379)", "Saint Vincent and the Grenadines (1)", "Venezuela (58)", "British Virgin Islands (1)", "U.S. Virgin Islands (1)", "Vietnam (84)", "Vanuatu (678)", "Wallis and Futuna (681)", "Samoa (685)", "Yemen (967)", "Mayotte (262)", "South Africa (27)", "Zambia (260)", "Zimbabwe (263)", "Unknown", "Unparseable"];

  ngOnInit() {
    this.contact = this.userService.getContact(this.user.contactId);
    this.address = this.contactService.getAddress(this.contact);
    this.phone = this.contactService.getPhone(this.contact.phoneId);
  }

  toAddRole(listData: UserRole[]) {
    listData.push(new UserRole());
  }

  toRemoveRole(listData: UserRole[], items: number[]) {
    items.forEach(i => listData.splice(i, 1));
  }

  toAddGroup(userId: number, listData: UserGroup[]) {
    let ug = new UserGroup();
    if (userId) {
      ug.userId = userId;
    }
    listData.push(new UserGroup());
  }

  toRemoveGroup(listData: UserGroup[], items: number[]) {
    items.forEach(i => listData.splice(i, 1));
  }

  toAddRegion(pageSevice: PageService, path: string) {
    pageSevice.go(path)
  }

  toRemoveRegion(listData: Region[], items: number[]) {
    items.forEach(i => listData.splice(i, 1));
  }
}
