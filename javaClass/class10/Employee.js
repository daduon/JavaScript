import Human from "./Human.js";

export default class Employee extends Human{
 setPosition(position) {
  this.mPosition = position;
 }
 getPosition() {
  console.log(this.mPosition);
 }
 work() {
  console.log("I love my work");
 }
}