import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, flatMap, map, mergeMap, Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import * as fromAuth from '../state/auth/auth.reducer'

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(
    private store: Store<fromAuth.State>) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return this.store.select(fromAuth.selectToken).pipe(
      first(),
      flatMap(token => {
        const authReq = !!token ? req.clone({
          setHeaders: { Authorization: 'Bearer ' + token },
        }) : req;
        return next.handle(authReq);
      }),
    );
  }
}
