import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Hello World';

  color:string ="blue";

  callfun()
  {
    alert("How you Doing");
  }
}
