let computerDiceRoll = Math.random();
let playerDiceRoll = Math.random();

const computerRoll = () => {
  const computerGuess = computerDiceRoll <= 0.5 ? 'heads' : 'tails';
  return computerGuess;
}

const playerRoll = () => {
  const playerGuess = playerDiceRoll <= 0.5 ? 'heads' : 'tails';
  return playerGuess;
}

const displayResult = () => {
  const display = computerRoll() === playerRoll() ? 'You won!' : 'You lose.'
  return display;
}

let result = displayResult();
let compresult = computerRoll();
let playresult = playerRoll();
console.log(result);
console.log(compresult);
console.log(playresult);


