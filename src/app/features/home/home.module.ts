import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { SubscriptionComponent } from './pages/subscription/subscription.component';
import { ModalModule } from '../../shared/modal/modal.module';

@NgModule({
  declarations: [HomeComponent, SubscriptionComponent],
  imports: [CommonModule, HomeRoutingModule, ModalModule],
})
export class HomeModule {}
