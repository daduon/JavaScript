export default class People {
 walk() {
  console.log("walking with my friend");
 }
 eat() {
  console.log("eat rice every day for body");
 }
 setName(name) {
  this.mName = name;
 }
 getName() {
  console.log(this.mName);
 }
}