
import { Component, OnInit } from '@angular/core';
import { SessionService } from './session.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit  {
  title = 'SafarAngular';
  
 
  constructor(public http:HttpClient,
    public session:SessionService,
    public router:Router
    ) { 
      status+=`${this.session.get()?'logout':'login'}`;
      
      // let se=this.session.get();
      // if(se==null)
      // {
      //   // status+="login";
      // }
      // else{
      //   status='logout';
      // }
    }
    ngOnInit(): void {
      
    }

  
  

}

