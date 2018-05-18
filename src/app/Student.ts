import { Department } from './Department';


export class Student {
    id: number;
    studentNo: string;
    name: string;
    email: string;
    department: Department;

    public constructor(id: number, studentNo: string, name: string, email: string) {
        this.id = id;
        this.studentNo = studentNo;
        this.name = name;
        this.email = email;
    }
}
