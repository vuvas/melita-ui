import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as offerAction from './offer.actions';
import { OfferActionTypes } from './offer.actions';
import { Offer } from '../../models/Offer';
import * as fromRoot from '../../../../state/AppState';

export interface OfferState {
  offers: Offer[],
  selectedOffer: number | null,
  loading: boolean,
  loaded: boolean,
  error?: string;
}

export const initialState: OfferState = {
  offers: [], loading: false, loaded: false, error: '',selectedOffer : null
};

export interface AppState extends fromRoot.AppState {
  offers: OfferState;
}

export function offerReducer(
  state: OfferState = initialState,
  action: offerAction.OfferAction,
): OfferState {
  switch (action.type) {
    case OfferActionTypes.LOAD_OFFERS: {
      return {
        ...state,
        loading: true,
      };
    }
    case OfferActionTypes.LOAD_OFFERS_SUCCESS: {
      return {
        ...state,
        loading: false,
        loaded: true,
        offers: action.payload,
      };
    }
    case OfferActionTypes.LOAD_OFFERS_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false,
        offers: [],
        error: action.payload,
      };
    }
    default: {
      return state;
    }
  }
}
export const getOfferFeatureState = createFeatureSelector<OfferState>('offer');
export const getOffers = createSelector(
  getOfferFeatureState,
  (state) => state.offers
);
export const getOffersLoading = createSelector(
  getOfferFeatureState,
  (state: OfferState) => state.loading
);

export const getOffersLoaded = createSelector(
  getOfferFeatureState,
  (state: OfferState) => state.loaded
);

export const getError = createSelector(
  getOfferFeatureState,
  (state: OfferState) => state.error
);
