let targetNumber = Math.floor(Math.random() * 100) + 1;

function checkGuess() {
    const userGuess = Number(document.getElementById('userGuess').value);
    const feedback = document.getElementById('feedback');

    if (userGuess > targetNumber) {
        feedback.textContent = 'Your guess is too high.';
    } else if (userGuess < targetNumber) {
        feedback.textContent = 'Your guess is too low.';
    } else {
        feedback.textContent = 'Congratulations! You guessed the correct number!';
    }
}
