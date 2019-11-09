import Programming from "./Programming.js";
export default class Node extends Programming{
 setVersion(version) {
  this.mVersion = version;
 }
 getVersion() {
  console.log(this.mVersion);
 }
}