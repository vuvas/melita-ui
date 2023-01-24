import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../../../shared/modal.service';
import { select, Store } from '@ngrx/store';
import * as offerActions from '../../state/offer/offer.actions';
import * as fromAuth from '../../../../state/auth/auth.reducer';
import * as fromOffer from '../../state/offer/offer.reducer';
import { Observable, take, tap } from 'rxjs';
import { Offer } from '../../models/Offer';
import { Router } from '@angular/router';
import {RefreshOffers} from "../../state/offer/offer.actions";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  offers$: Observable<any[]> | undefined;
  isLoading$: Observable<boolean> | undefined;
  isAuthenticated$: Observable<boolean> | undefined;
  constructor(private modalService: ModalService<any>,private router:Router, private store: Store<fromOffer.OfferState>,private authStore: Store<fromAuth.State>) {}



  async showSubscriptions(offer:Offer): Promise<void> {
    const { SubscriptionComponent } = await import(
      '../subscription/subscription.component'
      );
    //TODO: CAN YOU FIND WAY TO SEND OFFER ID FROM THIS TO CHILD COMPONENT?
    await this.modalService.open(SubscriptionComponent);
  }

  ngOnInit(): void {
    this.store.dispatch(new offerActions.LoadOffers());
    this.offers$ = this.store.pipe(select(fromOffer.getOffers));
    this.isLoading$ = this.store.pipe(select(fromOffer.getOffersLoading));
  }

  refreshInProgress: boolean = true;
  countdown: number = 10;

  refresh() {
    this.store.dispatch(new offerActions.RefreshOffers({
      refreshInProgress: this.refreshInProgress,
      countdown: this.countdown,
    }));
  }

}
