import { Component, ViewChild } from '@angular/core';
import { SubscriptionModel } from '../../../../shared/models/Offer';
import { ModalComponent } from '../../../../shared/modal/modal.component';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.scss']
})
export class SubscriptionComponent {
  @ViewChild('modalComponent') modal:
    | ModalComponent<SubscriptionComponent>
    | undefined;

  subscription: SubscriptionModel = {
    subscriptions: [
      {
        id: 402,
        name: 'Essential Mobile',
        type: 'MOBILE',
        line: 0,
        usage: [
          {
            type: 'DATA',
            used: 10,
            limit: 1024,
          },
          {
            type: 'SMS',
            used: 287,
            limit: 300,
          },
        ],
      },
    ],
    status: 0,
  };

  constructor() {
    this.subscription.subscriptions.sort(function (a, b) {
      if (a.name === b.name) {
        // Line is only important when names are the same
        return (b.line ?? 0) - (a.line ?? 0);
      }
      return a.name > b.name ? 1 : -1;
    });
  }

  async close(): Promise<void> {
    await this.modal?.close();
  }
}
