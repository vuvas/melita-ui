import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, of, exhaustMap, map, tap, interval, take, finalize } from 'rxjs';
import * as OfferActions from './../offer/offer.actions';
import { AccountService } from '../../features/account/account.service';
import { HomeService } from '../../features/home/home.service';
import { Offer } from '../../shared/models/Offer';
import { refreshSuccess } from './../offer/offer.actions';

@Injectable()
export class OfferEffects {
  constructor(private actions$: Actions, private homeService: HomeService, private router: Router,
  ) {
  }

  offerRequest$ = createEffect(() =>
    this.actions$.pipe(
      ofType(OfferActions.offerRequest),
      exhaustMap((action) =>
        this.homeService
          .getOffers()
          .pipe(
            map((successResponse) =>
              OfferActions.offerSuccess({ successResponse }),
            ),
            catchError((error) => of(OfferActions.offerFailure({ error }))),
          ),
      ),
    ),
  );
/*  offerRefresh$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(OfferActions.refreshData),
        exhaustMap((action) =>
            interval(5000).pipe(
              take(action.countdown),
              tap(() => action.countdown--),
              finalize(() => action.refreshInProgress = false),
            )),
        )
    });*/



}
