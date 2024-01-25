import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CONSTANT } from '../constant/constant';
import { Booking, iPassenger, ResponceModel } from '../models/stations';

@Injectable({
  providedIn: 'root'
})
export class TrainService {

  constructor(private http:HttpClient) { 
  }

  createPassenger(obj:iPassenger): Observable<ResponceModel>{
    return this.http.post<ResponceModel>(CONSTANT.ApiEndPoint + CONSTANT.METHODS.ADD_UPDATE_PASSENGER ,obj)
   }

   getTrainsBetweenStations(searchObj:any): Observable<ResponceModel>{
    return this.http.get<ResponceModel>(CONSTANT.ApiEndPoint + CONSTANT.METHODS.GET_TRAINS_BETWEEN_STATIONS+ `?departureStationId=${searchObj.fromStationId}&arrivalStationId=${searchObj.toStationId}&departureDate=${searchObj.dateOfTravel}`)
   }

   bookTrain(obj: Booking) :Observable<ResponceModel> {
    return this.http.post<ResponceModel>(CONSTANT.ApiEndPoint + CONSTANT.METHODS.BOOK_TRAIN,obj  )
  }
  getAllTrains() :Observable<ResponceModel> {
    return this.http.get<ResponceModel>(CONSTANT.ApiEndPoint + CONSTANT.METHODS.GET_ALL_TRAINS  )
  }
  getAllBookings(id:number) :Observable<ResponceModel> {
    return this.http.get<ResponceModel>(CONSTANT.ApiEndPoint + CONSTANT.METHODS.GET_ALL_BOOKING +'?passengerid='+ id)
  }
  Login(obj:iPassenger): Observable<ResponceModel>{
    return this.http.post<ResponceModel>(CONSTANT.ApiEndPoint + CONSTANT.METHODS.LOGIN ,obj)
   }
  
}
