'use strict';

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
// Challenge #1
// 1)
const [players1, players2] = game.players;
console.log(players1, players2);
// 2)
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);
// 3)
const allPlayers = [...players1, ...players2];
console.log(allPlayers);
// 4)
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);
// 5)
const {
  odds: {team1, x: draw, team2},
} = game;
console.log(team1, draw, team2);
// 6)
function printGoals(...players) {
  console.log(`${players.length} goals scored by: ${players.join(', ')}`);
}
// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals(...game.scored);
// 7)
team1 < team2 && console.log(`Team 1 is more likely to win`);
team1 > team2 && console.log(`Team 2 is more likely to win`);
draw < (team1 || team2) && console.log(`Draw is more likely to happen`);

console.log('---- Challenge #2 ----'); // Challenge #2
//  1)
for (const [i, name] of game.scored.entries())
  console.log(`Goal ${i}: ${name}`);
// 2)
let avgOdd = 0;
for (const odd of Object.values(game.odds)) {
  avgOdd += odd;
}
console.log(avgOdd / 3);
// 3)
console.log(`Odd of victory ${game.team1}: ${game.odds.team1}`);
console.log(`Odd of draw: ${game.odds.x}`);
console.log(`Odd of victory ${game.team2}: ${game.odds.team2}`);
// 4)
const scorers = {
  Gnarby: 1,
  Hummels: 1,
  Lewandowski: 2,
};

// Coding Challenge #2
// Let's continue with our football betting app! Keep using the 'game' variable from
// before.
// Your tasks:

// 1. Loop over the game.scored array and print each player name to the console, TODODONE
// along with the goal number (Example: "Goal 1: Lewandowski")
// 2. Use a loop to calculate the average odd and log it to the console (We already TODODONE
// studied how to calculate averages, you can go check if you don't remember)
// 3. Print the 3 odds to the console, but in a nice formatted way, exactly like this: TODODONE
// Odd of victory Bayern Munich: 1.33
// Odd of draw: 3.25
//  Odd of victory Borrussia Dortmund: 6.5
// Get the team names directly from the game object, don't hardcode them
// (except for "draw"). Hint: Note how the odds and the game objects have the
// same property names 😉
// 4. Bonus: Create an object called 'scorers' which contains the names of the TODO
// players who scored as properties, and the number of goals as the value. In this
// game, it will look like this:
// {
//   Gnarby: 1,
//   Hummels: 1,
//   Lewandowski: 2
// }

// Coding Challenge #1
// We're building a football betting app (soccer for my American friends 😅)!
// Suppose we get data from a web service about a certain game ('game' variable on
// next page). In this challenge we're gonna work with that data.
// Your tasks:

// 1. Create one player array for each team (variables 'players1' and DONE
// 'players2')
// 2. The first player in any player array is the goalkeeper and the others are field DONE
// players. For Bayern Munich (team 1) create one variable ('gk') with the
// goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10
// field players
// 3. Create an array 'allPlayers' containing all players of both teams (22 DONE
// players)
// 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a DONE
// new array ('players1Final') containing all the original team1 players plus
// 'Thiago', 'Coutinho' and 'Perisic'
// 5. Based on the game.odds object, create one variable for each odd (called DONE
// 'team1', 'draw' and 'team2')
// 6. Write a function ('printGoals') that receives an arbitrary number of player DONE
// names (not an array) and prints each of them to the console, along with the
// number of goals that were scored in total (number of player names passed in)
// 7. The team with the lower odd is more likely to win. Print to the console which DONE
// team is more likely to win, without using an if/else statement or the ternary
// operator.
// Test data for 6.: First, use players c.
// Then, call the function again with players from game.scored

// GOOD LUCK 😀
