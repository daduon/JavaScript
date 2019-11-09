import Animal from "./Animal.js";

export default class Monkey extends Animal{
 jump() {
  console.log("jump  a lot...");
 }
 setWeight(weight) {
  this.mWeight = weight;
 }
 getWeight() {
  console.log(this.mWeight);
 }
}