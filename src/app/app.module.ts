import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { Hello1Component } from './hello1/hello1.component';
import { Hello2Component } from './hello2/hello2.component';
import { Hello3Component } from './hello3/hello3.component';
import { Hello4 } from './hello4.component/hello4.component.component';
import { Hello4Component } from './hello4/hello4.component';

@NgModule({
  declarations: [
    AppComponent,
    Hello1Component, Hello2Component, Hello3Component, Hello4.ComponentComponent, Hello4Component
  ],

  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
