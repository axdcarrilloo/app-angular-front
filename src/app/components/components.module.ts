import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';

import { MainMenuComponent } from './main-menu/main-menu.component';
import { OnePageComponent } from './pages/one-page/one-page.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    MainMenuComponent,
    OnePageComponent
  ],
  imports: [
    CommonModule, SharedModule, AppRoutingModule
  ],
  exports: [
    MainMenuComponent
  ]
})
export class ComponentsModule { }
