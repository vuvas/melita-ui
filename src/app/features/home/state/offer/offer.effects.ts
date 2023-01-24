import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';

import {exhaustMap, finalize, interval, Observable, of, take, tap} from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';

import * as offerActions from './offer.actions';
import { HomeService } from '../../home.service';
import { Offer } from '../../models/Offer';

@Injectable()
export class OfferEffects {
  constructor(private actions$: Actions, private homeService: HomeService, private router: Router,
  ) {
  }

  loadOffers$: Observable<Action> = createEffect(()=>{
    return this.actions$.pipe(
      ofType<offerActions.LoadOffers>(
        offerActions.OfferActionTypes.LOAD_OFFERS
      ),
      mergeMap((action: offerActions.LoadOffers) =>
        this.homeService.getOffers().pipe(
          map(
            (offers: Offer[]) =>
              new offerActions.LoadOffersSuccess(offers)
          ),
          catchError(err => of(new offerActions.LoadOffersFail(err)))
        )
      )
    );
  })

  // refreshOffers$: Observable<Action> = createEffect(() => {
  //     return this.actions$.pipe(
  //       ofType<offerActions.RefreshOffers>(
  //         offerActions.OfferActionTypes.REFRESH_OFFERS
  //       ),        exhaustMap((action) =>
  //           interval(5000).pipe(
  //             take(action.countdown),
  //             tap(() => action.countdown--),
  //             finalize(() => action.refreshInProgress = false),
  //           )),
  //       )
  //   });



}
