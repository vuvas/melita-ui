import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { emailValidator } from '../../../core/utility/validation-rule.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private fb: FormBuilder) {}
  form = this.fb.group({
    username: ['', [Validators.required, emailValidator]],
    password: ['', Validators.required],
    remember: [false, null],
  });
  onSubmit() {
    if (this.form.valid) {
      // Send the form data to the server for authentication
    }
  }
}
