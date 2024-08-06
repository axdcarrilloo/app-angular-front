import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { OnePageComponent } from './components/pages/one-page/one-page.component';
import { TwoPageComponent } from './components/pages/two-page/two-page.component';
import { ThreePageComponent } from './components/pages/three-page/three-page.component';

const routes: Routes = [
  { path: 'inicio', component: AppComponent },
  { path: 'one-page', component: OnePageComponent },
  { path: 'two-page', component: TwoPageComponent },
  { path: 'three-page', component: ThreePageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
