import Person from './Person.js';
import Teacher from './Teacher.js';
import HR from './HR.js';

const person = new Person();
person.setName("Vannak");
person.getName();
person.eat();

const teacher = new Teacher();
teacher.setTeacher("I love teaching");
teacher.getTeacher();

const hr = new HR();
hr.setName("Suzuki");
hr.getName();
hr.eat();
hr.setTitile("HR Magager");
hr.getTitle();
hr.setCalculate("payment every month");
hr.getCalculate();