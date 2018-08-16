import { Component, OnInit } from '@angular/core';

import { HttpService } from "./http.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'MEAN';
  tasks = [];
  errors = [];

  // selectedTask: any;
  // single = false;
  // onetask;

  onedit : any;
  identifier: any;
  newTask: any;
  editTask: any;

  constructor(private _httpService: HttpService) {}
  
  ngOnInit(){
    this.getTasksFromService();
    this.onedit = false;
    this.newTask = {title:"", desc:""}
    this.editTask = {title: "", desc:"", completed:""}
  }

  // getSingle(id){
  //   let observable = this._httpService.find(id);
  //   observable.subscribe(data=>{
  //     console.log(data);
  //     this.onetask = data;
  //     this.single = true;
  //   })
  // }
  // onKey(event:any){
  //   let x = this.tasks.find(element => {
  //     return element.num == event.target.value;
  //   })
  //   this.getSingle(x.task._id);
  // }

  getTasksFromService(): void{
    let observable = this._httpService.showAll();
    observable.subscribe(data => {
      // for (let i = 0; i < data['tasks'].length; i++){
      //   this.tasks[i] = {num:i+1, task:data['tasks'][i]};
      // }
      this.tasks = data['tasks'];
      console.log(this.tasks);
    })
  }

  // getTask(task){
  //   this.selectedTask = task;
  // }

  createTask():void{
    let observable = this._httpService.create(this.newTask);
    observable.subscribe(data=>{
      if (data['errors']) {
        console.log(data['errors']['title'].message);
        this.errors.push(data['errors']['title'].message);
        return;
      }
      console.log("successfully created a task");
      this.newTask = {title:"", desc:""};
      this.getTasksFromService();
    })
  }

  showEdit(id){
    this._httpService.find(id).subscribe(data=>{
      console.log(data);
      this.identifier = data['_id'];
      this.onedit = true;
      this.editTask = {title:data['title'], desc:data['desc'], completed:data['completed']};
    })
  }

  edit(id){
    this._httpService.edit(id, this.editTask).subscribe(data=>{
      console.log("successfully edited task");
      this.onedit = false;
      this.editTask = {title:"", desc:"", completed:""}
      this.getTasksFromService();
    })
  }

  delete(id){
    this._httpService.delete(id).subscribe(data=>{
      console.log("successfully deleted task");
      this.getTasksFromService();
    })
  }

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
