export default class Animal{
 setName(name) {
  this.mName = name;
 }
 getName() {
  console.log(this.mName);
 }
 walk() {
  console.log("walk");
 }
 run() {
  console.log("run");
 }
}

