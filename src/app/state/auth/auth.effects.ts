import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, of, exhaustMap, map, tap } from 'rxjs';
import * as AuthActions from './auth.actions';
import { AccountService } from '../../features/account/account.service';

@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions, private accountService: AccountService, private router: Router,
  ) {
  }

  loginRequest$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.loginRequest),
      exhaustMap((action) =>
        this.accountService
          .login(action.credentials.username, action.credentials.password)
          .pipe(
            map((loginSuccessResponse) =>
              AuthActions.loginSuccess({ loginSuccessResponse }),
            ),
            catchError((error) => of(AuthActions.loginFailure({ error }))),
          ),
      ),
    ),
  );

  loginSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.loginSuccess),
        tap(({ loginSuccessResponse }) => {
          localStorage.setItem('token', loginSuccessResponse.authToken);
          this.router.navigateByUrl('/home');
        }),
      ),
    { dispatch: false },
  );
  logoutRequest$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.logout),
      exhaustMap((action) =>
        this.accountService
          .logout()
    ),
  ),);
  redirect$ = createEffect(
    () => this.actions$.pipe(
      ofType(AuthActions.loginFailure),
      tap(() => {
        this.router.navigate(['/account/login']);
      })
    ),
    { dispatch: false }
  );

}
