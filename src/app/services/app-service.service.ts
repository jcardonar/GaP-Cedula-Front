import { Injectable } from '@angular/core';
import { ApiRestService } from "./api-rest.service"
import { HttpClient} from '@angular/common/http';
import { Cedula } from '../Models/cedula';
import { RequestCedula } from '../Models/request-cedula';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  endPoint = this.apiRestService.apiUrl + "/cedula";

  constructor(private http: HttpClient, private apiRestService: ApiRestService) { }

  post(cedula: RequestCedula) {
    return this.http.post<Cedula>(this.endPoint, cedula, this.apiRestService.httpOptions)
  }
}
