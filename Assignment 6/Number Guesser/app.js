let min = 1,
    max = 10,
    winningNum = getRandomNum(min, max),
    guessesLeft = 3;

// UI Elements
const game = document.querySelector('#game');
const minNum = document.querySelector('.min-num')
const maxNum = document.querySelector('.max-num')
const guessBtn = document.querySelector('#guess-btn')
const guessInput = document.querySelector('#guess-input')
const message = document.querySelector('.message')

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// Play again event listener
game.addEventListener('mousedown', function(e) {
    if(e.target.className == 'play-again') {
        window.location.reload();
    }
});

// Listen for guess
guessBtn.addEventListener('click', function() {
    let guess = parseInt(guessInput.value);
    if(isNaN(guess) || guess < min || guess > max) {
        gameOver(false, `Please enter a number between ${min} and ${max}`);
    }

    // Check if won
    else if(guess == winningNum) {
        // Gamse Over - Won
        gameOver(true, `${winningNum} is correct, YOU WIN!`)
    } else {
        // Wrong number
        guessesLeft -= 1;

        if(guessesLeft == 0) {
            // Game Over - Lost
            gameOver(false, `Game Over, you Lost. The correct number was ${winningNum}`)
        } else {
            // Game continues - answer wrong
            // Change border color
            guessInput.style.borderColor = 'red';
            // Tell user it is the wrong number
            setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, 'red')

            // Clear the input
            guessInput.value = '';
        }
    }
});

// Game over
function gameOver(won, msg) {
    let color;
    won == true ? color = 'green' : color = 'red';
    guessInput.disabled = true;
    // Change border color
    guessInput.style.borderColor = color;
    // Set message
    setMessage(msg, color)

    // Play Again?
    guessBtn.value = 'Play Again';
    guessBtn.className += 'play-again';
}

// Get Winning Number
function getRandomNum(min, max){
    return Math.floor(Math.random()*(max - min + 1) + min);
}

// Set message
function setMessage(msg, color) {
    message.style.color = color;
    message.textContent = msg;
}