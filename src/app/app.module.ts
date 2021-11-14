import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BookingComponent } from './booking/booking.component';
import { LadakhComponent } from './ladakh/ladakh.component';
import { AndamanComponent } from './andaman/andaman.component';
import { KeralaComponent } from './kerala/kerala.component';
import { JaipurComponent } from './jaipur/jaipur.component';
import { FlightsComponent } from './flights/flights.component';
import { DestinationComponent } from './destination/destination.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BookingComponent,
    LadakhComponent,
    AndamanComponent,
    KeralaComponent,
    JaipurComponent,
    FlightsComponent,
    DestinationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
