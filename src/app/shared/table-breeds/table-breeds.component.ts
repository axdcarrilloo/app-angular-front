import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { BreedService } from 'src/app/services/breed.service';
import { IBreed } from 'src/dtos/breed.dto';

@Component({
  selector: 'table-breeds',
  templateUrl: './table-breeds.component.html',
  styleUrls: ['./table-breeds.component.scss']
})
export class TableBreedsComponent implements OnInit {
  breedsMain: IBreed[] = [];
  @Input() searchs: string = '';
  optionSelected: string = '0';
  fieldSearch: string = '';

  constructor(private breedSvc: BreedService, private fb: FormBuilder) {}
  ngOnInit(): void {
    this.loadBreeds();
  }

  private selectedFieldSearch(optionSelected: string, fieldSearch: string): any {
    switch(optionSelected) {
      case '1':
        return {name: fieldSearch};
      case '2':
        return {temperament: fieldSearch};
      case '3':
        return {origin: fieldSearch};
    }
  }

  buildSearch(): void {
    const fieldSearch = this.selectedFieldSearch(this.optionSelected, this.fieldSearch);
    this.breedSvc.search(fieldSearch).subscribe({
      next: data => {
        this.breedsMain = data;
      },
      error: (err: HttpErrorResponse) => {
        console.log(err.error);
      }
    });
  }

  private loadBreeds(): void {
    this.breedSvc.getAll().subscribe({
      next: data => {
        this.breedsMain = data;
      },
      error: (err: HttpErrorResponse) => {
        console.log(err.error);
      }
    });
  }

}
