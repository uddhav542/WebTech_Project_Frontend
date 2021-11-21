import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { bookings } from '../shared/flight.model';

@Component({
  selector: 'app-mybooking',
  templateUrl: './mybooking.component.html',
  styleUrls: ['./mybooking.component.css']
})

export class MybookingComponent implements OnInit {

  public books: Array<any>= [];
  public bookedflights: Array<any>= [];
  //books!: bookings;
  constructor(public http:HttpClient) { }

  getbookings()
  {
    return this.http.get(`http://localhost:3000/getbookings`);
  }
  ngOnInit(): void {
    this.getbookings().subscribe((res:any) => {
      this.books = res as bookings[];
      //console.log(res);

      for (var index1 in res) {
        //console.log(res[index1]);
        this.bookedflights.push(res[index1]);
      }  
    });
   console.log(this.bookedflights);
  }
 
   
}
  
