import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hello3',
  templateUrl: './hello3.component.html',
  styleUrls : [ './hello3.component.css' ]
  inputs: ['title', 'messages']
})
export class Hello3Component {
  title: string;  
  messages: string[];
}
