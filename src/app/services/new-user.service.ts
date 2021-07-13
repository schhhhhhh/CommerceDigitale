import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { JwtPayload } from '../model/jwt-payload';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NewUserService {

  constructor(private httpClient: HttpClient) { }

  login(username: String, password: String): Observable<JwtPayload> {
    // @ts-ignore
    return this.httpClient.post<JwtPayload>(environment.LOGIN, {username, password}).pipe(map(value => {
      localStorage.setItem("myToken", JSON.stringify(value));
      console.log("my Token : " + localStorage.getItem("myToken"));
      return value;
    }));
  }
}
