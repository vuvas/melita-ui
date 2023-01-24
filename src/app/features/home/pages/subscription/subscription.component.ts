import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalComponent } from '../../../../shared/modal/modal.component';
import { select, Store } from '@ngrx/store';
import * as fromSubscription from '../../state/subscription/subscription.reducer';
import { Observable } from 'rxjs';
import { SubscriptionModel } from '../../models/subscription';
import { Offer } from '../../models/Offer';
import * as subscriptionActions from '../../state/subscription/subscription.actions';
import * as fromOffer from '../../state/offer/offer.reducer';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.scss']
})
export class SubscriptionComponent implements OnInit{
  @ViewChild('modalComponent') modal:
    | ModalComponent<SubscriptionComponent>
    | undefined;
  subscriptionData$: Observable<SubscriptionModel[]> | undefined;
  isLoading$: Observable<boolean> | undefined;

  public selectedOffer: Offer = {} as Offer;
  public selectedOfferId: number = 101;

  constructor(private store: Store<fromSubscription.SubscriptionState>) {

  }

  ngOnInit():void {
    this.store.dispatch(new subscriptionActions.LoadSubscriptions(this.selectedOfferId));

    this.subscriptionData$ = this.store.pipe(select(fromSubscription.getSubscriptions));
    this.isLoading$ = this.store.pipe(select(fromSubscription.getSubscriptionsLoading));


  }

  async close(): Promise<void> {
    await this.modal?.close();
  }
}
