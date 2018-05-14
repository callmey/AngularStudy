import { Component, OnInit } from '@angular/core';
import { Student } from '../Student';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  selectedStudent: Student;

  students: Student[] = [
    new Student(1, '201132051', '홍길동', 'hgd@skhu.ac.kr'),
    new Student(2, '201132052', '임꺽정', 'lkj@skhu.ac.kr'),
    new Student(3, '201132053', '전우치', 'jwc@skhu.ac.kr'),
  ];

  constructor() { }

  ngOnInit() {
  }

  createStudent() {
    let index = this.students.length - 1;
    let id = this.students[index].id + 1;
    let student = new Student(id, "", "", "");
    this.selectedStudent = student;
    this.students.push(student);
  }  

  close() {
    this.selectedStudent = null;
  }  

  deleteStudent() {
    if (confirm("삭제하시겠습니까?")) {
      for (let i = 0; i < this.students.length; ++i)
        if (this.students[i] == this.selectedStudent) {
          this.students.splice(i, 1);
          break;
        }
      this.selectedStudent = null;
    }
  }
}
