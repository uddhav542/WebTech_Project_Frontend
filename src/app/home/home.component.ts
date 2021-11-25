import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    public session:SessionService,
    public router:Router
    ) { }
  ngOnInit(): void {
   let s=this.session.get();
   if(s==null)
   {
    this.router.navigate(['/login']);
   }
  // console.log(s);
  }
 

}
