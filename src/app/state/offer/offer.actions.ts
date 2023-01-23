import { createAction, props } from '@ngrx/store';
import { Offer } from '../../shared/models/Offer';

export const offerRequest = createAction(
  '[Offer] Request'
);

export const offerSuccess = createAction(
  '[Offer] Success',
  props<{ successResponse: Offer }>()
);
export const offerFailure = createAction(
  '[Offer] Login Failure',
  props<{ error: string }>()
);
