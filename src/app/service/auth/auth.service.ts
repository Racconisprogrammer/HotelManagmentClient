import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import any = jasmine.any;

const BASIC_URL = "http://localhost:8000/";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
    register(signupRequest:any): Observable<any>{
      return this.http.post(BASIC_URL + "api/auth/signup")
    }
  }
}
