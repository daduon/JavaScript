import Computer from "./Computer.js";

export class Mac extends Computer {
 setPrice(price) {
  this.mPrice = price;
 }
 getPrice() {
  console.log(this.mPrice);
 }
}