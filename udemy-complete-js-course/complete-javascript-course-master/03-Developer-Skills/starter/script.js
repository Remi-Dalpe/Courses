// Remember, we're gonna use strict mode in all scripts now!
'use strict';

/*
const x = 23;
if (x === 23) console.log(23);

const calcAge = (birthYear) => 2037 - birthYear;

console.log();

// 59. Using Google, StackOverflow and MDN

const temp = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem;
// - What is temp amplitude?
// - How to compute max & min temp?
// - What's a sensor error?
//
// 2) Breaking up into-sub problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitutde)
// - Return amplitude

const calcTempAmp = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 1; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;
    
    curTemp > max ? (max = curTemp) : max;
    curTemp < min ? (min = curTemp) : min;
  }
  console.log(min, max);
  return max - min;
};
const amp = calcTempAmp(temp);
console.log(amp);

// 1) How to use 2 arrays
//  - How to merge 2 arrays
// 2) Merge arrays

const calcTempAmpNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);
  
  let max = temps[0];
  let min = temps[0];
  
  for (let i = 1; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;
    
    curTemp > max ? (max = curTemp) : max;
    curTemp < min ? (min = curTemp) : min;
  }
  console.log(min, max);
  return max - min;
};
const ampNew = calcTempAmpNew([3, 5, 1], [9, 0, 5]);
console.log(ampNew);
*/

// 61. Debugging with the Console and Breakpoints

const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    // C) FIX
    // value: Number(prompt('Degrees celsius:')),
    value: 10,
  };
  // B) FIND
  console.log(measurement);
  console.table(measurement);

  console.log(measurement.value);
  console.warn(measurement.value);
  console.error(measurement.value);

  const kelvin = measurement.value + 273;
  return kelvin;
};
// A) IDENTIFY
console.log(measureKelvin());

// Using a debugger
const calcTempAmpBug = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = 0;
  BUG;
  let min = 0;
  BUG;

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    debugger;
    if (curTemp > max) {
      max = curTemp;
    }
    if (curTemp < max) {
      min = curTemp;
    }
  }
  console.log(min, max);
  return max - min;
};
// A) IDENTIFY
const ampBug = calcTempAmpBug([3, 5, 1], [9, 4, 5]);
console.log(ampBug);
