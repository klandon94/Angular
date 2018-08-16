import { Component, OnInit } from '@angular/core';
import { NoteService } from '../note.service';

@Component({
  selector: 'NotesComponent',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  private notes:any;

  constructor(private ns: NoteService) { }

  ngOnInit() {
    this.getNotesFromService();
  }

  getNotesFromService(){
    this.ns.findAll().subscribe(data=>{
      this.notes = data;
    })
  }

  addNote(note){
    let length = this.notes.length;
    for (let i = length; i > 0; i--){
      this.notes[i] = this.notes[i-1];
    }
    this.notes[0] = note;
  }

}
