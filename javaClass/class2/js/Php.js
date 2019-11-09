import Programming from './Programming.js';
export default class Php extends Programming{
 setExecute(execute) {
  this.mExcute = execute;
 }
 getExecute() {
  console.log(this.mExcute);
 }
}