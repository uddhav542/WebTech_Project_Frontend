import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LadakhComponent } from './ladakh/ladakh.component';
import { AndamanComponent } from './andaman/andaman.component';
import { KeralaComponent } from './kerala/kerala.component';
import { JaipurComponent } from './jaipur/jaipur.component';
import { FlightsComponent } from './flights/flights.component';
import { DestinationComponent } from './destination/destination.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { LoginComponent } from './login/login.component';
import { LadakhDestComponent } from './ladakh-dest/ladakh-dest.component';
import { BookingComponent } from './booking/booking.component';
import { AndamanDestComponent } from './andaman-dest/andaman-dest.component';
import { JaipurDestComponent } from './jaipur-dest/jaipur-dest.component';
import { SignupComponent } from './signup/signup.component';
import { MybookingComponent } from './mybooking/mybooking.component';
import { ProfileComponent } from './profile/profile.component';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
  {
    path:'home',component:HomeComponent
  },
  {
    path:'bookingpage',component:BookingComponent
  },
  {
    path:'ladakh',component:LadakhComponent
  },
  {
    path:'andaman',component:AndamanComponent
  },
  {
    path:'kerala',component:KeralaComponent
  },
  {
    path:'jaipur',component:JaipurComponent
  },
  {
    path:'flights',component:FlightsComponent
  },
  {
    path:'home/destination',component:DestinationComponent
  },
  {
    path:'aboutus',component:AboutusComponent
  },
  {
    path:'contactus',component:ContactusComponent
  },
  {
    path:'login',component:LoginComponent
  },
  {
    path:'ladakh-dest',component:LadakhDestComponent
  },
  {
    path:'andaman-dest',component:AndamanDestComponent
  },
  {
    path:'jaipur-dest',component:JaipurDestComponent
  },
  {
    path:'signup',component:SignupComponent
  },
  {
    path:'mybookings',component:MybookingComponent
  },
  {
    path:'profile',component:ProfileComponent
  },
  {
    path:'logout',component:LogoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  
})
export class AppRoutingModule { }
