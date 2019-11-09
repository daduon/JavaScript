export default class Computer{
 setBrand(brand) {
  this.mBrand = brand;
 }
 getBrand() {
  console.log(this.mBrand);
 }
 setName(name) {
  this.mName = name;
 }
 getName() {
  console.log(this.mName);
 }
 display() {
  console.log("display.....");
 }
}