import { Action } from '@ngrx/store';
import { Offer } from '../../shared/models/Offer';

export enum OfferActionTypes {
  LOAD_OFFERS = '[Offer] Load Offers',
  LOAD_OFFERS_SUCCESS = '[Offer] Load Offers Success',
  LOAD_OFFERS_FAIL = '[Offer] Load Offers Fail'
}

export class LoadOffers implements Action {
  readonly type = OfferActionTypes.LOAD_OFFERS
}
export class LoadOffersSuccess implements Action {
  readonly type = OfferActionTypes.LOAD_OFFERS_SUCCESS
  constructor(public payload: Offer[]) {
  }
}
export class LoadOffersFail implements Action {
  readonly type = OfferActionTypes.LOAD_OFFERS_FAIL
  constructor(public payload: string) {}
}
export type OfferAction = LoadOffers | LoadOffersSuccess | LoadOffersFail;
