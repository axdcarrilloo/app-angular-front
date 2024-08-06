import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { SelectListComponent } from './select-list/select-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServicesModule } from '../services/services.module';
import { TableBreedsComponent } from './table-breeds/table-breeds.component';
import { FormUserComponent } from './form-user/form-user.component';
import { TableUsersComponent } from './table-users/table-users.component';

@NgModule({
  declarations: [
    SelectListComponent, TableBreedsComponent, FormUserComponent, TableUsersComponent
  ],
  imports: [
    CommonModule, FormsModule, ServicesModule, HttpClientModule, ReactiveFormsModule
  ],
  exports: [
    SelectListComponent, TableBreedsComponent, FormUserComponent, TableUsersComponent
  ]
})
export class SharedModule { }
