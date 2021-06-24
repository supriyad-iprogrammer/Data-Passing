import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements=[{type:'server', name:'test', content:'just a test'}];
  newservername='';
  newserverContent='';

  onserver(serverData:{name:string,content:string}){
    this.serverElements.push({
      type:'server',
      name:serverData.name,
      content:serverData.content
    })
  }
  onBlueprintadded(blueprint:{name:string,content:string}){
this.serverElements.push({
  type:'blueprint',
  name:blueprint.name,
  content:blueprint.content
})
  }

}
