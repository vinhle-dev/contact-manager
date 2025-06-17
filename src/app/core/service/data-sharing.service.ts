import {Injectable} from '@angular/core';
import {AbstractDataSharingService} from "./AbstractDataSharingService";

@Injectable({
  providedIn: 'root'
})
// TODO remove it if not need anymore
export class DataSharingService extends AbstractDataSharingService {
  protected prefixKey: string = "BaseDataSharingService";
}
