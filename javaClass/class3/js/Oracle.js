import Database from "./Database.js";

export default class Oracle extends Database{
 setPrice(price) {
  this.mPrice = price;
 }
 getPrice() {
  console.log(this.mPrice);
 }
}