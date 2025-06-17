import {Injectable} from "@angular/core";
import {Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export abstract class AbstractDataSharingService {
  private stores: { [key: string]: Subject<any> } = {};

  protected abstract prefixKey: string;

  sendData(key: string, data: any): void {
    this.initSubject(`${this.prefixKey}-${key}`);
    this.stores[`${this.prefixKey}-${key}`].next(data);
  }

  getData(key: string): Observable<any> {
    this.initSubject(`${this.prefixKey}-${key}`);
    return this.stores[`${this.prefixKey}-${key}`].asObservable();
  }

  private initSubject(key: string) {
    if (!this.stores[key]) {
      this.stores[key] = new Subject<any>();
    }
  }
}
