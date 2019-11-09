import Human from "./Human.js";

export default class Student extends Human {
 read() {
  console.log("I love reading");
 }
 setRoom(room) {
  this.mRoom = room;
 }
 getRoom() {
  console.log(this.mRoom);
 }
}