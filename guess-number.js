let welcomeName = prompt('What\'s you\'re name?', '');
alert(`Welcome ${welcomeName}!`)

let rangeMin = prompt('Determine the range for the number you will try to guess. What do you choose as the lowest number?', '');
let rangeMax = prompt('What do you choose as the highest number?')

const checkNumber = () => {
    let guessNumber = prompt(`Now guess a number between ${rangeMin} and ${rangeMax}!`, '');
    let randomNumber = function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    }
    let numberToGuess = randomNumber(parseInt(rangeMin), parseInt(rangeMax));
    console.log(numberToGuess);
    if (guessNumber != numberToGuess) {
        alert('That is incorrect');
    } else {
        alert('Congrats, you won!');
        alert(`Goodbye ${welcomeName}, see you next time :)`)
    }
}
console.log(checkNumber());

// alert(`Goodbye ${welcomeName}, see you next time :)`)


