import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CONSTANT } from '../constant/constant';
import { iPassenger, ResponceModel } from '../models/stations';

@Injectable({
  providedIn: 'root'
})
export class TrainService {

  constructor(private http:HttpClient) { 
  }

  createPassenger(obj:iPassenger): Observable<ResponceModel>{
    return this.http.post<ResponceModel>(CONSTANT.ApiEndPoint + CONSTANT.METHODS.ADD_UPDATE_PASSENGER ,obj)
   }

   getTrainsBetweenStations(): Observable<ResponceModel>{
    return this.http.get<ResponceModel>(CONSTANT.ApiEndPoint + CONSTANT.METHODS.GET_TRAINS_BETWEEN_STATIONS)
   }

}
