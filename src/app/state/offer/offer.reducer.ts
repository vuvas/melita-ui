import { User } from '../../shared/models/User';
import { createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { loginFailure, loginSuccess, logout } from '../auth/auth.actions';
import { offerFailure, offerSuccess } from './offer.actions';
import { Offer, OfferModel } from '../../shared/models/Offer';
import { selectAuthState } from '../auth/auth.reducer';

export interface State {
  id: number;
  name: string;
  contractStartDate: string;
  contractEndDate: string;
 error?: string;
}

export const initialState: State = {
  id: 0,
  name: '',
  contractStartDate: new Date().toDateString(),
  contractEndDate: new Date().toDateString(),
};

const _offerReducer = createReducer(
  initialState,
  on(offerSuccess, (state, { successResponse }) => {
    return {
      ...state, Offers:successResponse
    };
  }),
  on(offerFailure, (state: any, { error }) => {
    return {
      ...state, Error: error
    };
  })
);


export function offerReducer(state: any, action: any) {
  return _offerReducer(state, action);
}

export const selectOfferModel = createFeatureSelector<Offer[]>('offer');
export const selectOffers = createSelector(
  selectOfferModel,
  (state) => state
);
