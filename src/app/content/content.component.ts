import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
// newservername='';
newserverContent='';
 @Output() serverCreated =new EventEmitter<{name:string,content:string}>();
 @Output()  blueprintcreated=new EventEmitter<{name:string,content:string}>();

  constructor() { }

  ngOnInit(): void {
  }
  onaddBlueprint(name: HTMLInputElement){
    this.blueprintcreated.emit({name:name.value, content:this.newserverContent})

  }
  onaddserver(name: HTMLInputElement){
    this.serverCreated.emit({name:name.value, content:this.newserverContent})

  }
}
