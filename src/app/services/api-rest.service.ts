import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../environments/environment'
import { Observable, throwError, BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiRestService {

  constructor() { }
  apiUrl= environment.apiUrl;

  httpOptions = {
    headers:new HttpHeaders({
      'Content-Type':'application/json'
    }),
}

handleError(error: HttpErrorResponse) {
  return throwError(error);
}

}