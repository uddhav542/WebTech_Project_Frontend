import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BookingComponent } from './booking/booking.component';
import { LadakhComponent } from './ladakh/ladakh.component';
import { AndamanComponent } from './andaman/andaman.component';
import { KeralaComponent } from './kerala/kerala.component';
import { JaipurComponent } from './jaipur/jaipur.component';
import { FlightsComponent } from './flights/flights.component';

const routes: Routes = [
  {
    path:'home',component:HomeComponent
  },
  {
    path:'booking',component:BookingComponent
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
