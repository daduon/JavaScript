import Database from "./Database.js";

export default class Mysql extends Database {
 setName(name) {
  this.mName = name;
 }
 getName() {
  console.log(this.mName);
 }
}