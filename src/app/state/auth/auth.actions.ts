import { createAction, props } from '@ngrx/store';

export enum AuthActionTypes {
  LOGIN = '[Auth] Login',
  LOGIN_SUCCESS = '[Auth] Login Success',
  LOGIN_FAILURE = '[Auth] Login Failure',
  LOGOUT = '[Auth] Logout',
}

export const loginRequest = createAction(
  AuthActionTypes.LOGIN,
  props<{ credentials: { username: string; password: string } }>()
);

export const loginSuccess = createAction(
  AuthActionTypes.LOGIN_SUCCESS,
  props<{ loginSuccessResponse: {authToken:string} }>()
);

export const loginFailure = createAction(
  AuthActionTypes.LOGIN_FAILURE,
  props<{ error: string }>()
);

export const logout = createAction(AuthActionTypes.LOGOUT);
