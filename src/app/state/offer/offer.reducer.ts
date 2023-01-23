import { User } from '../../shared/models/User';
import { createReducer, on } from '@ngrx/store';
import { loginFailure, loginSuccess, logout } from '../auth/auth.actions';
import { offerFailure, offerSuccess } from './offer.actions';

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
      ...state, id:successResponse.id,name:successResponse.name,contractStartDate:successResponse.contractStartDate,contractEndDate:successResponse.contractEndDate
    };
  }),
  on(offerFailure, (state: any, { error }) => {
    return {
      ...state, Error: error, id: 0, name:'',contractStartDate: new Date().toDateString(),
      contractEndDate: new Date().toDateString(),
    };
  })
);

export function offerReducer(state: any, action: any) {
  return _offerReducer(state, action);
}
