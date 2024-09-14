'use strict';

/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true
if (hasDriversLicense)  console.log('I can drive');

// const interface = '';
// const private = '';
// const if = '';

// Functions
console.log(`-Functions-`)

function logger() {
  console.log(`My name is Jonas`);
}

logger(); // Calling / Running / Invoking function
logger(); // Calling / Running / Invoking function
logger(5); // Calling / Running / Invoking function


function fruitProcesser(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcesser(5, 0);
console.log(appleJuice);
console.log(fruitProcesser(5, 0));

const appleOrangeJuice = fruitProcesser(2, 4);
console.log(appleOrangeJuice);

// Function Declarations vs. Expressions
console.log(`-Function Declarations vs. Expressions-`)

// Function Declarations
const age1 = calcAge1(1991);

function calcAge1(birthYear) {
  return 2037 - birthYear;
}

// Function Expressions
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
}
const age2 = calcAge2(1991);

console.log(age1, age2);

console.log(calcAge1(1991), calcAge2(1991));

// Arrow Functions
console.log(`-Arrow Functions-`);

const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  // return retirement; 
  return `${firstName} retires in ${retirement} years`
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1980, 'Bob'));


// Functions Calling Other Functions
console.log(`-Functions Calling Other Functions-`);
 
function cutPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutPieces(apples);
  const orangePieces = cutPieces(oranges);

  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
  return juice;
}
console.log(fruitProcessor(2, 3));


// Reviewing Functions 
console.log(`-Reviewing Functions-`);

const birthYear = 2003; // Differrent birthYear

const calcAge = function(birthYear) { // Differrent birthYear
  return 2037 - birthYear
}

const yearsUntilRetirement = function (birthYear, firstName) { // Differrent birthYear
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired🥳`);
    return -1;
  }
}
console.log(yearsUntilRetirement(birthYear, 'Remi'));
console.log(yearsUntilRetirement(1950, 'Mike'));

function functionName(parameters) {
  // Function Body //
  // Block of code to reuse //
  const arguments = parameters; // Parameters are Arguments
  return value; // Output a value & terminate execution
}
const variable = functionName(arguments); // Calling / running / invoking using ()


// Introduction to Arrays
console.log(`-Introduction to Arrays-`);

// const friend1 = 'Michael';
// const friend2 = 'Steven';
// const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

// const years = new Array(1991, 2000, 2004, 2024);

console.log(friends[0]);
console.log(friends[1]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);
// friends = ['Bob', 'Alice'] // no no

const firstName = 'Remi'
const remi = [firstName, 'Dalpe', 2024 - 2004, 'student', friends];
console.log(remi);
console.log(remi.length);

// Exercise
const calcAge = function (birthYear) {
  return 2037 - birthYear;
}
const years = [1991, 2000, 2004, 2024];
// console.log(calcAge(years));
const age1 = calcAge(years[1]);
const age2 = calcAge(years[2]);
const age3 = calcAge(years[3]);
console.log(age1, age2, age3);

const ages = [calcAge(years[1]), calcAge(years[2]), calcAge(years[3])];
console.log(ages);

// Basic Array Operations (Methods)
console.log(`-Basic Array Operations (Methods)-`);

const friends = ['Michael', 'Steven', 'Peter'];
const newLenght = friends.push('Jay'); // Add at the end
console.log(friends);
console.log(newLenght);

friends.unshift('John'); // Add at beginning
console.log(friends);

// Remove Elements
friends.pop(); // Removes last
const popped = friends.pop(); // Removes last
console.log(popped);
console.log(friends);  

friends.shift();
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

// ES6+
friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes(23));

if (friends.includes('Peter')) {
  console.log('You have a friend called Peter')
}
// Introduction to Objects
console.log(`- Introduction to Objects-`);

// const remisArray = [
//   'Remi',
//   'Dalpe',
//   2024 - 2004,
//   'Student',
//   ['Ben', 'Sam', 'Vic']
// ];

const remi = {
  firstName: 'Remi',
  lastName: 'Dalpe',
  age: 2024 - 2004,
  job: 'Student',
  friends: ['Ben', 'Sam', 'Vic']
}

// Dot vs. Bracket Notation
console.log(`-Dot vs. Bracket Notation-`)

const remi = {
  firstName: 'Remi',
  lastName: 'Dalpe',
  age: 2024 - 2004,
  job: 'Student',
  friends: ['Ben', 'Sam', 'Vic']
}
console.log(remi)

console.log(remi.lastName);
console.log(remi['lastName']);

const nameKey = 'Name';
console.log(remi['first' + nameKey]);
console.log(remi['last' + nameKey]);

// console.log(remi.'last' + nameKey);

const interestedIn = prompt('What do you want to know about me? Chose between firstName, lastName, age, job, and friends.');
console.log(remi[interestedIn]);

if (remi[interestedIn]) {
  console.log(remi[interestedIn]);
} else {
  console.log('Wrong request. Chose between firstName, lastName, age, job, and friends.');
}

remi.location = 'Canada';
remi['GitHub'] = 'https://diogene667.github.io/RemiDalpe.github.io/'
console.log(remi);

// Challenge 
// "Jonas has 3 friends, and his best friend is called Michel"

const jonas = { 
  firstName: 'Jonas',
  friends: ['Michael', 'Sam', 'Vic']
}
const Jonas = `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}.`
console.log(Jonas);


// Object Methods
console.log(`-Object Methods-`);

const remi = {
  firstName: 'Remi',
  lastName: 'Dalpe',
  birthYear: 2004,
  job: 'Student',
  friends: ['Ben', 'Sam', 'Vic'],
  hasDriversLivense: true,

  // calcAge: function (birthYear) {
  //   return 2024 - birthYear;
  // }
  // calcAge: function () {
  //   return 2024 - this.birthYear;
  // }
  calcAge: function () {
    this.age = 2024 - this.birthYear;
    return this.age;
  }
};

console.log(remi.calcAge());
// console.log(jonas['calcAge'](2004));

console.log(remi.age);
console.log(remi.age);
console.log(remi.age);


// Challenge
// "Remi is a 20-year old student, and he has no driver's license"

const remi = {
  firstName: 'Remi',
  lastName: 'Dalpe',
  birthYear: 2004,
  job: 'Student',
  friends: ['Ben', 'Sam', 'Vic'],
  hasDriversLivense: false,

  calcAge: function () {
    this.age = 2024 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLivense ? `a ` : `no `}driver's license.`;
  }
};
console.log(remi.getSummary());


// For Loops, Looping Arrays, Breaking and Continuing
console.log(`-For Loops, Looping Arrays, Breaking and Continuing-`);

// console.log(`Weight lifting rep 1 🏋️`);
// console.log(`Weight lifting rep 1 🏋️`);
// console.log(`Weight lifting rep 1 🏋️`);
// console.log(`Weight lifting rep 1 🏋️`);
// console.log(`Weight lifting rep 1 🏋️`);
// console.log(`Weight lifting rep 1 🏋️`);
// console.log(`Weight lifting rep 1 🏋️`);
// console.log(`Weight lifting rep 1 🏋️`);
// console.log(`Weight lifting rep 1 🏋️`);
// console.log(`Weight lifting rep 1 🏋️`);
// console.log(`Weight lifting rep 1 🏋️`);

// Keeps runing while condition is true 
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Weight lifting rep ${rep} 🏋️`);
}

const remi = [
  'Remi',
  'Dalpe',
  2024 - 2004,
  'Student',
  ['Ben', 'Sam', 'Vic'],
  true
];
const types = [];

for (let i = 0; i < remi.length; i++) {
  //reading from remi array
  console.log(remi[i], typeof remi[i]);

  // Filling types array
  // types[i] = typeof remi[i];
  types.push(typeof remi[i]);
}
console.log(types);

const years = [1991, 2000, 2004, 2024];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2024 - years[i]);
}
console.log(ages);

// Breaking and Continuing
console.log(`---ONLY STRINGS---`);
for (let i = 0; i < remi.length; i++) {
  if (typeof remi[i] !== 'string') continue;

  console.log(remi[i], typeof remi[i]);
}

console.log(`---BREAK WITH NUMBER---`);
for (let i = 0; i < remi.length; i++) {
  if (typeof remi[i] !== 'number') break;

  console.log(remi[i], typeof remi[i]);
}

// Looping Backwards and Loops in Loops
console.log(`-Looping Backwards and Loops in Loops-`);

const remi = [
  'Remi',
  'Dalpe',
  2024 - 2004,
  'Student',
  ['Ben', 'Sam', 'Vic'],
  true
];

for (let i = remi.length - 1; i >= 0; i--) {
  console.log(i, remi[i]);
}

// Loops in Loops

for (let ex = 1; ex < 4; ex++) {
  console.log(`------- Starting exercise ${ex}`);
  
  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${ex}: lifting weight repetition ${rep} 🏋️`)
  }
}
*/

// The while Loop
console.log(`-The while Loop-`)

// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weight repetition ${rep} 🏋️`);
// }

let rep = 1
while (rep <= 10) {
  console.log(`WHILE: Lifting weight repetition ${rep} 🏋️`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
while (dice !== 6) {
  console.log(`You roled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log(`Loop is about to end...`)
}





















     




