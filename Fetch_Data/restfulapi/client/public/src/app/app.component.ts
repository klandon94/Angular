import { Component, OnInit } from '@angular/core';

import { HttpService } from "./http.service";

// import { Router } from "@angular/router";
// import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'MEAN';
  num: number;
  first_name: string;
  tasks = [];
  constructor(private _httpService: HttpService) {}
  
  ngOnInit(){
    this.getTasksFromService();
    this.num = 7;
    this.first_name = "Alpha";
  }

  getTasksFromService(){
    let observable = this._httpService.getTasks();
    observable.subscribe(data => {
      console.log("Got our tasks", data);
      this.tasks = data['tasks'];
      console.log(this.tasks);
    })
  }

      // this._httpService.getTask("5b6c85452858af817cacbaba", data => {
      //   console.log(data);
      // });

      // this._httpService.getPokemon(1, data=>{
      //   console.log(data)
      //   let abilities = "";
      //   for (let x of data.abilities){
      //     abilities += x.ability.name + ", ";
      //   }
      //   console.log(data.name + "'s abilities are: " + abilities);
        
      //   let similarPokemons = [];
      //   for (let i = 2; i < 100; i++){
      //     this._httpService.getPokemon(i, data=>{
      //       for (let x of data.abilities){
      //         if (x.ability.name == overgrow) similarPokemons.push(data.name);
      //       }
      //     })
      //   }
      //   console.log(similarPokemons.length + "pokemon have the overgrow ability");
      // })
}
