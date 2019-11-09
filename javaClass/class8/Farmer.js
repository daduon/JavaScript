import People from "./People.js";

export default class Farmer extends People{
 field() {
  console.log("field a lot..");
 }
 cut() {
  console.log("cut every day with the people");
 }
}