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
  private student: Student;
  private departments: Department[];
  
  constructor(private serverService: ServerService, private route: ActivatedRoute) { 
  }

  ngOnInit() {
    this.serverService.getDepartments()
      .then(departments => this.departments = departments);
    let id = this.route.snapshot.params['id'];
    if (id == 0) {
      this.student = new Student(0, "", "","");
      this.student.id = 0;
      this.student.department = new Department();
    } else {
      this.serverService.getStudent(id)
        .then(student => this.student = student);
    }
  }

  save() {
    this.serverService
      .saveStudent(this.student)
      .then(message => alert(message));
  }
}

