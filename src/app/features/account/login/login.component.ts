import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { emailValidator } from '../../../core/utility/validation-rule.service';
import { Store } from '@ngrx/store';
import * as AuthActions from '../../../state/auth/auth.actions';
import { User } from '../../../shared/models/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private store: Store,private fb: FormBuilder) {}
  form = this.fb.group({
    username: ['', [Validators.required, emailValidator]],
    password: ['', Validators.required],
    remember: [false, null],
  });

  onSubmit() {
    if (this.form.valid) {
      const credentials =  {
        username: this.form.value.username,
        password: this.form.value.password,
      };

      // @ts-ignore
      this.store.dispatch(AuthActions.loginRequest({ credentials }));    }
  }
}
