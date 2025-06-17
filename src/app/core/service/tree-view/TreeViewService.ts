import {Injectable} from "@angular/core";
import {AbstractDataSharingService} from "../AbstractDataSharingService";

@Injectable({
  providedIn: 'root'
})
export class TreeViewService extends AbstractDataSharingService {
  protected prefixKey: string = "TreeViewService";
  selectedItem = "";
  arrowStatus = "";

  getArrowStatus(id: string) {
    const listArrows = this.arrowStatus.split(",")
    const arrow = listArrows.find(arrow => arrow.startsWith(id));
    return arrow ? arrow.split("-")[1] : "";
  }
}
