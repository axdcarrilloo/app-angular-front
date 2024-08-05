import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { SelectListComponent } from './select-list/select-list.component';
import { FormsModule } from '@angular/forms';
import { ServicesModule } from '../services/services.module';

@NgModule({
  declarations: [
    SelectListComponent
  ],
  imports: [
    CommonModule, FormsModule, ServicesModule, HttpClientModule
  ],
  exports: [
    SelectListComponent
  ]
})
export class SharedModule { }
