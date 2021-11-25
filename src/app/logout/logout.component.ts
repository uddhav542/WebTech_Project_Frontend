import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(public session:SessionService,
    public router:Router) { }

  ngOnInit(): void {
    this.session.removeUser();
    alert('Logged out successfully. ');
    this.router.navigate(['/login']);
  }

}
