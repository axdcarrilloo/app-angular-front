import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  getAll(): Observable<IUser[]> {
    return this.http.get<IUser[]>(environment.URL_BACK+'/users/getAll');
  }

  register(user: IUser): Observable<string> {
    const header = new HttpHeaders();
    header.append('Content-Type', 'application/json');
    header.append('Accept', '*/*');
    console.log(user);
    const options = ({ headers: header });
    return this.http.post<string>(environment.URL_BACK+'/users/register', user, options);
  }

  getByLogin(login: ILogin): Observable<IUser> {
    return this.http.post<IUser>(environment.URL_BACK+'/users/login/', login);
  }
}
