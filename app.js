let maxNum = prompt('What is the highest number you would like to play?');
const mysteryNum = Math.floor(Math.random() * maxNum) + 1;

let guess = prompt('Guess the number:');
let counter = 0;

while (parseInt(guess) !== mysteryNum) {
    if (guess === 'q') {
        break;
    }
    else if (parseInt(guess) > mysteryNum) {
        guess = prompt(`${guess} is too high. Try again:`);
        counter++;
    }
    else {
        guess = prompt(`${guess} is too low. Try again:`);
        counter++;
    }
}

if (guess === 'q') {
    console.log("YOU QUIT!");
} else {
    console.log(`Good Game! It took you ${counter} guesses!`)
}