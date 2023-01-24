import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';

import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';

import * as subscriptionActions from './subscription.actions';
import { HomeService } from '../../home.service';
import { SubscriptionModel } from '../../models/subscription';

@Injectable()
export class SubscriptionEffects {
  constructor(private actions$: Actions, private homeService: HomeService, private router: Router,
  ) {
  }

  loadSubscriptions$: Observable<Action> = createEffect(() => {
    return this.actions$.pipe(
      ofType<subscriptionActions.LoadSubscriptions>(
        subscriptionActions.SubscriptionActionTypes.LOAD_SUBSCRIPTIONS
      ),
      mergeMap((action: subscriptionActions.LoadSubscriptions) =>
        this.homeService.getSubscriptionByOffer(action.payload).pipe(
          map(
            (subscriptions: SubscriptionModel[]) =>
              new subscriptionActions.LoadSubscriptionsSuccess(subscriptions)
          ),
          catchError(err => of(new subscriptionActions.LoadSubscriptionsFail(err)))
        )
      )
    );
  })
}
