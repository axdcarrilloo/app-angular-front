import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { BreedService } from 'src/app/services/breed.service';
import { IBreed } from 'src/dtos/breed.dto';

@Component({
  selector: 'select-list',
  templateUrl: './select-list.component.html',
  styleUrls: ['./select-list.component.scss']
})
export class SelectListComponent implements OnInit {
  idSelectedBreed: string = '0';
  breeds: IBreed[] = [];
  @Output() idBreedOut = new EventEmitter<string>();

  constructor(private bredSvc: BreedService) {}
  ngOnInit(): void {
    console.log('SelectListComponent Cargado');
    this.loadBreds();
  }

  private emitId(id: string):void {
    this.idBreedOut.emit(id);
  }

  loadBreds(): void {
    this.bredSvc.getAll().subscribe({
      next: data => {
        this.breeds = data;
      },
      error: (error: HttpErrorResponse) => {
        console.log(error.error);
      }
    });
  }

  getSelectedBreed(): void {
    this.emitId(this.idSelectedBreed);
  }
}
