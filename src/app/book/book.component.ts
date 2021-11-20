import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  readonly baseURL = 'http://localhost:5000/flights';
  constructor(public http: HttpClient) { }

  ngOnInit(): void {
    
  }
  getData()
  {
    
    return this.http.get(this.baseURL);

  }
  
}
