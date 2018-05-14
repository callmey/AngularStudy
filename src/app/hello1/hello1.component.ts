import { Component } from '@angular/core';

@Component({
    selector: 'app-hello1',
    template: '<div>{{ message }}</div>',
    styles : [ 'div { padding: 10px; margin: 10px; border: 1px solid gray; }' ]
  })
  export class Hello1Component {
    message = '안녕하세요';  
  }
  