import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';
import { ServerService } from './server.service';
import { Hello1Component } from './hello1/hello1.component';
import { Hello2Component } from './hello2/hello2.component';
import { Hello3Component } from './hello3/hello3.component';
import { Hello4Component } from './hello4/hello4.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentList1Component } from './student-list1/student-list1.component';
import { HelloComponent } from './hello/hello.component';
import { StudentComponent } from './student/student.component';

@NgModule({
  declarations: [
    AppComponent,
    Hello1Component, Hello2Component, Hello3Component, Hello4Component, StudentListComponent, StudentList1Component, HelloComponent, StudentComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    HttpModule

  ],
  providers: [ServerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
