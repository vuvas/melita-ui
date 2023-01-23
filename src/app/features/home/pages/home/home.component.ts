import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../../../shared/modal.service';
import { select, Store } from '@ngrx/store';
import * as offerActions from '../../../../state/offer/offer.actions';
import * as fromOffer from '../../../../state/offer/offer.reducer';
import { Observable } from 'rxjs';
import { Offer } from '../../../../shared/models/Offer';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  offers$: Observable<Offer[]> | undefined;
  constructor(private modalService: ModalService<any>, private store: Store<fromOffer.OfferState>) {}



  async showSubscriptions(): Promise<void> {
    const { SubscriptionComponent } = await import(
      '../subscription/subscription.component'
      );

    await this.modalService.open(SubscriptionComponent);
  }

  ngOnInit(): void {
    this.store.dispatch(new offerActions.LoadOffers());
    this.offers$ = this.store.pipe(select(fromOffer.getOffers));
  }

  refreshInProgress: boolean = true;
  countdown: number = 10;

  refresh() {
    // this.store.dispatch(OfferActions.refreshData({
    //   refreshInProgress: this.refreshInProgress,
    //   countdown: this.countdown,
    // }));
  }

}
