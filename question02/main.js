// Guesing Game
var maximumNumber = 100;
// 2:
var randomNumber = Math.floor(Math.random() * maximumNumber);
console.log(randomNumber);
// 3:
var guessStatus = false;
// 4:
var predefinedguesses = [45, 35, 75, 85, 254, 75, 25, 86, 99, 5, 23, 5, 2, 3, 76, 76, 887, 54, 1, 6, 8, 66, 32, 9, 65, 35, 86, 6, 87, 67, 56, 43, 47, 49, 598, 90, 12, 131, 5, 16, 44, 33, 56, 76];
// 5:
var guessNumber = 1;
while (!guessStatus && guessNumber <= predefinedguesses.length) {
    if (predefinedguesses[guessNumber] == randomNumber) {
        console.log("Correct! The number was " + randomNumber);
        guessStatus = true;
    }
    else if (predefinedguesses[guessNumber] < 0 || predefinedguesses[guessNumber] > maximumNumber) {
        console.log("Out of range.");
    }
    else {
        console.log("Incorrect Guess :(");
    }
    ;
    guessNumber++;
}
if (!guessStatus) {
    console.log("You Lost");
}
else {
    console.log("You Won");
}
