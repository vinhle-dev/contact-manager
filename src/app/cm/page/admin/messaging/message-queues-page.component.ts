import {Component, Type} from '@angular/core';
import {BasePage} from "../../../../core/component/page/BasePage";
import {BaseLocation} from "../../../../core/component/location/BaseLocation";
import {AdminLocationComponent} from "../admin-location.component";

@Component({
  selector: 'message-queues',
  templateUrl: './message-queues-page.component.html'
})
export class MessageQueuesPageComponent extends BasePage {
  location: Type<BaseLocation> = AdminLocationComponent;
  title = "Message Queues";

  protected destinations = [{name: 'Email', id: 65, status: 'Started', serverId: 'noId'},
    {name: 'PolicyCenter Contact Broadcast', id: 70, status: 'Started', serverId: 'noId'},
    {name: 'ClaimCenter Contact Broadcast', id: 71, status: 'Started', serverId: 'noId'},
    {name: 'BillingCenter Contact Broadcast', id: 72, status: 'Started', serverId: 'noId'},
    {name: 'Document Store', id: 324, status: 'Started', serverId: 'noId'}]

  afterCancel(): void {
  }

  afterCommit(): void {
  }
}
