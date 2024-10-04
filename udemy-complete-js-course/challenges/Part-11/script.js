'use strict';

// Coding Challenge #3
/*
 */
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
