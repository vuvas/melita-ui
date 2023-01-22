import { createReducer, on } from '@ngrx/store';
import { loginFailure, loginSuccess, logout } from './auth.actions';
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { User } from '../../shared/models/User';

export interface State {
  token: string;
  user: User;
  loginError?: string;
}

export const initialState: State = {
  token: '',
  user: {},
};

const _authReducer = createReducer(
  initialState,
  on(loginSuccess, (state, { loginSuccessResponse }) => {
    return {
      ...state, token: loginSuccessResponse.authToken
    };
  }),
  on(loginFailure, (state: any, { error }) => {
    return {
      ...state, loginError: error, token: null, user: null,
    };
  }),
  on(logout, (state: any) => {
    return {
      ...state, token: null, user: null,
    };
  }),
);

export function authReducer(state: any, action: any) {
  return _authReducer(state, action);
}

