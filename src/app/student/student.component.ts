import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Student } from '../Student';
import { Department } from '../Department';
import { ServerService } from '../server.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  private serverService: ServerService;
  private route: ActivatedRoute;  
  private student: Student;
  private departments: Department[];
  
  constructor(serverService: ServerService, route: ActivatedRoute ) { 
    this.serverService = serverService;
    this.route = route;
  }

  ngOnInit() {
    this.serverService
      .getDepartments()
      .then(departments => 
        this.departments = departments);
    let id = this.route.snapshot.params['id'];
    this.serverService
      .getStudent(id)
      .then(student => 
        this.student = student);
  }
}
