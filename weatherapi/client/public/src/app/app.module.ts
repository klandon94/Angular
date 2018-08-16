import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '../../node_modules/@angular/core';

import { WeatherService } from './weather.service';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { WashingtonComponent } from './washington/washington.component';
import { LocationComponent } from './location/location.component';

@NgModule({
  declarations: [AppComponent, WashingtonComponent, LocationComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
