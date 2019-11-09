import Animal from "./Animal.js";

export default class Tiger extends Animal{
 run() {
  console.log("run good..");
 }
 setHeight(hight) {
  this.mHight = hight;
 }
 getHeight() {
  console.log(this.mHight);
 }
}