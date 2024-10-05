"use strict";

class Person {
    constructor(birthYear) {
        this.birthYear = birthYear;
    }

    calcAge() {
        console.log(2037 - this.birthYear);
    }

    get species() {
        return "Homo Sapiens";
    }
}

const jonas = new Person(1991);
const matilda = new Person(1994); // Assuming matilda's birthYear for demonstration

jonas.calcAge();
matilda.calcAge();

console.log(jonas.species, matilda.species);

console.log(jonas.hasOwnProperty("birthYear")); // true
console.log(jonas.hasOwnProperty("species")); // false, because species is a getter
