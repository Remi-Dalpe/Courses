// // Part 1
// // Challenge #1

// const massMark = 78
// const massJohn = 92
// const heightMark = 1.69
// const heightJohn = 1.95

// const BMIMark = massMark / (heightMark * heightMark);
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// //const markHigherBMI = BMIMark > BMIJohn

// console.log(BMIMark, BMIJohn/*, markHigherBMI*/);

// // Challenge #2

// if (BMIMark > BMIJohn) {
//   console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
// } else {
//   console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
// }

// // Challenge #3

// const scoreDolphinsD1 = (96 + 108 + 89) / 3;
// const scoreKoalasD1 = (88 + 91 + 110) / 3;
// console.log(scoreDolphinsD1, scoreKoalasD1);

// if (scoreDolphinsD1 > scoreKoalasD1) {
//   console.log("Dolphins win the trophy");
// } else if (scoreDolphinsD1 < scoreKoalasD1) {
//   console.log("Koalas win the trophy");
// } else if (scoreDolphinsD1 === scoreKoalasD1) {
//   console.log("Both win the trophy");
// }
// // // Bonus #1 // //

// const scoreDolphinsD2 = (97 + 112 + 101) / 3;
// const scoreKoalasD2 = (109 + 95 + 123) / 3;
// console.log(scoreDolphinsD2, scoreKoalasD2);

// if (scoreDolphinsD2 > scoreKoalasD2 && scoreDolphinsD2 >= 100) {
//   console.log("Dolphins win the trophy");
// } else if (scoreDolphinsD2 < scoreKoalasD2 && scoreKoalasD2 >= 100) {
//   console.log("Koalas win the trophy");
// } else if (scoreDolphinsD2 === scoreKoalasD2) {
//   console.log("Both win the trophy");
// }

// // // Bonus #2 // //

// const scoreDolphinsD3 = (97 + 112 + 101) / 3;
// const scoreKoalasD3 = (109 + 95 + 106) / 3;
// console.log(scoreDolphinsD3, scoreKoalasD3);

// if (scoreDolphinsD3 > scoreKoalasD3 && scoreDolphinsD3 >= 100) {
//   console.log("Dolphins win the trophy");
// } else if (scoreDolphinsD3 < scoreKoalasD3 && scoreKoalasD3 >= 100) {
//   console.log("Koalas win the trophy");
// } else if (scoreDolphinsD3 === scoreKoalasD3 && (scoreDolphinsD3 && scoreKoalasD3) >= 100) {
//   console.log("Both win the trophy");
// } else {
//   console.log("No one win the trophy")
// }

// // Challenge #4

// const bill = 275;
// const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

// console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);

// // Part 2

// // Challenge #1


// const calcAverage = (a, b, c) => (a + b + c) / 3;

// const scoreDolphinsD1 = calcAverage(44, 23, 71);
// const scoreKoalasD1 = calcAverage(65, 54, 49);
// const scoreDolphinsD2 = calcAverage(85, 54, 41);
// const scoreKoalasD2 = calcAverage(23, 34, 27);

// const checkWinner = function (avgDolphins, avgKoalas) {
//  if (avgDolphins >= 2 * avgKoalas) console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
//  else if (avgKoalas >= 2 * avgDolphins) console.log(`Koalas win (${avgDolphins} vs. ${avgKoalas})`);
//  else {
//   console.log(`No team wins...`)
//  }
// }
// checkWinner(scoreDolphinsD1, scoreKoalasD1);
// checkWinner(scoreDolphinsD2, scoreKoalasD2);

// // Challenge #2

// const bills = [125, 555, 44];

// const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// const totals = [tips[0] + bills[0], tips[1] + bills[1], tips[2] + bills[2]];
// console.log(bills, tips, totals);

// // Challenge #3

// const mark = {
//   fullName: 'Mark Miller',
//   mass: 78, 
//   height: 1.69,

//   calcBMI: function () {
//     this.bmi = this.mass / (this.height * this.height);
//     return this.bmi;
//   }
// }

// const john = {
//   fullName: 'John Smith',
//   mass: 92, 
//   height: 1.95,

//   calcBMI: function () {
//     this.bmi = this.mass / (this.height * this.height);
//     return this.bmi;
//   }
// }

// mark.calcBMI();
// john.calcBMI();

// // console.log(mark.bmi, john.bmi);

// if (mark.bmi > john.bmi) {
//   console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`);
// } else if (john.bmi < mark.bmi) {
//   console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`);
// } else {
//   console.log(`${john.fullName}'s BMI (${john.bmi}) and ${mark.fullName}'s (${mark.bmi}) are equal!`);
// }

// Challenge #4

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52] 
const tips = [];
const totals = [];

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}
console.log(bills, tips, totals);

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    // sum = sum + arr[i];
    sum += arr[i];
  }
  return sum / arr.length;
}
console.log(calcAverage(bills));
console.log(calcAverage(tips));
console.log(calcAverage(totals));






















