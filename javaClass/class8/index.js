import Farmer from './Farmer.js';
import Doctor from './Doctor.js';
import People from './People.js';

const people = new People();
people.eat();

const farmer = new Farmer();
farmer.walk();

document.getElementById("class1").innerHTML = farmer.walk();

const doctor = new Doctor();
doctor.walk();

document.getElementById("class").innerHTML = doctor.walk();