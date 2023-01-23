import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { SubscriptionComponent } from './pages/subscription/subscription.component';
import { ModalModule } from '../../shared/modal/modal.module';
import { StoreModule } from '@ngrx/store';
import { offerReducer } from './state/offer/offer.reducer';
import { OfferEffects } from './state/offer/offer.effects';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [HomeComponent, SubscriptionComponent],
  imports: [CommonModule, HomeRoutingModule, ModalModule,
    StoreModule.forFeature("offer", offerReducer),
    EffectsModule.forFeature([OfferEffects]),
  ],


})
export class HomeModule {}
