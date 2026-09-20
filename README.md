# Guess the Number Game 🎮

A simple, interactive number guessing game built with vanilla HTML, CSS, and JavaScript. Perfect for beginners learning web development!

## Project Description

This is a fun, beginner-friendly web application where players try to guess a randomly generated number between 1 and 100. The game provides helpful feedback on each guess and tracks the number of attempts taken.

## Features

✨ **Core Features:**
- 🎯 Randomly generates a number between 1 and 100
- ⌨️ User-friendly input field for guessing
- 💬 Real-time feedback (too high, too low, or correct)
- 📊 Attempt counter to track guesses
- 📝 Displays history of all guesses made
- ✅ Input validation (prevents empty or invalid entries)
- 🎉 Success message with personalized feedback based on attempts
- 🔄 Play Again button to restart the game
- 📱 Fully responsive design for desktop, tablet, and mobile

✨ **Design Features:**
- Clean, modern UI with gradient backgrounds
- Smooth animations and transitions
- Color-coded feedback messages
- Accessible and easy-to-use interface
- No external dependencies or libraries

## Technologies Used

- **HTML5** - Page structure and semantic markup
- **CSS3** - Styling, animations, and responsive design
- **Vanilla JavaScript** - Game logic and interactivity

## How to Run the Project

### Method 1: Direct File Opening
1. Download all three files (`index.html`, `style.css`, `script.js`)
2. Keep them in the same folder
3. Open `index.html` in your web browser
4. Start playing!

### Method 2: Clone from GitHub
```bash
git clone https://github.com/yourusername/guess-the-number-game.git
cd guess-the-number-game
open index.html
```

### Method 3: Python Server (Optional)
If you want to run it on a local server:

**Python 3:**
```bash
python -m http.server 8000
```

**Python 2:**
```bash
python -m SimpleHTTPServer 8000
```

Then open `http://localhost:8000` in your browser.

## File Structure

```
guess-the-number/
│
├── index.html       (Page structure and layout)
├── style.css        (Styling and responsive design)
├── script.js        (Game logic and interactivity)
└── README.md        (This file)
```

## How the Game Works

### 1. **Random Number Generation**
```javascript
randomNumber = Math.floor(Math.random() * 100) + 1;
```
- `Math.random()` generates a decimal between 0 and 1
- Multiply by 100 to get a number between 0 and 100
- `Math.floor()` rounds down to a whole number
- Add 1 to ensure the range is 1-100 (not 0-99)

### 2. **Guess Validation**
The game checks:
- ✅ Input field is not empty
- ✅ Input is a valid number
- ✅ Number is between 1 and 100

If validation fails, an error message is displayed.

### 3. **Comparing Guesses**
```javascript
if (userGuess === randomNumber) {
    // Player won!
} else if (userGuess > randomNumber) {
    // Guess is too high
} else {
    // Guess is too low
}
```

### 4. **Tracking Attempts**
- Each guess increments the `attempts` counter
- All guesses are stored in a `guesses` array
- Guesses are displayed as visual tags for easy reference

### 5. **Restart Functionality**
The "Play Again" button:
- Generates a new random number
- Resets all counters and arrays
- Clears the input field and feedback
- Hides the success message
- Re-enables the input and button

## How HTML, CSS, and JavaScript Communicate

### **HTML** (Structure)
- Provides the skeleton of the game
- Contains input field, buttons, and display areas
- Assigns `id` attributes to elements for JavaScript to target

### **CSS** (Presentation)
- Styles all HTML elements
- Uses colors, shadows, and animations for feedback
- Implements responsive design for all screen sizes
- Provides visual hierarchy and user guidance

### **JavaScript** (Behavior)
```javascript
// JavaScript targets HTML elements by ID
const guessInput = document.getElementById('guessInput');

// JavaScript adds CSS classes for styling
feedback.className = 'feedback too-high';

// JavaScript manipulates HTML content
attemptCount.textContent = attempts;
```

**Data Flow:**
1. User types in the input field
2. JavaScript reads the input value
3. JavaScript compares it to the random number
4. JavaScript updates HTML content (feedback, counters)
5. CSS automatically styles the updated content

## Game Examples

### Example 1: Quick Win
```
Secret Number: 50
Guess 1: 75 → Too high
Guess 2: 25 → Too low
Guess 3: 50 → Correct! ✅ (3 attempts)
```

### Example 2: Lucky Guess
```
Secret Number: 42
Guess 1: 42 → Correct! ✅ (1 attempt)
Message: "Wow! You got it in just 1 attempt! You're a legend! 🌟"
```

## Code Highlights for Beginners

### Event Listeners
```javascript
// Listen for button click
guessButton.addEventListener('click', checkGuess);

// Listen for Enter key
guessInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        checkGuess();
    }
});
```

### Input Validation
```javascript
// Check if empty
if (guessInput.value === '') {
    showFeedback('Please enter a number!', 'error');
    return;
}

// Check if valid number
if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
    showFeedback('Please enter a number between 1 and 100!', 'error');
    return;
}
```

### Displaying Feedback
```javascript
function showFeedback(message, type) {
    feedback.textContent = message;
    feedback.className = 'feedback ' + type;
}
```

## Learning Outcomes

After building this project, you'll understand:
- ✅ How to structure an HTML page semantically
- ✅ How to style elements with CSS and create responsive designs
- ✅ How to write and organize JavaScript code
- ✅ How to use event listeners and handle user input
- ✅ How to work with arrays and loops
- ✅ How to implement game logic and state management
- ✅ How HTML, CSS, and JavaScript work together
- ✅ How to create a complete, functional web application

## Browser Compatibility

Works on all modern browsers:
- ✅ Chrome
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## Future Improvements

Once you've mastered the basic version, try adding these features:

1. **Difficulty Levels**
   - Easy: 1-50
   - Medium: 1-100 (current)
   - Hard: 1-500

2. **Leaderboard**
   - Store best scores in `localStorage`
   - Display top 5 fastest wins

3. **Time Limit**
   - Add a countdown timer
   - Challenge mode with time pressure

4. **Sound Effects**
   - Play sound on correct guess
   - Different sounds for too high/too low

5. **Hints System**
   - Provide hints after 5+ attempts
   - "The number is even/odd"
   - "The number is in the 1-50 range"

6. **Multiplayer Mode**
   - Two players take turns
   - See who finds it in fewer attempts

7. **Statistics**
   - Track best score, average attempts
   - Games won, win rate percentage

8. **Dark Mode**
   - Add a toggle for dark theme
   - Use `prefers-color-scheme` media query

9. **Animations**
   - Animated confetti on win
   - Shake effect when too close
   - Smooth number transitions

10. **Accessibility**
    - Add ARIA labels for screen readers
    - Improve keyboard navigation
    - High contrast mode support

## Tips for Beginners

📚 **Learning Tips:**
- Start by understanding each function's purpose
- Modify CSS colors and fonts to make it your own
- Try adding console.log() to understand the flow
- Experiment with changing the number range
- Test edge cases (1, 100, invalid inputs)

🎯 **Best Practices:**
- Use meaningful variable names (`randomNumber`, not `rn`)
- Add comments to explain complex logic
- Keep functions single-purpose (one job per function)
- Test your code frequently as you build
- Don't copy-paste—type the code yourself to learn

## License

This project is open source and available for anyone to use, modify, and learn from.

## Author

Created as a beginner-friendly portfolio project for learning web development.

---

**Happy Coding!** 🚀 Feel free to modify, improve, and share your version!
