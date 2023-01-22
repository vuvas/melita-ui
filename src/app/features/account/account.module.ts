import { NgModule } from '@angular/core';
import { AccountRoutingModule } from './account-routing.module';
import { LoginComponent } from './login/login.component';
import { CoreModule } from '../../core/core.module';
import { SharedModule } from '../../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CoreModule,
    SharedModule,
    AccountRoutingModule,
    ReactiveFormsModule,
  ],
})
export class AccountModule {}
