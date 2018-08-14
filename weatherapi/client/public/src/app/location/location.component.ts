import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { ActivatedRoute } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  location:any;
  weather:any;

  constructor(private weatherService:WeatherService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params=>{
      console.log(params.location);
      this.location = params.location;
      this.weatherService.getWeatherInfo(this.location).subscribe(data=>{
        this.weather = data;
      })
    })
  }

}
