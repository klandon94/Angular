import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '../../node_modules/@angular/core';

import { WeatherService } from './weather.service';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { WashingtonComponent } from './washington/washington.component';
import { SeattleComponent } from './seattle/seattle.component';
import { SanjoseComponent } from './sanjose/sanjose.component';
import { DallasComponent } from './dallas/dallas.component';
import { ChicagoComponent } from './chicago/chicago.component';
import { BurbankComponent } from './burbank/burbank.component';
import { LocationComponent } from './location/location.component';

@NgModule({
  declarations: [AppComponent, WashingtonComponent, SeattleComponent, SanjoseComponent, DallasComponent, ChicagoComponent, BurbankComponent, LocationComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
