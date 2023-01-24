import { Action } from '@ngrx/store';
import { Offer } from '../../models/Offer';

export enum OfferActionTypes {
  LOAD_OFFERS = '[Offer] Load Offers',
  LOAD_OFFERS_SUCCESS = '[Offer] Load Offers Success',
  LOAD_OFFERS_FAIL = '[Offer] Load Offers Fail',
  REFRESH_OFFERS = '[Offer] refresh Load Offers',

}

export class LoadOffers implements Action {
  readonly type = OfferActionTypes.LOAD_OFFERS
}
export class LoadOffersSuccess implements Action {
  readonly type = OfferActionTypes.LOAD_OFFERS_SUCCESS
  constructor(public payload: Offer[]) {}
}
export class LoadOffersFail implements Action {
  readonly type = OfferActionTypes.LOAD_OFFERS_FAIL
  constructor(public payload: string) {}
}
export class RefreshOffers implements Action {
  readonly type = OfferActionTypes.REFRESH_OFFERS
  constructor(public payload: {refreshInProgress:boolean, countdown:number}) {}

}


export type OfferAction = LoadOffers | LoadOffersSuccess | LoadOffersFail | RefreshOffers;
