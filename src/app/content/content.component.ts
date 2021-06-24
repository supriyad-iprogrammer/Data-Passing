import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
newservername='';
newserverContent='';
 @Output() serverCreated =new EventEmitter<{name:string,content:string}>();
 @Output()  blueprintcreated=new EventEmitter<{name:string,content:string}>();

  constructor() { }

  ngOnInit(): void {
  }
  onaddBlueprint(){
    this.blueprintcreated.emit({name:this.newservername, content:this.newserverContent})

  }
  onaddserver(){
    this.serverCreated.emit({name:this.newservername, content:this.newserverContent})

  }
}
