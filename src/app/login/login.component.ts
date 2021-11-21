import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../shared/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  readonly baseURL = 'http://localhost:3000/getuser';
  constructor(public http:HttpClient) { }

  ngOnInit(): void {
  }
  logindata(user:String)
  {
    return this.http.get(`${this.baseURL}/${user}`);
  }
  login()
  {
    let email= (document.getElementById("exampleInputEmail1") as HTMLSelectElement).value 
    let password= (document.getElementById("exampleInputPassword1") as HTMLSelectElement).value 
   
    if(email=='safar@gmail.com' && password=='12345678')
    {

    }
  }

}
