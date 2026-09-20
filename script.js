// ====== Game Variables ======
let randomNumber;        // The secret number the player needs to guess
let attempts = 0;        // Number of guesses made
let guesses = [];        // Array to store all guesses made by the player
let gameOver = false;    // Flag to check if the game has ended

// ====== Get HTML Elements ======
const guessInput = document.getElementById('guessInput');
const guessButton = document.getElementById('guessButton');
const feedback = document.getElementById('feedback');
const attemptCount = document.getElementById('attemptCount');
const guessesList = document.getElementById('guessesList');
const gameOverSection = document.getElementById('gameOverSection');
const playAgainButton = document.getElementById('playAgainButton');
const finalMessage = document.getElementById('finalMessage');

// ====== Initialize Game ======
// This function is called when the page loads or when "Play Again" is clicked
function initializeGame() {
    // Generate a random number between 1 and 100
    randomNumber = Math.floor(Math.random() * 100) + 1;
    
    // Reset game variables
    attempts = 0;
    guesses = [];
    gameOver = false;
    
    // Clear the input field
    guessInput.value = '';
    
    // Reset feedback message
    feedback.textContent = '';
    feedback.className = 'feedback';
    
    // Reset attempt counter display
    attemptCount.textContent = '0';
    
    // Clear guesses history
    guessesList.innerHTML = '';
    
    // Hide the game over section
    gameOverSection.classList.add('hidden');
    
    // Enable the input field and button
    guessInput.disabled = false;
    guessButton.disabled = false;
    
    // Focus on the input field so user can start typing
    guessInput.focus();
    
    // For debugging (remove this in production)
    console.log('New game started! Secret number is:', randomNumber);
}

// ====== Check User's Guess ======
function checkGuess() {
    // Get the value from the input field
    const userGuess = parseInt(guessInput.value);
    
    // Check if input is empty
    if (guessInput.value === '') {
        showFeedback('Please enter a number!', 'error');
        return;
    }
    
    // Check if input is a valid number between 1 and 100
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        showFeedback('Please enter a number between 1 and 100!', 'error');
        guessInput.value = '';
        return;
    }
    
    // Increase attempt counter
    attempts++;
    attemptCount.textContent = attempts;
    
    // Add guess to the guesses array
    guesses.push(userGuess);
    
    // Update guesses history display
    updateGuessesList();
    
    // Clear the input field
    guessInput.value = '';
    
    // Check if the guess is correct, too high, or too low
    if (userGuess === randomNumber) {
        endGame(userGuess);
    } else if (userGuess > randomNumber) {
        showFeedback('📈 Too high! Try a lower number.', 'too-high');
    } else {
        showFeedback('📉 Too low! Try a higher number.', 'too-low');
    }
    
    // Focus back on input for next guess
    guessInput.focus();
}

// ====== Display Feedback Message ======
function showFeedback(message, type) {
    feedback.textContent = message;
    feedback.className = 'feedback ' + type;
}

// ====== Update Guesses History ======
function updateGuessesList() {
    // Clear the current list
    guessesList.innerHTML = '';
    
    // Loop through all guesses and create tags for each
    guesses.forEach(guess => {
        const guessTag = document.createElement('div');
        guessTag.className = 'guess-tag';
        guessTag.textContent = guess;
        guessesList.appendChild(guessTag);
    });
}

// ====== End Game (Player Won) ======
function endGame(correctGuess) {
    gameOver = true;
    
    // Disable input and button
    guessInput.disabled = true;
    guessButton.disabled = true;
    
    // Hide feedback and show success message
    feedback.className = 'feedback correct';
    feedback.textContent = '✅ Correct! You found it!';
    
    // Create a personalized congratulations message
    let message = `The secret number was <strong>${correctGuess}</strong>!<br>`;
    
    if (attempts === 1) {
        message += `Wow! You got it in just <strong>1 attempt</strong>! You're a legend! 🌟`;
    } else if (attempts <= 5) {
        message += `Great job! You found it in <strong>${attempts} attempts</strong>! 🎯`;
    } else if (attempts <= 10) {
        message += `Nice work! You found it in <strong>${attempts} attempts</strong>! 👍`;
    } else {
        message += `You found it in <strong>${attempts} attempts</strong>. Well done! 💪`;
    }
    
    finalMessage.innerHTML = message;
    
    // Show the game over section
    gameOverSection.classList.remove('hidden');
}

// ====== Play Again ======
function playAgain() {
    initializeGame();
}

// ====== Event Listeners ======
// Listen for "Guess" button click
guessButton.addEventListener('click', checkGuess);

// Listen for Enter key press in the input field
guessInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        checkGuess();
    }
});

// Listen for "Play Again" button click
playAgainButton.addEventListener('click', playAgain);

// ====== Start the Game When Page Loads ======
initializeGame();
