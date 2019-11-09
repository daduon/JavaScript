import People from "./People.js";

export default class Doctor extends People {
 setTitle(title) {
  this.mTitle = title;
 }
 getTitle() {
  console.log(this.mTitle);
 }
 inject() {
  console.log("inject the water..");
 }
}