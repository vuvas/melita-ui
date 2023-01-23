import { createReducer, on } from '@ngrx/store';
import {loginFailure, loginRequest, loginSuccess, logout} from './auth.actions';
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { User } from '../../shared/models/User';

export interface State {
  token: string;
  user: User;
  loginError?: string;
  isAuthenticated: boolean;
  loading: boolean;
}

export const initialState: State = {
  token: '',
  user: {},
  isAuthenticated: false,
  loading: false,
};

const _authReducer = createReducer(
  initialState,
  on(loginRequest, state => ({ ...state, loading: true })),
  on(loginSuccess, (state, { loginSuccessResponse }) => {
    return {
      ...state, token: loginSuccessResponse.authToken,
      isAuthenticated: true, loading: false
    };
  }),
  on(loginFailure, (state: any, { error }) => {
    return {
      ...state, loginError: error, token: null, user: null,loading: false
    };
  }),
  on(logout, (state: any) => {
    return {
      ...state, token: null, user: null,isAuthenticated: false,
    };
  }),
);

export function authReducer(state: any, action: any) {
  return _authReducer(state, action);
}
export const selectAuthState = createFeatureSelector<State>('auth');

export const selectToken = createSelector(
  selectAuthState,
  (state) => state.token
);
