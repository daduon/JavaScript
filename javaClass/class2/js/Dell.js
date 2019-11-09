import Computer from "./Computer.js";

export class Dell extends Computer{
 steColor(color) {
  this.mColor = color;
 }
 getColor() {
  console.log(this.mColor);
 }
}