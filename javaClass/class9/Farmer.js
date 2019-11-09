import People from "./People.js";

export default class Farmer extends People{
 setField(field) {
  this.mField = field;
 }
 getField() {
  console.log(this.mField);
 }
 cut() {
  console.log("cut the people........ ");
 }
}