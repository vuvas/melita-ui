import { createAction, props } from '@ngrx/store';
import { Offer, OfferModel } from '../../shared/models/Offer';

export const offerRequest = createAction(
  '[Offer] Request'
);
export const refreshData = createAction(
  '[Offer] Refresh data',
  props<{ refreshInProgress:boolean,countdown:number }>()
);


export const refreshSuccess = createAction(
  '[Offer] refresh period ended',
);
export const offerSuccess = createAction(
  '[Offer] Success',
  props<{ successResponse: Offer[] }>()
);
export const offerFailure = createAction(
  '[Offer] Login Failure',
  props<{ error: string }>()
);
