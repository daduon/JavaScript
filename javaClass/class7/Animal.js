export default class Animal{
 walk() {
  console.log("walk a lot....");
 }
 eat() {
  console.log("eat every day");
 }
 setColor(color) {
  this.mColor = color;
 }
 getColor() {
  console.log(this.mColor);
 }
}