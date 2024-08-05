import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { IPicture } from 'src/dtos/picture.dto';
import { environment } from 'src/environment/environment.dev';

@Injectable({
  providedIn: 'root'
})
export class PictureService {

  constructor(private http: HttpClient) { }

  getByIdBreed(id: string): Observable<IPicture[]> {
    return this.http.get<IPicture[]>(environment.URL_BACK+'/pictures/imagesbybreed/'+id);
  }

}
