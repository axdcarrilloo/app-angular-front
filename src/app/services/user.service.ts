import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ILogin } from 'src/dtos/login.dto';
import { IUser } from 'src/dtos/user.dto';
import { environment } from 'src/environment/environment.dev';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getByLogin(login: ILogin): Observable<IUser> {
    return this.http.post<IUser>(environment.URL_BACK+'/users/login/', login);
  }
}
