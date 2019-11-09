import Animal from './java.js';
class Dog extends Animal {
 bite() {
  console.log("bite");
 }
 barck() {
  console.log("barck");
 }
}
const dog = new Dog();
dog.run();
dog.walk();
