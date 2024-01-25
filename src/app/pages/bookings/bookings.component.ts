import { CommonModule, DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { TrainService } from '../../service/train.service';


@Component({
  selector: 'app-bookings',
  standalone: true,
  imports: [CommonModule,DatePipe],
  templateUrl: './bookings.component.html',
  styleUrl: './bookings.component.css'
})
export class BookingsComponent {



  trainList:any[]=[];
  loggedUserData:any ;

  constructor(private trainSrv:TrainService){
const localData = localStorage.getItem("trainUser");
if(localData != null){
  this.loggedUserData = JSON.parse(localData);
  this.getAllTrain();
}
  }

  getAllTrain(){
    this.trainSrv.getAllBookings(this.loggedUserData.passengerID).subscribe((res:any)=>{
      this.trainList = res.data
    })
  }

}
