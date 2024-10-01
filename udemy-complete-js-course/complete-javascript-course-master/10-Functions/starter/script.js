'use strict';

// Closures // IMPORTANT

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();
booker();
booker();
booker();

console.dir(booker);
// Example 1
console.log('====Example 1====');
let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();
console.dir(f);
// Re-assigned f function
h();
f();
console.dir(f);

// Example 2
console.log('====Example 2====');

const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};
const perGroup = 1000;
boardPassengers(180, 3);

// Immediately Invoked Function Expressions (IIFE) // Can Only be called once
/*
const runOnce = function () {
  console.log(`This will run again`);
};
runOnce();
runOnce();

(function () {
  console.log('This will never run again');
})();
(() => console.log('This will never run again'))();
*/

// The call, apply & bind method
/*
const airCanada = {
  airline: 'Air Canada',
  iataCode: 'AC',
  bookings: [],
  // book: function () {}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({flight: `${this.iataCode}${flightNum}`, name});
  },
};
airCanada.book(239, 'Remi Dalpe');
airCanada.book(635, 'John Smith');
// console.log(airCanada.bookings);

const qcWings = {
  airline: 'Quebecwings',
  iataCode: 'QC',
  bookings: [],
};

const book = airCanada.book;

// Don't work:
// book(23, 'Sara Williams');

// Call method
book.call(qcWings, 23, 'Sarah Williams');
// console.log(qcWings.bookings);

book.call(airCanada, 239, 'Mary Cooper');
// console.log(airCanada.bookings);

const nbAirAhh = {
  airline: 'New-Brunswick Air Ahh',
  iataCode: 'NB',
  bookings: [],
};

book.call(nbAirAhh, 583, 'Mary Cooper');
// console.log(nbAirAhh.bookings);

// Apply method
const flightData = [583, 'George Cooper'];
// Less used
book.apply(nbAirAhh, flightData);
// console.log(nbAirAhh.bookings);
// more used
book.call(nbAirAhh, ...flightData);

// Bind method
console.log(`==== Bind Method ====`);
const bookQC = book.bind(qcWings);
const bookAC = book.bind(airCanada);
const bookNB = book.bind(nbAirAhh);
bookQC(23, 'Steven Williams');
bookAC(239, 'Mary Cooper');
bookNB(583, 'George Cooper');
console.log(airCanada.bookings, qcWings.bookings, nbAirAhh.bookings);

const bookAC23 = book.bind(airCanada, 23);
bookAC23('Remi Dalpe');
bookAC23('Martha Cooper');
// W/ event listener
airCanada.planes = 300;
airCanada.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};
// airCanada.buyPlane() // this = airCanada
document
  .querySelector(`.buy`)
  .addEventListener('click', airCanada.buyPlane.bind(airCanada)); // this = .buy/button element

// Partial Application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addGST = addTax.bind(null, 0.05);
// addGST = value => value + value * 0.23;
const addQST = addTax.bind(null, 0.09975);
// addQST = value => value + value * 0.9975;
console.log(addGST(100));
console.log(addQST(100));
console.log(addGST(14.975));
console.log(addQST(14.975));

console.log(`==== Challenge ====`);

const addTaxRate = function (gst, qst) {
  return function (value) {
    return value + value * (gst + qst); // RETURN needed or 'undefined'
  };
};
const addTaxes = addTaxRate(0.05, 0.09975);
console.log(addTaxes(100));
*/

// Functions Accepting Callback Functions & Functions Returning Functions
/*
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};
// Higher-order function
// Delegates the actual string transformation to the lower/child function
// Only applies to string
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};
transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);
// JS always uses callbacks
const high5 = function () {
  console.log('👋');
};
document.body.addEventListener('click', high5);

['Jonas', 'Martha', 'Adam'].forEach(high5);
// Functions Returning Functions
console.log('==== Functions Returning Functions ====');

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};
const greeterHey = greet('Hey');
greeterHey('Remi');
greeterHey('Steven');
greet('Hello', 'Remi');
// Same but w/ arrow function
const greetArr = greeting => name => console.log(`${greeting} ${name}`);
greetArr('Hey')('Remi');
*/

// How Passing Arguments Works: Value vs. Reference
/*
const flight = 'LH234';
const remi = {
  name: 'Remi',
  passport: 1234567890,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 1234567890) {
    alert('Checked in');
  } else {
    alert('Wrong passport!');
  }
};
// checkIn(flight, remi);
// console.log(flight, remi);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000000);
};
newPassport(remi);
checkIn(flight, remi);
*/

// Default Parameters
/*
const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  // ES5
  // numPassengers = numPassengers || 1;
  // price = price || 199

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);

createBooking('LH123', undefined, 1000);
*/
