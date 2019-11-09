import Database from "./Database.js";

export default class Splserver extends Database{
 setCompany (company){
  this.mCompany = company;
 }
 getCompany() {
  console.log(this.mCompany);
 }
}