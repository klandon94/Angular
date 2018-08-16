import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient){}

  showAll(){
    // our http response is an Observable, store it in a variable
    // let tempObservable = this._http.get('/tasks');
    // subscribe to the Observable and provide the code we would like to do with our data from the response
    // tempObservable.subscribe(data => console.log("Got our tasks!", data));
    return this._http.get('/api/tasks')
  }

  find(id){
    // let tempObservable = this._http.get("/tasks/" + id);
    // tempObservable.subscribe(data => console.log("Got task " + id, data));
    // this._http.get('/tasks/' + id).subscribe(data => cb(data));
    return this._http.get("/api/tasks/"+id);
  }

  create(newtask){
    return this._http.post("/api/tasks", newtask);
  }

  edit(id, edittask){
    return this._http.put("/api/tasks/"+id, edittask);
  }

  delete(id){
    return this._http.delete("/api/tasks/"+id);
  }

  // getPokemon(id,cb){
  //   this._http.get('https://pokeapi.co/api/v2/pokemon/' + id).subscribe(data=>cb(data));
  // }

}