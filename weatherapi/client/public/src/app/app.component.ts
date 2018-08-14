import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(){}
  
  ngOnInit(){
    
  }

  // changeLoc(loc){
  //   this.location = loc;
  // }

  // getLoc(){
  //   return this.location;
  // }

}

