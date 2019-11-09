import Person from "./Person.js";

export default class Seller extends Person{
 setMarket(market) {
  this.mMarket = market;
  
 }
 getMarket() {
  console.log(this.mMarket);
  
 }
 setProduct(product) {
  this.mProduct = product;
 }
 getProduct() {
  console.log(this.mProduct);
 }
}