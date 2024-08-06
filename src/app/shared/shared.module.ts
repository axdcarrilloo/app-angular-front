import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { SelectListComponent } from './select-list/select-list.component';
import { FormsModule } from '@angular/forms';
import { ServicesModule } from '../services/services.module';
import { TableBreedsComponent } from './table-breeds/table-breeds.component';
import { FormUserComponent } from './form-user/form-user.component';

@NgModule({
  declarations: [
    SelectListComponent, TableBreedsComponent, FormUserComponent
  ],
  imports: [
    CommonModule, FormsModule, ServicesModule, HttpClientModule,
  ],
  exports: [
    SelectListComponent, TableBreedsComponent
  ]
})
export class SharedModule { }
