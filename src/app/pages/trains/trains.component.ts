import { CommonModule, DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { TrainService } from '../../service/train.service';


@Component({
  selector: 'app-trains',
  standalone: true,
  imports: [DatePipe,CommonModule],
  templateUrl: './trains.component.html',
  styleUrl: './trains.component.css'
})
export class TrainsComponent {

trainList:any[]=[];

  constructor(private trainSrv:TrainService){
this.getAllTrain();
  }

  getAllTrain(){
    this.trainSrv.getAllTrains().subscribe((res:any)=>{
      this.trainList= res.data;
    })
  }

}
