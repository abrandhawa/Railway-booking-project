import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CONSTANT } from '../constant/constant';
import { Observable } from 'rxjs';
import { ResponceModel, iPassenger} from '../models/stations';


@Injectable({
  providedIn: 'root'
})
export class StationsService {


  constructor(private http:HttpClient) {
   }


   getAllStation(): Observable<ResponceModel>{
    return this.http.get<ResponceModel>(CONSTANT.ApiEndPoint + CONSTANT.METHODS.GET_ALL_STATION)
   }

   
}
