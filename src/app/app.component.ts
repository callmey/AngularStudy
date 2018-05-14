import { Component } from '@angular/core';
import { Student } from './Student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  list = ['안녕하세요', 'hello'];
  selectedStudent: Student;

  students: Student[] = [
    new Student(1, '201132051', '홍길동', 'hgd@skhu.ac.kr'),
    new Student(2, '201132052', '임꺽정', 'lkj@skhu.ac.kr'),
    new Student(3, '201132053', '전우치', 'jwc@skhu.ac.kr'),
  ];

  selectStudent(student: Student) {
    this.selectedStudent = student;
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

}
