import { CommonModule } from '@angular/common';
import { Component,OnInit } from '@angular/core';
import { StationsService } from '../../service/stations.service';
import { iStation } from '../../models/stations';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  stationList: iStation[]=[];


  constructor(private stationSrv: StationsService){

  }

  ngOnInit(): void {
    this.loadStations();
  }

  loadStations(){
    this.stationSrv.getAllStation().subscribe((res:any)=>{
      this.stationList = res.data;
    })
  }

}
