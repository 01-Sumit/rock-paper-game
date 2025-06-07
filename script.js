function playGame(userChoice) {
  const computerChoice = getComputerChoice();
  const result = getResult(userChoice, computerChoice);
  showResult(userChoice, computerChoice, result);

  setTimeout(() => {
    // Redirect to a new page after 1.5 seconds
    window.location.href = 'winner.html'; // Change this to your desired page
  }, 1500);
}

function showResult(user, computer, result) {
  let message = `You chose ${user} and bot chose ${computer}.`;

  if (result === 'win') {
    userScore++;
    message += ' 🎉 You win!';
  } else if (result === 'lose') {
    computerScore++;
    message += ' 😢 You lose!';
  } else {
    message += ' 🤝 It\'s a draw!';
  }

  userScoreSpan.textContent = userScore;
  computerScoreSpan.textContent = computerScore;
  resultDiv.textContent = message;
  resultDiv.classList.remove('animate');
  void resultDiv.offsetWidth;
  resultDiv.classList.add('animate');
}
