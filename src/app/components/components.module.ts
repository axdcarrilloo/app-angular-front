import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';

import { MainMenuComponent } from './main-menu/main-menu.component';
import { OnePageComponent } from './pages/one-page/one-page.component';
import { SharedModule } from '../shared/shared.module';
import { TwoPageComponent } from './pages/two-page/two-page.component';
import { ThreePageComponent } from './pages/three-page/three-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FourPageComponent } from './pages/four-page/four-page.component';


@NgModule({
  declarations: [
    MainMenuComponent, OnePageComponent, TwoPageComponent, ThreePageComponent, FourPageComponent
  ],
  imports: [
    CommonModule, SharedModule, AppRoutingModule, FormsModule, ReactiveFormsModule
  ],
  exports: [
    MainMenuComponent
  ]
})
export class ComponentsModule { }
