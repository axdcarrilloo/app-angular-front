import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';

import { BreedService } from 'src/app/services/breed.service';
import { PictureService } from 'src/app/services/picture.service';
import { SelectListComponent } from 'src/app/shared/select-list/select-list.component';
import { IBreed } from 'src/dtos/breed.dto';
import { IPicture } from 'src/dtos/picture.dto';

@Component({
  selector: 'app-one-page',
  templateUrl: './one-page.component.html',
  styleUrls: ['./one-page.component.scss']
})
export class OnePageComponent implements OnInit {
  idBreedCarrusel: any;
  validateBreedCarrusel = false;
  pictures: IPicture[] = [];
  breedCarrusel: IBreed = {id: '', name: '', temperament: '', origin: ''};
  breedsMain: IBreed[] = [];
  @ViewChild(SelectListComponent) selectListComponent!: SelectListComponent;

  constructor(private pictureSvc: PictureService, private breedSvc: BreedService) {}
  ngOnInit(): void {
    this.loadBreeds();
  }

  cleanSelect(): void {
    this.idBreedCarrusel = '';
    this.selectListComponent.cleanSelect();
    this.pictures = [];
    this.validateBreedCarrusel = false;
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

  private getBreedById(id: string): void {
    this.breedSvc.getById(id).subscribe({
      next: data => {
        this.breedCarrusel = data;
      },
      error: (error: HttpErrorResponse) => {
        console.log(error.error);
      }
    });
  }

  private loadPictures(): void {
    this.pictureSvc.getByIdBreed(this.idBreedCarrusel).subscribe({
      next: data => { this.pictures = data },
      error: (error: HttpErrorResponse) => {
        console.log(error.error);
      }
    });
  }

  receiveId(idBreed: string): void {
    this.validateBreedCarrusel = true;
    this.idBreedCarrusel = idBreed;
    this.getBreedById(idBreed);
    this.loadPictures();
  }

}
