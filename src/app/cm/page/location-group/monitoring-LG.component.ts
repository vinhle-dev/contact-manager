import {Component} from '@angular/core';
import {BaseLocationGroup} from "../../../core/component/location/BaseLocationGroup";
import {MessageQueuesPageComponent} from "../admin/messaging/message-queues-page.component";

@Component({
  selector: 'app-monitoring-LG',
  templateUrl: './monitoring-LG.component.html'
})
export class MonitoringLGComponent extends BaseLocationGroup {
  id = "Monitoring"
  title: string = "Monitoring";
  protected readonly MessageQueuesPageComponent = MessageQueuesPageComponent;
}
