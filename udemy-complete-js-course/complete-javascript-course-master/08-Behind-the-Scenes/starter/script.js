'use strict';
/*
// General scope

function calcAge(birthYear) {
  // calcAge() scope
  const age = 2024 - birthYear;

  function printAge() {
    // printAge() scope
    let output = `${firstName}, you are ${age}, born in ${birthYear}`; // variable lookup for firstName (in parent scope), not in scope
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      // if block scope, let & const will stay in this scope
      var millenial = true;
      // creating new variable with the same name as outer scope's variable
      const firstName = 'Steven';
      // Reassigning outer scope's
      output = 'NEW OUTPUT!';

      const str = `You are a millennial, ${firstName}`; // no variable lookup if variable (firstName) is found in scope
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    } else {
      millenial = false;
    }
    console.log(millenial);
    // console.log(add(2, 3)); not in right scope to access add(), only true in strict mode
    console.log(output); // = 'NEW OUTPUT!'
  }
  printAge();
  return age;
}

const firstName = 'Remi';
calcAge(2004);
calcAge(1991);
// console.log(age);
// printAge();

console.log(me);
// console.log(job);
// console.log(year);

var me = 'Remi';
let job = 'student';
const year = 2004;

console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
console.log(addArrow);
// console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}
const addExpr = function (a, b) {
  return a + b;
};
var addArrow = (a, b) => a + b;

// Example
if (!numProducts) deleteShoppingCart(); // numProducts is undefined because of var hoisting with initial value of undefined

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted!');
}

var x = 1;
let y = 2;
const z = 3;
console.log(x === window.x);
console.log(y === window.x);
console.log(z === window.x);


// console.log(this);

const calcAge = function (birthYear) {
  // console.log(2024 - birthYear);
  // console.log(this);
};
calcAge(2004);

const calcAgeArrow = (birthYear) => {
  // console.log(2024 - birthYear);
  // console.log(this);
};
calcAgeArrow(2004);

const remi = {
  year: 2004,
  calcAge: function () {
    console.log(this);
    console.log(2024 - this.year);
  },
};
remi.calcAge();

const matilda = {
  year: 2017,
};

matilda.calcAge = remi.calcAge;
matilda.calcAge();

const f = remi.calcAge;
f();


// var firstName = 'Matilda';

const remi = {
  firstName: 'Remi',
  year: 2004,
  calcAge: function () {
    // console.log(this);
    console.log(2024 - this.year);

    // Solution 1
    // const self = this; // self or that (pre ES6 solution)
    // const isMillennial = function () {
    //   console.log(self);
    //   // console.log(this);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    //   // console.log(this.year >= 1981 && this.year <= 1996);
    // };

    // Solution 2
    const isMillennial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillennial();
  },
  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};
remi.greet();
remi.calcAge();
// arguments keyword
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 8, 12);

var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};
addArrow(2, 5, 8);


let age = 20;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
  name: 'remi',
  age: 20,
};
const friend = me;
friend.age = 27;
console.log('Friend:', friend);
// { name: 'Remi', age: 27}
console.log('me', me);
// { name: 'Remi', age: 27}
*/
// primitive types
let lastName = 'William';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);
//  reference types
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};
const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before marriage:', jessica);
console.log('After marriage:', marriedJessica);

// marriedJessica = {};
// copying ogjects
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};
const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';

jessicaCopy.family.push('Mary', 'John');

console.log('Before marriage:', jessica2);
console.log('After marriage:', jessicaCopy);
