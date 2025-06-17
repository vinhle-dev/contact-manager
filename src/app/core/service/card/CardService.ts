import {Injectable} from "@angular/core";
import {AbstractDataSharingService} from "../AbstractDataSharingService";

@Injectable({
  providedIn: 'root'
})
export class CardService extends AbstractDataSharingService {
  protected prefixKey: string = "CardService";

  counter = 0;
}
