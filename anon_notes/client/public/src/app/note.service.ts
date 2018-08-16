import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private http: HttpClient) { }

  findAll(){
    return this.http.get("/api/notes");
  }
  
  create(note){
    return this.http.post("/api/notes", note);
  }

}
