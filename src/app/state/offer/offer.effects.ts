import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, of, exhaustMap, map, tap } from 'rxjs';
import * as OfferActions from './../offer/offer.actions';
import { AccountService } from '../../features/account/account.service';
import { HomeService } from '../../features/home/home.service';
import { Offer } from '../../shared/models/Offer';

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



}
