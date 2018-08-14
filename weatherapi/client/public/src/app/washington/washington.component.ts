import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-washington',
  templateUrl: './washington.component.html',
  styleUrls: ['./washington.component.css']
})
export class WashingtonComponent implements OnInit {

  weather: any;

  constructor(private weatherService:WeatherService) { }

  ngOnInit() {
    this.weatherService.getWeatherInfo("Washington").subscribe(data=>{
      this.weather = data;
    })
  }

}
