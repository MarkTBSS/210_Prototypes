"use strict";

function Person(birthYear) {
    this.birthYear = birthYear;
}

Person.prototype.calcAge = function () {
    console.log(2037 - this.birthYear);
};

Object.defineProperty(Person.prototype, "species", {
    get: function () {
        return "Homo Sapiens";
    },
});

const jonas = new Person(1991);
const matilda = new Person(1994);

jonas.calcAge();
matilda.calcAge();

console.log(jonas.species, matilda.species);

console.log(jonas.hasOwnProperty("birthYear")); // true
console.log(jonas.hasOwnProperty("species")); // false, because 'species' is a getter defined on the prototype
