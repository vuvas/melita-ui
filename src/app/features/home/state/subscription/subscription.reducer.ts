import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as subscriptionAction from './subscription.actions';
import { SubscriptionActionTypes } from './subscription.actions';
import { SubscriptionModel } from '../../models/subscription';

export interface SubscriptionState {
  subscriptions: SubscriptionModel[],
  loading: boolean,
  loaded: boolean,
  error?: string;
}

export const initialState: SubscriptionState = {
  subscriptions: [], loading: false, loaded: false, error: ''
};


export function offerReducer(
  state: SubscriptionState = initialState,
  action: subscriptionAction.SubscriptionAction,
): SubscriptionState {
  switch (action.type) {
    case SubscriptionActionTypes.LOAD_SUBSCRIPTIONS:{
      return {
        ...state,
        loading: true,
      };
    }
    case SubscriptionActionTypes.LOAD_SUBSCRIPTIONS_SUCCESS: {
      return {
        ...state,
        loading: false,
        loaded: true,
        subscriptions: action.payload,
      };
    }
    case SubscriptionActionTypes.LOAD_SUBSCRIPTIONS_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false,
        subscriptions: [],
        error: action.payload,
      };
    }
    default: {
      return state;
    }
  }
}
export const getOfferFeatureState = createFeatureSelector<SubscriptionState>('offer_sub');
export const getSubscriptions = createSelector(
  getOfferFeatureState,
  (state) => state.subscriptions
);
export const getSubscriptionsLoading = createSelector(
  getOfferFeatureState,
  (state: SubscriptionState) => state.loading
);

export const getSubscriptionsLoaded = createSelector(
  getOfferFeatureState,
  (state: SubscriptionState) => state.loaded
);

export const getError = createSelector(
  getOfferFeatureState,
  (state: SubscriptionState) => state.error
);
