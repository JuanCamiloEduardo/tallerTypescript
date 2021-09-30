import { Course } from './course.js';

class Student extends Person {
    age: number;
    address: string;
    phone:string;
    constructor(completeName: string,code: number, cardId: number, age:number,address:string,phone:string) {
      super(completeName,code,cardId);
      this.age = age;
      this.address = address;
      this.phone = phone;
    }
  }