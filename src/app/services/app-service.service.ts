import { Injectable } from '@angular/core';
import { ApiRestService } from "./api-rest.service"
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Cedula } from '../Models/cedula';
import { RequestCedula } from '../Models/request-cedula';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  endPoint=this.apiRestService.apiUrl+"/cedula";

  constructor(private http: HttpClient, private apiRestService: ApiRestService) { }

  /*getProjectsEXT(data:any){
    return this.http.post<any>(this.apiRestService.apiUrl+"/projects",JSON.stringify(data) ,
          this.apiRestService.httpOptions);
  }*/

  post(cedula:RequestCedula){
    return this.http.post<Cedula>(this.endPoint, cedula, this.apiRestService.httpOptions);
}
}
