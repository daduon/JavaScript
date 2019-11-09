import Human from './Human.js';
import Student from './Student.js';
import Employee from './Employee.js';

const human = new Human();
human.setName("Bopha");
human.getName();
human.setAge("20");
human.getAge();

const student = new Student();
student.read();
student.setRoom("B12");
student.getRoom();

const employee = new Employee();
employee.setName("Romdul");
employee.getName();
employee.setAge("25");
employee.getAge();
employee.setPosition("Designer");
employee.getPosition();
employee.work();
