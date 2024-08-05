import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreedService } from './breed.service';
import { LocalStorageService } from './local-storage.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    BreedService, LocalStorageService
  ]
})
export class ServicesModule { }
