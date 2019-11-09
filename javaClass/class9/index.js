import People from './People.js';
import Farmer from './Farmer.js';
import Doctor from './Doctor.js';

const people = new People();
people.setName("da_duon");
people.getName();
people.walk();
people.eat();

const farmer = new Farmer();
farmer.setName("dara_duong");
farmer.getName();
farmer.setField("field the gaden at the pnc");
farmer.getField();
farmer.walk();
farmer.eat();

const doctor = new Doctor();
doctor.setName("darapanyuk.....");
doctor.getName();
doctor.setTitle("I can go to home with....");
doctor.getTitle();
doctor.inject();
doctor.walk();
doctor.eat();