import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { OnePageComponent } from './components/pages/one-page/one-page.component';

const routes: Routes = [
  { path: 'inicio', component: AppComponent },
  { path: 'one-page', component: OnePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
