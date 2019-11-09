export default class People {
 walk() {
  console.log("walk a lot..");
 }
 eat() {
  console.log("eat every day..");
 }
 setName(name) {
  this.mName = name;
 }
 getName() {
  console.log(this.mName);
 }
}