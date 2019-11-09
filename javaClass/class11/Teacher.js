import Person from "./Person.js";

export default class Teacher extends Person{
 setTeacher(teacher) {
  this.mTeacher = teacher;
 }
 getTeacher() {
  console.log(this.mTeacher);
 }
 setSubject(subject) {
  this.mSubject = subject;
 }
 getSubject() {
  console.log(this.mSubject);
 }
}