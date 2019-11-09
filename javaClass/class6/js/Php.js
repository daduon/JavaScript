import Selection from './Scription.js';
export default class Php extends Selection{
 setWeb(name) {
  this.mWeb = name;
 }
 getWeb() {
  console.log(this.mWeb);
 }
}