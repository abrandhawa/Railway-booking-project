import { CommonModule } from '@angular/common';
import { Component,OnInit } from '@angular/core';
import { StationsService } from '../../service/stations.service';
import { iStation ,ResponceModel} from '../../models/stations';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,HttpClientModule,FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  stationList: iStation[]=[];
  travelObj: any = {
    fromStationId:'',
    toStationId:'',
    dateOfTravel:''
  } 


  constructor(private stationSrv: StationsService,private router:Router){

  }

  ngOnInit(): void {
    this.loadStations();
  }

  loadStations(){
    this.stationSrv.getAllStation().subscribe((res:ResponceModel)=>{
      this.stationList = res.data
    }, error=>{
      alert("error Occured" + JSON.stringify(error))
    })
  }
  onSearch() {
    
    console.log(this.travelObj)
    this.router.navigate(['/search',this.travelObj.fromStationId,this.travelObj.toStationId,this.travelObj.dateOfTravel])
  }

}
