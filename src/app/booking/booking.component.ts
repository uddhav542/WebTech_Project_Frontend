import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ArrayType } from '@angular/compiler';
let flights:any;

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})

// {id: number, Departure: string , Arrival: string,Price: string,Duration: string, Airline:string,DepartureTime:string}
export class BookingComponent implements OnInit {

  //readonly baseURL = 'http://localhost:3000/';
 
  public flights: Array<any>= [];
  showMe:boolean=false;
  constructor(public http: HttpClient) {

   }

  ngOnInit(): void {
   
  }
  getData()
  {
     let source= (document.getElementById("input-box") as HTMLSelectElement).value
     let destination= (document.getElementById("input-box1") as HTMLSelectElement).value

      this.http.get(`http://localhost:3000/flights/${source}/${destination}`).subscribe((data:any)=>{
        //console.log(data);
        
          
        for (var index1 in data) {
          console.log(data[index1]);
          this.flights.push(data[index1]);
        }  
        
        
      //flights.push(data);
      //console.log(flights);
   });
   //console.log(flights);
   this.showMe=!this.showMe
  }

  bookFlight()
  {
    //this.http.post('http://localhost:3000/insert');
    
  }
  
}
