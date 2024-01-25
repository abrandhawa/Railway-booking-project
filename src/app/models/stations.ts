export interface iStation {
    stationID: number;
    stationName: string;
    stationCode: string;
}
export interface ResponceModel{

    message: string;
    result: boolean;
    data:any;
}

export interface iSearchTrain {
    trainId:number;
    trainNo:number;
    trainName:string;
    departureStationName:string;
    arrivalStationName:string;
    arrivalTime:string;
    departureTime:string;
    totalSeats:number;
    departureDate:string;
    bookedSeats:number;
}

export class iPassenger {
    passengerID: number
    firstName: string
    lastName: string
    email: string
    phone: string
    password: string


    constructor(){
        this.passengerID=0;
        this.firstName='';
        this.lastName='';
        this.email='';
        this.phone='';
        this.password='';
    }
  }
  export class Booking  {
    bookingId: number;
    trainId: number;
    passengerId: number;
    travelDate: string;
    bookingDate: Date;
    totalSeats: number;
    TrainAppBookingPassengers: TrainAppBookingPassengers[];
    constructor() {
        this.TrainAppBookingPassengers = [];
        this.bookingDate= new Date();
        this.bookingId= 0;
        this.passengerId= 0;
        this.totalSeats =0;
        this.trainId= 0;
        this.travelDate = ''; 
    } 
  }

  export class TrainAppBookingPassengers {
    bookingPassengerId: number;
    bookingId: number;
    passengerName: string;
    seatNo: number;
    age: number;
    constructor() { 
        this.bookingPassengerId= 0;
        this.bookingId= 0;
        this.passengerName= '';
        this.seatNo =0;
        this.age= 0;  
    }
  }
  