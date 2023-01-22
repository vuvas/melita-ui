import { NgModule } from '@angular/core';
import { NgMaterialModule } from './ng-material/ng-material.module';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { RouterOutlet } from '@angular/router';
import { AsyncPipe, NgIf } from '@angular/common';

@NgModule({
  declarations: [AuthLayoutComponent, MainLayoutComponent],
  imports: [NgMaterialModule, RouterOutlet, AsyncPipe, NgIf],
  exports: [NgMaterialModule],
})
export class SharedModule {}
