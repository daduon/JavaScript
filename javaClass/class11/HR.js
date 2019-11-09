import Person from "./Person.js";

export default class HR extends Person{
 setTitile(title) {
  this.mTitle = title;
 }
 getTitle() {
  console.log(this.mTitle);
 }
 setCalculate(calculate) {
  this.mCalculate = calculate;
 
 }
 getCalculate() {
  console.log(this.mCalculate);
  console.log("_ _ _ _ _ _ _ _ _ _");
 }
}