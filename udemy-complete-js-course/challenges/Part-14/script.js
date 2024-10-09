'use strict';

// Coding Challenge #4
/*
 */
const dogs = [
  {weight: 22, curFood: 250, owners: ['Alice', 'Bob']},
  {weight: 8, curFood: 200, owners: ['Matilda']},
  {weight: 13, curFood: 275, owners: ['Sarah', 'John']},
  {weight: 32, curFood: 340, owners: ['Michael']},
];
// 1.
dogs.forEach(dog => (dog.recFood = Math.trunc(dog.weight ** 0.75 * 28)));
console.log(dogs);
// 2.
const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(dogSarah);
console.log(`Sarah's dog is eating too ${dogSarah.curFood > dogSarah.recFood ? 'much' : 'little'}!`);
// 3.
const dogEatMuchOwners = dogs.filter(dog => dog.curFood > dog.recFood).flatMap(dog => dog.owners);
const dogEatLittleOwners = dogs.filter(dog => dog.curFood < dog.recFood).flatMap(dog => dog.owners);
console.log(dogEatMuchOwners, dogEatLittleOwners);
// 4.
const message = `'s dog eat too `;
const logDogEatMuchOwners = dogs.filter(dog => {
  dog.curFood > dog.recFood && console.log(`${dog.owners.join(' and ')}${message} much!`);
});
const logDogEatLittleOwners = dogs.filter(dog => {
  dog.curFood < dog.recFood && console.log(`${dog.owners.join(' and ')}${message} little!`);
});
// 5.
console.log(dogs.some(dog => dog.curFood === dog.recFood));
// 6.
const okayPortion = dog => dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1;
console.log(dogs.some(okayPortion));
// 7.
console.log(Array(dogs.some(okayPortion)));
// 8.
console.log(dogs.slice().sort((a, b) => a.recFood - b.recFood));

// Julia and Kate are still studying dogs, and this time they are studying if dogs are
// eating too much or too little.
// Eating too much means the dog's current food portion is larger than the
// recommended portion, and eating too little is the opposite.
// Eating an okay amount means the dog's current food portion is within a range 10%
// above and 10% below the recommended portion (see hint).
// Your tasks:
// 1. Loop over the 'dogs' array containing dog objects, and for each dog, calculate DONE
// the recommended food portion and add it to the object as a new property. Do
// not create a new array, simply loop over the array.
// HIGH .forEACH
// (The result is in grams of food, and the weight needs to be in kg)
// 2. Find Sarah's dog and log to the console whether it's eating too much or too DONE
// little. Hint: Some dogs have multiple owners, so you first need to find Sarah in
// the owners array, and so this one is a bit tricky (on purpose) 🤓
// HIGH .find
// 3. Create an array containing all owners of dogs who eat too much DONE
// ('ownersEatTooMuch') and an array with all owners of dogs who eat too little
// ('ownersEatTooLittle').
// HIGH .filter
// 4. Log a string to the console for each array created in 3., like this: "Matilda and DONE
// Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat
// too little!"
// 5. Log to the console whether there is any dog eating exactly the amount of food DONE
// that is recommended (just true or false)
// HIGH .some
// 6. Log to the console whether there is any dog eating an okay amount of food DONE
// (just true or false)
// HIGH .some
// 7. Create an array containing the dogs that are eating an okay amount of food (try DONE
// to reuse the condition used in 6.)
// 8. Create a shallow copy of the 'dogs' array and sort it by recommended food DONE
// portion in an ascending order (keep in mind that the portions are inside the
// array's objects 😉)
// HIGH .sort

// The Complete JavaScript Course 26
// Hints:
// § Use many different tools to solve these challenges, you can use the summary
// lecture to choose between them 😉
// § Being within a range 10% above and below the recommended portion means:
// current > (recommended * 0.90) && current < (recommended *
// 1.10). Basically, the current portion should be between 90% and 110% of the
// recommended portion.
// Test data:

// GOOD LUCK 😀

// Coding Challenge #3
/*
const Data1t3 = [5, 2, 4, 1, 15, 8, 3];
const Data2t3 = [16, 6, 10, 5, 6, 1, 4];

const calcAverageHumanAget3 = ages => {
  console.log(
    ages
      .map(age => (age > 2 ? 16 + age * 4 : 2 * age))
      .filter(age => age >= 18)
      .reduce((acc, age, _, arr) => acc + age / arr.length, 0)
  );
};

console.log('Data1t3');
calcAverageHumanAget3(Data1t3);
console.log('Data2t3');
calcAverageHumanAget3(Data2t3);
 */

// Rewrite the 'calcAverageHumanAge' function from Challenge #2, but this time
// as an arrow function, and using chaining!
// Test data:
// § Data 1: [5, 2, 4, 1, 15, 8, 3]
// § Data 2: [16, 6, 10, 5, 6, 1, 4]

// GOOD LUCK 😀

// Coding Challenge #2
/*
const Data1 = [5, 2, 4, 1, 15, 8, 3];
const Data2 = [16, 6, 10, 5, 6, 1, 4];

const calcAverageHumanAge = function (ages) {
  const humanAge = ages.map(age => (age > 2 ? 16 + age * 4 : 2 * age));
  const adults = humanAge.filter(age => age >= 18);
  const avg = adults.reduce((acc, age, _, arr) => acc + age / arr.length, 0);
  console.log(`There is ${adults.length} adult dogs, ages: ${adults.join(', ')}, for an average of ${avg} years old`);
};
console.log('Data1');
calcAverageHumanAge(Data1);
console.log('Data2');
calcAverageHumanAge(Data2);
 */

// Let's go back to Julia and Kate's study about dogs. This time, they want to convert
// dog ages to human ages and calculate the average age of the dogs in their study.
// Your tasks:
// Create a function 'calcAverageHumanAge', which accepts an arrays of dog's DONE
// ages ('ages'), and does the following things in order:
// 1. Calculate the dog age in human years using the following formula: if the dog is DONE
// <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old,
// humanAge = 16 + dogAge * 4
// 2. Exclude all dogs that are less than 18 human years old (which is the same as DONE
// keeping dogs that are at least 18 years old)
// 3. Calculate the average human age of all adult dogs (you should already know DONE
// from other challenges how we calculate averages 😉)
// 4. Run the function for both test datasets DONE
// Test data:
// § Data 1: [5, 2, 4, 1, 15, 8, 3]
// § Data 2: [16, 6, 10, 5, 6, 1, 4]

// GOOD LUCK 😀

// Coding Challenge #1
/*
const julia1 = [3, 5, 2, 12, 7];
const kate1 = [4, 1, 15, 8, 3];
const julia2 = [9, 16, 6, 8, 3];
const kate2 = [10, 5, 6, 1, 4];

const checkDogs = function (julia, kate) {
  const juliaCorrect = julia.slice(1, -2);
  const dogs = juliaCorrect.concat(kate);

  let adult = true;
  dogs.forEach(function (dog, i) {
    dog >= 3 ? (adult = true) : (adult = false);
    const isAdult = adult ? `an adult, and is ${dog} years old` : `still a puppy 🐶`;
    console.log(`Dog number ${i + 1} is ${isAdult}`);
  });
};
console.log(`==== TEST DATA #1 ====`);
checkDogs(julia1, kate1);
console.log(`==== TEST DATA #2 ====`);
checkDogs(julia2, kate2);
*/
// Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners
// about their dog's age, and stored the data into an array (one array for each). For
// now, they are just interested in knowing whether a dog is an adult or a puppy.
// A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years
// old.
// Your tasks:
// Create a function 'checkDogs', which accepts 2 arrays of dog's ages DONE
// ('dogsJulia' and 'dogsKate'), and does the following things:
// 1. Julia found out that the owners of the first and the last two dogs actually have DONE
// cats, not dogs! So create a shallow copy of Julia's array, and remove the cat
// ages from that copied array (because it's a bad practice to mutate function
// parameters)
// 2. Create an array with both Julia's (corrected) and Kate's data DONE
// 3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 DONE
// is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy
// 🐶")
// 4. Run the function for both test datasets DONE
// Test data:
// § Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
// § Data 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]
// Hints: Use tools from all lectures in this section so far 😉

// GOOD LUCK 😀
