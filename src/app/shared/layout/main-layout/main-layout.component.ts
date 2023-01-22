import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromAuth from '../../../state/auth/auth.reducer';
import * as AuthActions from '../../../state/auth/auth.actions';
import { Router } from '@angular/router';
@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
})
export class MainLayoutComponent {
  title = 'customer App';
  constructor(private router: Router, private store: Store<fromAuth.State>) {}
  token$ = this.store.select(fromAuth.selectToken);

  logout(): void {
    this.store.dispatch(AuthActions.logout());
  }
  navigate(route: string): void {
    this.router.navigateByUrl(route).then(() => {});
  }
}
