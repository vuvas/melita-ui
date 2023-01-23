import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../../../shared/modal.service';
import { select, Store } from '@ngrx/store';
import * as OfferActions from '../../../../state/offer/offer.actions';
import { selectOfferModel, selectOffers } from '../../../../state/offer/offer.reducer';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private modalService: ModalService<any>, private store: Store) {
    this.store.dispatch(OfferActions.offerRequest());

  }
  offers$ = this.store.pipe(select(selectOffers));



  async showSubscriptions(): Promise<void> {
    const { SubscriptionComponent } = await import(
      '../subscription/subscription.component'
      );

    await this.modalService.open(SubscriptionComponent);
  }

  ngOnInit(): void {
  }

  refreshInProgress: boolean = true;
  countdown: number = 10;

  refresh() {
    this.store.dispatch(OfferActions.refreshData({
      refreshInProgress: this.refreshInProgress,
      countdown: this.countdown,
    }));
  }

}
