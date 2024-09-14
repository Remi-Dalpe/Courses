'use strict';

// Developer Skills & Editor Setup

/*
1)
1. What is the X days? index + 1

2)
1. Function takes 'arr'
2. 'arr' transformed into string, separated by ...
3. Day is equal to data index
4. Output string is made of 'arr' values & right day for each index positions
END: Function displays a string (forecast) to the console 
*/

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}ºC in ${i + 1} days ... `;
  }
  console.log('... ' + str);
};
printForecast(data1);
printForecast(data2);
