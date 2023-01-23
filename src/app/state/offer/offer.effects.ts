import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";

import { Observable, of } from "rxjs";
import { map, mergeMap, catchError } from "rxjs/operators";

import * as offerActions from './../offer/offer.actions';
import { HomeService } from '../../features/home/home.service';
import { Offer } from '../../shared/models/Offer';

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
