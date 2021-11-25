import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../shared/user.model';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public users: Array<any>= [];
  public userdata: Array<any>= [];
  //readonly baseURL = 'http://localhost:3000/getuser';
  readonly baseURL = 'http://localhost:3000/api/login';
  postId:any;
  getId:any;
  constructor(
    public http:HttpClient, 
    public router:Router,
    public session:SessionService
  ) { }

  ngOnInit(): void {
    let stat=this.session.get()
    if(stat==null){

    }
    else{
      alert('You Are Already Logged In.');
      this.router.navigate(['/profile']);
    }

  }
  // logindata()
  // {
  //   return this.http.get(this.baseURL);
  // }
  // login()
  // {
  //   let email= (document.getElementById("exampleInputEmail1") as HTMLSelectElement).value 
  //   let password= (document.getElementById("exampleInputPassword1") as HTMLSelectElement).value 
  //   this.logindata().subscribe((res:any)=>{
  //     this.users = res as User[];
  //     for (var index1 in res) {
  //       //console.log(res[index1]);
  //       this.userdata.push(res[index1]);
  //     }  
  //   });
  //   let ind=0;
  //   let v=  this.userdata[ind];
  //   console.log(v);
   
   
  //   // if(email=='safar@gmail.com' && password=='12345678')
  //   // {
  //   //   this.router.navigate(['/home']);
  //   // }
  // }
  // // loginuser(event: any){
  // //   event.preventDefault();
  // //   const target=event.target;
  // //   let email= target.querySelector('#exampleInputEmail1').value 
  // //   let password= target.querySelector('#exampleInputPassword1').value 
  // //   console.log(email,password);
  // //   //console.log(event);
  // // }
  signup(us:User)
  {
    return this.http.post(this.baseURL,us);
    
  }
  loginuser()
  {
    
    let email= (document.getElementById("exampleInputEmail1") as HTMLSelectElement).value
    let password= (document.getElementById("exampleInputPassword1") as HTMLSelectElement).value
    let user=({
     
      email:email,
      password:password,
   });
   this.signup(user).subscribe((res) => {
        console.log(user);
        this.postId=res;
        this.getId=user;
        let s=this.postId['email'];
        let si=this.getId['email'];
        let p=this.postId['password'];
        let pi=this.getId['password'];
        if(s==si && p==pi)
        {
          console.log("Success");
          this.session.save(s);
          alert("Login Successful");
          this.router.navigate(['/home']);
        }
        else{
          alert("wrong username or password");
        }

     });
  }

}
