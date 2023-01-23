import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../../../shared/modal.service';
import { OfferModel } from '../../../../shared/models/Offer';
import { Store } from '@ngrx/store';
import * as OfferActions from '../../../../state/offer/offer.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  offer: OfferModel = {
    offers: [
      {
        id: 101,
        name: 'Cool Offer 2017',
        contractStartDate: '2017-01-01',
        contractEndDate: '2021-01-01',
      },
      {
        id: 111,
        name: 'Special Offer 2023',
        contractStartDate: '2023-01-19',
        contractEndDate: '2024-01-19',
      },
      {
        id: 100,
        name: 'Internet Bundle',
        contractStartDate: '2014-05-01',
        contractEndDate: '2016-05-01',
      },
      {
        id: 404,
        name: 'Special Failing Offer 2023',
        contractStartDate: '2023-01-15',
        contractEndDate: '2024-01-15',
      },
    ],
    status: 0,
  };

  constructor(private modalService: ModalService<any>,private store: Store) {
    // Sort offers: recent first
    this.offer.offers.sort(
      (a, b) =>
        new Date(b.contractStartDate).getTime() -
        new Date(a.contractStartDate).getTime()
    );
  }

  async showNewsletter(): Promise<void> {
    const { SubscriptionComponent } = await import(
      "../subscription/subscription.component"
      );

    await this.modalService.open(SubscriptionComponent);
  }

  ngOnInit(): void {
    this.store.dispatch(OfferActions.offerRequest());
  }

}
