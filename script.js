// Variables
let randomNumber = Math.floor(Math.random() * 100) + 1;
let attemptsLeft = 10;

// Get elements
const guessInput = document.getElementById('guessInput');
const guessBtn = document.getElementById('guessBtn');
const resetBtn = document.getElementById('resetBtn');
const message = document.getElementById('message');
const attempts = document.getElementById('attempts');

// Function to check the guess
guessBtn.addEventListener('click', function() {
    const userGuess = parseInt(guessInput.value);

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        message.textContent = 'Please enter a valid number between 1 and 10.';
    } else {
        attemptsLeft--;

        if (userGuess === randomNumber) {
            message.textContent = 'Congratulations! You guessed the number!';
            guessBtn.disabled = true;
        } else if (attemptsLeft === 0) {
            message.textContent = `Game over! The number was ${randomNumber}.`;
            guessBtn.disabled = true;
        } else if (userGuess > randomNumber) {
            message.textContent = 'Too high! Try again.';
        } else {
            message.textContent = 'Too low! Try again.';
        }
        
        attempts.textContent = attemptsLeft;
    }
});

// Function to reset the game
resetBtn.addEventListener('click', function() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attemptsLeft = 10;
    message.textContent = '';
    guessInput.value = '';
    attempts.textContent = attemptsLeft;
    guessBtn.disabled = false;
});
