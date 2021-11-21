import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

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
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { LoginComponent } from './login/login.component';
import { LadakhDestComponent } from './ladakh-dest/ladakh-dest.component';
import { BookComponent } from './book/book.component';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { AndamanDestComponent } from './andaman-dest/andaman-dest.component';
import { JaipurDestComponent } from './jaipur-dest/jaipur-dest.component';
import { SignupComponent } from './signup/signup.component';
import { MybookingComponent } from './mybooking/mybooking.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LadakhComponent,
    AndamanComponent,
    KeralaComponent,
    JaipurComponent,
    FlightsComponent,
    DestinationComponent,
    AboutusComponent,
    ContactusComponent,
    LoginComponent,
    LadakhDestComponent,
    BookComponent,
    BookingComponent,
    AndamanDestComponent,
    JaipurDestComponent,
    SignupComponent,
    MybookingComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
