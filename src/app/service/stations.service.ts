import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CONSTANT } from '../constant/constant';
import { Observable } from 'rxjs';
import { iStation } from '../models/stations';


@Injectable({
  providedIn: 'root'
})
export class StationsService {


  constructor(private http:HttpClient) {
   }


   getAllStation(): Observable<iStation[]>{
    return this.http.get<iStation[]>(CONSTANT.ApiEndPoint + CONSTANT.METHODS.GET_ALL_STATION)
   }
}
