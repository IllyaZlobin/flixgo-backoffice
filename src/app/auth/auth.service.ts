import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Login } from './models';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(model: Login): Observable<boolean> {
    this.http.post(environment.url + '/auth/login', model).subscribe(x => {
      console.log(x);
    });
    return of(true);
  }
}
