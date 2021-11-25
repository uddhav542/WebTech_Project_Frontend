import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {bookings} from '../shared/flight.model';
import { EmailValidator, NgForm } from '@angular/forms';
import { SessionService } from '../session.service';
import { Router } from '@angular/router';

let flights:any;
declare var M: any;

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})

// {id: number, Departure: string , Arrival: string,Price: string,Duration: string, Airline:string,DepartureTime:string}
export class BookingComponent implements OnInit {

  readonly baseURL = 'http://localhost:3000/insert';
 
  public flights: Array<any>= [];

  selectedFl!: bookings;

  showMe:boolean=false;
  constructor(
    public http: HttpClient,
    public session:SessionService,
    public router:Router
    ) {

   }

  ngOnInit(): void {
    // let email=this.session.get();
    // console.log(email);
   
  }
  getData()
  {
     let source= (document.getElementById("input-box") as HTMLSelectElement).value
     let destination= (document.getElementById("input-box1") as HTMLSelectElement).value

      this.http.get(`http://localhost:3000/flights/${source}/${destination}`).subscribe((data:any)=>{
        console.log(data);
        
          
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

  bookFlight(fl:bookings)
  {
    return this.http.post(this.baseURL,fl);
    
    
  }
  booking()
  {
    let email=this.session.get();
    if(email==null)
    {
      alert('Please Login to your Account');
      this.router.navigate(['/login']);
    }
    else{
      console.log(email);
    let source= (document.getElementById("Departure") as HTMLSelectElement).value
    let dest= (document.getElementById("Arrival") as HTMLSelectElement).value
    let price= (document.getElementById("Price") as HTMLSelectElement).value
    let duration= (document.getElementById("Duration") as HTMLSelectElement).value
    let airline= (document.getElementById("AirLine") as HTMLSelectElement).value
    let dtime= (document.getElementById("DepartureTime") as HTMLSelectElement).value
    let atime= (document.getElementById("ArrivalTime") as HTMLSelectElement).value

    let book=({
      Email:email,
      Departure:source,
      Arrival:dest,
      Price:price,
      Duration:duration,
      AirLine:airline,
      DepartureTime:dtime,
      ArrivalTime:atime

  });
    this.bookFlight(book).subscribe((res) => {
          alert("Your Flight is booked Successfully.");
          this.router.navigate(['/mybookings']);
          // this.session.removeUser();
    //   ///this.resetForm(form);
    //   //this.refreshEmployeeList();
    //  // M.toast({ html: 'Flight Booked successfully', classes: 'rounded' });
     });
      
    }
    

  }
  
}
