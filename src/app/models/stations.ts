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