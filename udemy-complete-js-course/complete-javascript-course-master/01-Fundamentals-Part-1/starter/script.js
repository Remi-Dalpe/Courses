/*
// Values & Variables
console.log("-Values & Variables-");

let js = 'nice';

// if (js == 'nice') alert ("JS is nice!")

console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(21);

// let firstName = "Matilda"

// console.log(firstName);
// console.log(firstName);
// console.log(firstName);

let jonas_matilda = "JM"; 
let $function = 27;
let PI = 3.1415;

let myFirstJob = "Coder";
let myCurrentJob = "Teacher";

console.log(myFirstJob);

// Assignement #1 //

console.log("-Assignement #1-")

let country = "Canada, ";
let continent = "North America, ";
let population = "38.93 million (2022)";

console.log(country, continent, population);

// Assignement #1 // 

// Data Types
console.log("-Data Types-");

let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 21);
console.log(typeof 'Jonas');   

javascriptIsFun =  'Yes!' 
console.log(typeof javascriptIsFun);
console.log(javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);

// let, const & var
console.log("-let, const & var-");

let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990;
// const job;

var job = 'programmer';
job = 'teacher'

// lastName = 'Dalpe';
// console.log(lastName);

//Math operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 is 2 to the power of 3 (2*2*2)

const firstName = 'Remi';
const lastName = 'Dalpe';
console.log(firstName + ' ' + lastName);

// Assignment operators
let x = 10 + 5; //15
x += 10 // x = x + 10 = 25
x *= 4 // x = x * 4 = 100
x ++; // x = x +1
x --; // x = x -1
console.log(x);

// Comparison operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);


// Operator precedence 
console.log("-Operator precedence-");

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018); 

console.log(25-10 - 5);

let x, y;
x = y = 25-10-5; // x = y = 10
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2 
console.log(ageJonas, ageSarah, averageAge);

// Strings & Template Literals
console.log("-Strings & Template Literals-");

const firstName = 'Jonas'
const job = 'teacher'
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!';
console.log(jonas)

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);

console.log(`Just a string`);

console.log('String on \n\
  multiple \n\
  lines');

console.log(`String on
  multiple
  lines
  without n tag`);

// if / else statements
console.log("-if / else statements-");

const age = 15;

if (age >= 18) {
  console.log(`Sarah can start driving license 🚗`);
} else {
  const yearLeft = 18 - age;
  console.log(`Sarah cannot start driving license, wait another ${yearLeft} years ⏳`);
}

const birthYear = 1991;
let century;

if (birthYear <= 2000) {
  let century = 20;
} else {
  let century = 21;
}
console.log(century); 


// Type Convertion & Coercion
console.log(`-Type convertion & Coercion-`)

// Type Convertion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Jonas')); 
console.log(typeof NaN); 

console.log(String(23), 23);

// Type Coercion
console.log(`I am` + 23 + `year old`);
console.log(`I am` + '23' + `year old`);
console.log(`I am ` + String(23) + ` year old`);

console.log(`23` + `10` - 3)
console.log(`23` * `2`);
console.log(`23` / `2`);

let n = `1` + 1;
n--;
console.log(n);


console.log(2+3+4+'5');
console.log('10'-'4'-'3'-2+'5');

// Truthy & Falsy Values
console.log(`-Truthy & Falsy Values-`)

// 5 Falsy values: false, 0, '', undefined, null, NaN => false

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 10;

if (money) {
  console.log(`Don't spend it all`);
} else {
  console.log(`You should get a job`);
}

let height = 0;
if (height) {
  console.log(`Height is defined`);
} else {
  console.log(`Height is undefined`);
}

// == vs === 
console.log(`-== vs ===-`);

let age = 18;
if (age === 18) console.log(`Adult (strict)`);
if (age == 18) console.log(`Adult (loose)`);

age = '18';
if (age === 18) console.log(`Adult (strict)`);
if (age == 18) console.log(`Adult (loose)`);

const favoriteNum = Number(prompt(`Whats your favorite number?`));
console.log(favoriteNum);
console.log(typeof favoriteNum);

if (favoriteNum === 5) {
  console.log(`Nice number`);
} else if (favoriteNum === 7) {
  console.log(`Also a nice number`);
} else if (favoriteNum === 9) {
  console.log(`Also a nice number`);
} else {
  console.log(`Number is not 5 or 7 or 9`);
}

if (favoriteNum !== 5) console.log('Why not 5?');


// Logical Operators
console.log(`-Logical Operators-`);

const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// const shouldDrive = hasDriversLicense && hasGoodVision;

// if (hasDriversLicense && hasGoodVision) {
//   console.log('Sarah is able to drive!');
// } else {
//   console.log(`Someone else should drive...`);
// }

const isTired = false;
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log('Sarah is able to drive!');
} else {
  console.log(`Someone else should drive...`);
}


// Switch statement
console.log(`-Switch statement-`)

const day = 'monday';

switch(day) {
  case 'monday': // day === 'monday'
    console.log(`Plan course`);
    console.log(`Go to meeting`);
    break;
  case 'tuesday':
    console.log(`Prepare theory`);
    break;
  case 'wednesday':
  case 'thursday':
    console.log(`Write examples`);
    break;
  case 'friday':
    console.log(`Record videos`);
    break;
  case 'saturday':
  case 'sunday':
    console.log(`Weekend`);
    break;
  default: 
    console.log('Not a valid day')
}

if (day === 'monday') { 
  console.log(`Plan course`);
  console.log(`Go to meeting`);
} else if (day === 'tuesday') {
  console.log(`Prepare theory`);
} else if (day === 'wednesday' || 'thursday') {
  console.log(`Write examples`);
} else if (day === 'friday') {
  console.log(`Record videos`);
} else if (day === 'saturday' || 'sunday') {
  console.log(`Weekend`);
} else console.log('Not a valid day')

// Statements & Expressions
console.log(`-Statements & Expressions-`)

// Expressions (Produces a value)
3 + 4 
1991
true && false && !false

// Statements
if (23 > 10) {
  const str = `23 is bigger`
}

// Only takes Expressions
console.log(`I'm ${2037 - 1991} years old ${if (23 > 10){
  const str = `23 is bigger`;
}}`)
*/

// Ternary Operator 
console.log(`-Ternary Operator-`)

const age = 23


age >= 18 ? console.log(`I like wine🍷`) : console.log(`I like water💧`)

let drink;
if (age >= 18) {
  drink = `Wine🍷`
} else {
  drink = `Water💧`
}
console.log(drink);

const drink2 = age >= 18 ? `Wine🍷` : `Water💧`;
console.log(drink2)

console.log(`I like to drink ${age >= 18 ? `Wine🍷` : `Water💧`}`)


















