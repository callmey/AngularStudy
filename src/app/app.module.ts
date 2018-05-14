import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { Hello1Component } from './hello1/hello1.component';
import { Hello2Component } from './hello2/hello2.component';
import { Hello3Component } from './hello3/hello3.component';
import { Hello4Component } from './hello4/hello4.component';
import { StudentListComponent } from './student-list/student-list.component';

@NgModule({
  declarations: [
    AppComponent,
    Hello1Component, Hello2Component, Hello3Component, Hello4Component, StudentListComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    HttpModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
