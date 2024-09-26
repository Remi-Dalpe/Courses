'use strict';

// // Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const weekDays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const hours = {
  [weekDays[3]]: {
    open: 12,
    close: 22,
  },
  [weekDays[4]]: {
    open: 11,
    close: 23,
  },
  [weekDays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  // openingHours: openingHours, // hours: hours,
  // ES6 enhanced object literals
  hours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your pastas with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

// String methods practice
// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

const getCode = str => str.slice(0, 3).toUpperCase();
for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '🔴' : ''}${type.replaceAll(
    '_',
    ' '
  )} from: ${getCode(from)} to: ${getCode(to)} (${time.replace(
    ':',
    'h'
  )})`.padStart(46);
  console.log(output);
}

/*
// Working w/ strings - Part3
// split & join
console.log('a+very+nice+string'.split('+'));
console.log('Remi Dalpe'.split(' '));

const [firstName, lastName] = 'Remi Dalpe'.split(' ');

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(' ');
  console.log(names);
  const namesUpper = [];

  for (const n of names) {
    namesUpper.push(n[0].toUpperCase() + n.slice(1));
    // namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};
capitalizeName('jessica ann smith davis');
capitalizeName('eugene nicolas remi dalpe');

// Padding
const message = 'Go to gate 23!';
console.log(message.padStart(25, '+').padEnd(30, '+'));
console.log('Remi'.padStart(25, '+').padEnd(30, '+'));

const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};
console.log(
  maskCreditCard(7192837129837),
  maskCreditCard(719284902037129837),
  maskCreditCard('71928371394874269829837')
);

// Repeat
const message2 = 'Bad weather... All Departures Delayed...';
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'✈️'.repeat(n)}`);
};
planesInLine(5);
planesInLine(3);
planesInLine(12);

// Working w/ strings - Part2
const airLine = 'TAP Air Portugal';

console.log(airLine.toLowerCase());
console.log(airLine.toUpperCase());
console.log('remi'.toUpperCase());
// Fix capitalization in name
const passenger = 'rEmI'; // Remi
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(`${passenger} to ${passengerLower} to ${passengerCorrect}`);
// Fix capitalization in name (function)
function correctName(name) {
  const nameLower = name.toLowerCase();
  const nameCorrect = nameLower[0].toUpperCase() + nameLower.slice(1);
  return console.log(`${name} to ${nameLower} to ${nameCorrect}`);
}
correctName(passenger);
// Comparing emails
const email = 'hello@jonas.io';
const loginEmail = '  Hello@Jonas.Io';
const otherEmail = 'bliat@interchange.ru';

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
// console.log(`${loginEmail} to ${lowerEmail} to ${trimmedEmail}`);

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

function compareEmails(email, loginEmail) {
  const normalizedEmail = loginEmail.toLowerCase().trim();
  const result =
    email === normalizedEmail
      ? `${email} corrected to to ${loginEmail}`
      : `[${loginEmail}]: email not found`;
  return console.log(result);
}
compareEmails(email, loginEmail);
compareEmails(email, otherEmail);

// replacing
const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceGB, priceUS);

const announcement =
  'All passenges come to boarding door 23. Boarding door 23!';
console.log(announcement.replace('door', 'gate'));
console.log(announcement.replace(/door/g, 'gate'));
console.log(announcement.replaceAll('door', 'gate'));

// Booleans
const plane = 'Airbus A320neo';
console.log(plane.includes('A320'));
console.log(plane.includes('Boeing'));
console.log(plane.startsWith('Airb'));

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log('Part of the NEW Airbus familly');
}

// Practice exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  const message =
    baggage.includes('knife') || baggage.includes('gun')
      ? 'You are NOT allowed onboard'
      : 'Welcome aboard';
  console.log(message);
};
checkBaggage('I have a laptop, some Food and a pocket knife');
checkBaggage('Socks & camera');
checkBaggage('Got some snacks and a gun for protection');


// Working w/ strings - Part1
const airLine = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);

console.log(airLine.length);
console.log('B737'.length);

console.log(airLine.indexOf('r'));
console.log(airLine.lastIndexOf('r'));
console.log(airLine.indexOf('portugal')); // -1 because can't be found

console.log(airLine.slice(4)); // 0 based // from 4 to end when no end value
console.log(airLine.slice(4, 7)); // end value is not included

console.log(airLine.slice(0, airLine.indexOf(' ')));
console.log(airLine.slice(airLine.lastIndexOf(' ') + 1));

console.log(airLine.slice(-2));
console.log(airLine.slice(1, -1));

const checkMiddleSeat = function (seat) {
  // B & E are middle seats
  const s = seat.slice(-1);
  s === 'B' || s === 'E'
    ? console.log('You got middle seat loser 👎')
    : console.log('You got lucky 🍀');
};
checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

console.log(new String('remi'));
console.log(typeof new String('remi'));

console.log(typeof new String('remi').slice(1));


/////////////////////////////////////////
// Maps: fundamentals
const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
rest.set(2, 'Lisbon, Portugal');
console.log(rest);
rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed :(');

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 21;
console.log(rest);
console.log(rest.get(time >= rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));
rest.delete(2);
// rest.clear();

const arr = [1, 2];
rest.set(arr, 'Test');
rest.set(document.querySelector(`h1`), 'Heading');
console.log(rest);
console.log(rest.size);

console.log(rest.get(arr));

// Maps: Iteration
console.log(`--- Maps: Iteration ---`);
const question = new Map([
  ['question', 'What is the best programming language'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct! 🥳'],
  [false, 'Try again!'],
]);
console.log(question);

// Convert object to map
console.log(Object.entries(hours));
const hoursMap = new Map(Object.entries(hours));
console.log(hoursMap);

// Quizz app
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}
// const answer = Number(prompt('Your answer'));
const answer = 3;
console.log(answer);

console.log(question.get(question.get('correct') === answer));
// Convert Map to Array
console.log([...question]);
// console.log(question.entries());
console.log([question.keys()]);
console.log([question.values()]);

/////////////////////////////////////////
// Sets
const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);
console.log(ordersSet);

console.log(new Set('Remi'));

console.log(ordersSet.size); // NOT .length like on arrays
console.log(ordersSet.has('Pizza'));
console.log(ordersSet.has('Bread'));
ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
ordersSet.delete('Risotto');
// ordersSet.clear();
console.log(
  ordersSet /*ordersSet[0], no index in sets, cant get values out of a set
);

for (const order of ordersSet) console.log(order);

// Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = new Set(staff);
const staffUniqueArray = [...new Set(staff)];
console.log(staffUnique);
console.log(staffUniqueArray);

console.log(
  new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
);

console.log(new Set('RemiDalpe').size);

/////////////////////////////////////////
// Property NAMES
const properties = Object.keys(hours);
console.log(properties);

let openStr = `We are open on ${properties.length} days: `;
for (const day of Object.keys(hours)) {
  openStr += `${day}, `;
}
console.log(openStr);

// Property VALUES
const values = Object.values(hours);
console.log(values);

const entries = Object.entries(hours);
console.log(entries);
// [key, value]
for (const [key, { open, close }] of entries)
  console.log(`On ${key} we open at ${open} and close at ${close}`);

/////////////////////////////////////////
// restaurant.hours &&
//   restaurant.hours.mon &&
//   console.log(restaurant.hours.mon.open);
// restaurant.hours &&
//   restaurant.hours.fri &&
//   console.log(restaurant.hours.fri.open);
// WITH optional chaining
console.log(restaurant.hours.mon?.open);
console.log(restaurant?.hours?.mon?.open); //???
console.log(restaurant.hours.fri?.open);

//e.g.
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
  const open = restaurant.hours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}
// Method
console.log(restaurant.order?.(0, 1) ?? "Method doesn't exist");
console.log(restaurant.orderRisotto?.(0, 1) ?? "Method doesn't exist");
// Arrays
const user = [];
//   {
//     name: 'Remi',
//     email: 'hello@remi.gmail',
//   },
// ];
console.log(user[0]?.name ?? 'User array empty');


/////////////////////////////////////////
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}
// console.log([...menu.entries()]);

/////////////////////////////////////////
const rest1 = {
  name: 'Capri',
  // numGuests: 20,
  numGuests: 0,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};
// OR assignment operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;
// nullish assignment operator (null or undefined)
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;
// AND assignment operator
// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>';
rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';

console.log(rest1);
console.log(rest2);

/////////////////////////////////////////
restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);
// Nullish: null & undefined (NOT 0 or '')
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);

/////////////////////////////////////////
console.log('---- OR ----');
// Use ANY data type, return ANY data type, short-circuiting
console.log(3 || 'Remi');
console.log('' || 'Remi');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || '' || 'Hello' || 23 || null);

restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log('---- AND ----');

console.log(0 && 'Remi');
console.log(7 && 'Remi');

console.log('Hello' && 23 && null && 'remi');

// Pratical Example
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}
restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

/////////////////////////////////////////
// 1) DESTRUCTURING
// SPREAD because is on RIGHT side of =
const arr = [1, 2, ...[3, 4]];
// REST because is on LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);
// Arrays
const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);
// Objects
const { sat, ...weekDays } = restaurant.openingHours;
console.log(weekDays);
// 2) FUNCTIONS
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  return console.log(sum);
};
add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
restaurant.orderPizza('mushrooms');


/////////////////////////////////////////
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);
// Spread operator ... // ES6+
const newArr = [1, 2, ...arr]; // ES6+
console.log(newArr);

console.log(...newArr);
console.log(1, 2, 7, 8, 9);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// Copy array
const mainMenuCopy = [...restaurant.mainMenu];

// Join multiple arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// Iterables: arrays, strings, maps, sets. NOT objects
const str = 'Remi';
const letters = [...str, '', 'D.'];
console.log(letters);
console.log(...str);
// console.log(`${...str} Dalpe`);

const ingredients = [
  //   prompt("let's make pasta! Ingredient 1?"),
  //   prompt('Ingredient 2?'),
  //   prompt('Ingredient 3?'),
];
console.log(ingredients);

// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
restaurant.orderPasta(...ingredients);

// Objects
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);

/////////////////////////////////////////
restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Via del Sole, 21',
  starterIndex: 1,
});

const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);

// Nested objects
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);


// Destructuring arrays
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];
// Destructuring or "Unpacking" array
const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// Good ol switcharoo
// const goodOlSwitcharooTemp = main;
// main = secondary;
// secondary = goodOlSwitcharooTemp;
// console.log(main, secondary);

// Destructuring
[main, secondary] = [secondary, main];
console.log(main, secondary);

console.log(restaurant.order(2, 0));

// Receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);
// Nested destructuring
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);
const [i, , [j, k]] = nested;
console.log(i, j, k);
// Default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
*/
