import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { iPassenger } from './models/stations';
import { FormsModule } from '@angular/forms';
import { TrainService } from './service/train.service';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,HttpClientModule,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'railway-booking-proj';

  registerObj: iPassenger = new iPassenger();

  loggedUserData:any;

  constructor(private trainSrv:TrainService){
const localData = localStorage.getItem('trainUser');
if(localData != null){
  this.loggedUserData = JSON.parse(localData);
}
  }


  openSignup(){
    const model = document.getElementById('myModal');
    if(model != null){
      model.style.display='block';
    }
  }

  closeSignup(){
    const model = document.getElementById('myModal');
    if(model != null){
      model.style.display='none';
    }
  }


  openLogin(){
    const model = document.getElementById('loginModal');
    if(model != null){
      model.style.display='block';
    }
  }

  closeLogin(){
    const model = document.getElementById('loginModal');
    if(model != null){
      model.style.display='none';
    }
  }

  onSignup(){
this.trainSrv.createPassenger(this.registerObj).subscribe((res:any)=>{
  if(res.result){
    alert("Registration Completed");
    localStorage.setItem('trainUser', JSON.stringify(res.data));
    this.loggedUserData =res.data;
    this.closeSignup();
  } else{
    alert(res.message)
  }
})
  }


  logOut(){
    localStorage.removeItem('trainUser');
    this.loggedUserData =undefined;
  }

  onLogin(){
    this.trainSrv.Login(this.registerObj).subscribe((res:any)=>{
      if(res.result){
        alert("Login Completed");
        localStorage.setItem('trainUser', JSON.stringify(res.data));
        this.loggedUserData =res.data;
        this.closeLogin();
      } else{
        alert(res.message)
      }
    })
  }
}
