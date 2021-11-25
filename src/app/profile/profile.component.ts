import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session.service';
import { Router } from '@angular/router';
import { User } from '../shared/user.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public books: Array<any>= [];
  public bookedflights: Array<any>= [];
  constructor(public session:SessionService,
    public router:Router,
    public http:HttpClient) { }
    getuser(user:any)
  {
    return this.http.get(`http://localhost:3000/getuser/${user}`);
  }
  ngOnInit(): void {
    let success=this.session.get();
    if(success==null)
    {
      this.router.navigate(['/login']);
    }
    else
    {
      this.getuser(success).subscribe((res:any) => {
        this.books = res as User[];
        
        //console.log(res);
  
        for (var index1 in res) {
          //console.log(res[index1]);
          this.bookedflights.push(res[index1]);
        }  
      });
    }
    console.log(this.bookedflights);
  }

}
