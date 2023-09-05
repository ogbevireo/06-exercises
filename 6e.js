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
  let compresult = computerRoll();
  let playresult = playerRoll();
  const display = computerRoll() === playerRoll() ? `You win!\nComputer:${compresult}\nPlayer:${playresult}` : `You lose.\nComputer:${compresult}\nPlayer:${playresult}`;

  return compresult, playresult, display;
}

let result = displayResult();

console.log(result);
// console.log(compresult);
// console.log(playresult);


