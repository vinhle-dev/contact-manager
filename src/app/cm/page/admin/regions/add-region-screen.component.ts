import {Component, Input} from '@angular/core';
import {Region} from "../../../../core/data/entity/Region";
import {BaseScreen} from "../../../../core/component/screen/BaseScreen";

@Component({
  selector: 'add-region-screen',
  templateUrl: './add-region-screen.component.html'
})
export class AddRegionScreenComponent extends BaseScreen {
  @Input({required: true}) region!: Region;

  // TODO create type list
  protected stateOptions = ["Alaska", "Alabama", "Arkansas", "Arizona", "California", "Colorado", "Connecticut", "District of Columbia", "Delaware", "Florida", "Georgia", "Hawaii", "Iowa", "Idaho", "Illinois", "Indiana", "Kansas", "Kentucky", "Louisiana", "Massachusetts", "Maryland", "Maine", "Michigan", "Minnesota", "Missouri", "Mississippi", "Montana", "North Carolina", "North Dakota", "Nebraska", "New Hampshire", "New Jersey", "New Mexico", "Nevada", "New York", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Puerto Rico", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Virginia", "Vermont", "Washington", "Wisconsin", "West Virginia", "Wyoming", "Virgin Islands", "Northern Mariana Islands", "Marshall Islands", "Guam", "Federated States of Micronesia", "Alberta", "British Columbia", "Manitoba", "New Brunswick", "Newfoundland and Labrador", "Northwest Territories", "Nova Scotia", "Nunavut", "Ontario", "Prince Edward Island", "Quebec", "Saskatchewan", "Yukon", "South Australia", "Northern Territory", "Queensland", "New South Wales", "Victoria", "Western Australia", "Tasmania", "Australian Capital Territory", "Jervis Bay Territory", "Bavaria", "Baden-Wuerttemberg", "Berlin", "Brandenburg", "Bremen", "Hamburg", "Hesse", "Mecklenburg-Vorpommern", "Lower Saxony", "North Rhine-Westphalia", "Rhineland-Palatinate", "Saxony-Anhalt", "Schleswig-Holstein", "Saarland", "Saxony", "Thuringia", "Aichi", "Akita", "Aomori", "Chiba", "Ehime", "Fukui", "Fukuoka", "Fukushima", "Gifu", "Gumma", "Hiroshima", "Hokkaido", "Hyogo", "Ibaraki", "Ishikawa", "Iwate", "Kagawa", "Kagoshima", "Kanagawa", "Kochi", "Kumamoto", "Kyoto", "Mie", "Miyagi", "Miyazaki", "Nagano", "Nagasaki", "Nara", "Niigata", "Oita", "Okayama", "Okinawa", "Osaka", "Saga", "Saitama", "Shiga", "Shimane", "Shizuoka", "Tochigi", "Tokushima", "Tokyo", "Tottori", "Toyama", "Wakayama", "Yamagata", "Yamaguchi", "Yamanashi"];
}
