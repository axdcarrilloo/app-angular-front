import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IBreed } from 'src/dtos/breed.dto';
import { environment } from 'src/environment/environment.dev';

@Injectable({
  providedIn: 'root'
})
export class BreedService {

  constructor(private http: HttpClient) {}

  search(params: any): Observable<IBreed[]> {
    let httpParams = new HttpParams();
    for (const key in params) {
      console.log(key);
      if (params.hasOwnProperty(key)) {
        httpParams = httpParams.set(key, params[key]);
      }
    }
    return this.http.get<IBreed[]>(`${environment.URL_BACK}/cats/breeds/search`, { params: httpParams });
  }

  getById(id: string): Observable<IBreed> {
    return this.http.get<IBreed>(environment.URL_BACK+'/cats/breeds/'+id);
  }

  getAll(): Observable<IBreed[]> {
    return this.http.get<IBreed[]>(environment.URL_BACK+'/cats/breeds');
  }

}
