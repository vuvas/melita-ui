import { createAction, props } from '@ngrx/store';

export const loginRequest = createAction(
  '[Auth] Login Request',
  props<{ credentials: { username: string; password: string } }>()
);

export const loginSuccess = createAction(
  '[Auth] Login Success',
  props<{ loginSuccessResponse: {authToken:string} }>()
);

export const loginFailure = createAction(
  '[Auth] Login Failure',
  props<{ error: string }>()
);

export const logout = createAction('[Auth] Logout');
