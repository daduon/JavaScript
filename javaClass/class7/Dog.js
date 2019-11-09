import Animal from "./Animal.js";

export default class Dog extends Animal {
 bite() {
  console.log("bite the people...");
 }
 setName(name) {
  this.mName = name;
 }
 getName() {
  console.log(this.mName);
 }
}