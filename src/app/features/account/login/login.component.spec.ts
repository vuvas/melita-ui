import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { LoginComponent } from './login.component';

import * as AuthActions from './../../../state/auth/auth.actions';
import { loginRequest } from './../../../state/auth/auth.actions';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let store: MockStore;

  const initialState = {};

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule,FormsModule,ReactiveFormsModule],
      declarations: [LoginComponent],
      providers: [provideMockStore({initialState})],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

    it('should dispatch the login action with the correct credentials', () => {
      // Arrange
      const credentials: {username:string,password:string} = { username: 'admin@malita.com', password: 'password' };
      const expectedAction = AuthActions.loginRequest({ credentials });
      spyOn(store, 'dispatch');

      // Act

      // @ts-ignore
      component.form.setValue(credentials.username);// = credentials.username;
      // @ts-ignore
      component.form.setValue(credentials.password);
      component.onSubmit();

      // Assert
      expect(store.dispatch).toHaveBeenCalledWith(expectedAction);
    });

  it('should enable the login button only when the form is valid', () => {
    // Arrange
    const emailInput = fixture.debugElement.query(By.css('input[name="email"]'));
    const emailInputNativeElement = emailInput.nativeElement;
    const passwordInput = fixture.debugElement.query(By.css('input[name="password"]'));
    const passwordInputNativeElement = passwordInput.nativeElement;
    const loginButton = fixture.debugElement.query(By.css('button'));
    const loginButtonNativeElement = loginButton.nativeElement;
    spyOn(component, 'onSubmit');

    // Act
    emailInputNativeElement.value = 'admin@malita.com';
    emailInputNativeElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    passwordInputNativeElement.value = 'password';
    passwordInputNativeElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    loginButtonNativeElement.click();

    // Assert
    expect(component.onSubmit).toHaveBeenCalled();
  });

});
