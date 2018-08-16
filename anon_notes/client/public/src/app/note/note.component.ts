import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'NoteComponent',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
  @Input() currentNote:any;

  constructor() { }

  ngOnInit() {
  }

}
