import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  key = "7284e4130c7b3c7634b147fe1add192c";

  constructor(private http: HttpClient) { }

  getWeatherInfo(location){
    return this.http.get("https://api.openweathermap.org/data/2.5/weather?q=" + location + "&&appid=" + this.key);
  }

}
