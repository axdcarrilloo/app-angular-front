import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IBreed } from 'src/dtos/breed.dto';
import { environment } from 'src/environment/environment.dev';

@Injectable({
  providedIn: 'root'
})
export class BreedService {

  constructor(private http: HttpClient) {}

  getById(id: string): Observable<IBreed> {
    return this.http.get<IBreed>(environment.URL_BACK+'/cats/breeds/'+id);
  }

  getAll(): Observable<IBreed[]> {
    return this.http.get<IBreed[]>(environment.URL_BACK+'/cats/breeds');
  }

}
