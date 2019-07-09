let playGame = confirm("Do you want to play a game?");
if (!playGame) {
  alert("You did not become a billionaire, but can!");
} else {
  let attemptsCount = 3;
  let maxPrizeAmout = 100;
  let intRange = 8;
  let totalPrize = 0;
  let intFour = 4;
  let intTwo = 2;
  let intThree = 3;
  do {
    let possiblePrize = maxPrizeAmout;
    let randomInteger = Math.floor(Math.random() * intRange + 1);
    if (attemptsCount === 1) {
      possiblePrize = Math.floor(possiblePrize / intFour);
    } else if (attemptsCount === intTwo) {
      possiblePrize = Math.floor(possiblePrize / intTwo);
    }
    let askUser = Number(
      prompt(`
        Choose a roulette pocket number from 0 to ${intRange} 
        Attepts left: ${attemptsCount} 
        Total prize: ${totalPrize} 
        Possible prize on current attempt: ${possiblePrize}`)
    );
    if (askUser === randomInteger && attemptsCount === intThree) {
      alert("Congratulation, you won! Your prize is:" + possiblePrize);
      if (confirm("Do you want to continue?")) {
        totalPrize = totalPrize + maxPrizeAmout;
        maxPrizeAmout = maxPrizeAmout * intTwo;
        attemptsCount = intThree;
        intRange = intRange + intFour;
        continue;
      } else {
        alert(
          "Thank you for your participation. Your prize is: " + possiblePrize
        );
        break;
      }
    } else if (askUser === randomInteger && attemptsCount === intTwo) {
      alert("Congratulation, you won! Your prize is:" + possiblePrize);
      if (confirm("Do you want to continue?")) {
        totalPrize = totalPrize + maxPrizeAmout / intTwo;
        maxPrizeAmout = maxPrizeAmout * intTwo;
        attemptsCount = intThree;
        intRange = intRange + intFour;
        continue;
      } else {
        alert(
          "Thank you for your participation. Your prize is: " + possiblePrize
        );
        break;
      }
    } else if (askUser === randomInteger && attemptsCount === 1) {
      alert("Congratulation, you won! Your prize is:" + possiblePrize);
      if (confirm("Do you want to continue?")) {
        totalPrize = totalPrize + maxPrizeAmout / intFour;
        maxPrizeAmout = maxPrizeAmout * intTwo;
        attemptsCount = intThree;
        intRange = intRange + intFour;
        continue;
      } else {
        alert(
          "Thank you for your participation. Your prize is: " + possiblePrize
        );
        break;
      }
    } else if (askUser !== randomInteger && attemptsCount === 1) {
      possiblePrize = 0;
      alert("Thank you for your participation. Your prize is " + possiblePrize);
      if (confirm("Do you want to play again?")) {
        totalPrize = 0;
        possiblePrize = maxPrizeAmout;
        attemptsCount = intThree;
        continue;
      }
    }
    attemptsCount--;
  } while (attemptsCount > 0);
}
