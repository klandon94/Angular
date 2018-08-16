import { Component, OnInit, Output } from '@angular/core';
import { NoteService } from '../note.service';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'NewNoteComponent',
  templateUrl: './new-note.component.html',
  styleUrls: ['./new-note.component.css']
})
export class NewNoteComponent implements OnInit {

  private newNote: any;
  private errors = [];
  @Output() noteEmitter = new EventEmitter();

  constructor(private ns: NoteService) { }

  ngOnInit() {
    this.newNote = {content:""};
  }

  create(){
    this.ns.create(this.newNote).subscribe(data=>{
      if (data['errors']){
        this.errors = [];
        for (let i in data['errors']) this.errors.push(data['errors'][i].message);
        return;
      }
      else{
        this.errors=[];
        this.noteEmitter.emit(data);
        this.newNote = {content:""};
      }
    })
  }

}
