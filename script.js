document.addEventListener("DOMContentLoaded", () => {
  const choices = document.querySelectorAll('.choice');

  choices.forEach(button => {
    button.addEventListener('click', () => {
      const userChoice = button.getAttribute('data-choice');
      const computerChoice = getComputerChoice();
      const result = getResult(userChoice, computerChoice);

      // Store in localStorage
      localStorage.setItem("gameResult", result);
      localStorage.setItem("userChoice", userChoice);
      localStorage.setItem("computerChoice", computerChoice);

      // Redirect to loading
      window.location.href = 'loading.html';
    });
  });

  function getComputerChoice() {
    const options = ['rock', 'paper', 'scissors'];
    return options[Math.floor(Math.random() * options.length)];
  }

  function getResult(user, computer) {
    if (user === computer) return 'draw';
    if ((user === 'rock' && computer === 'scissors') ||
        (user === 'paper' && computer === 'rock') ||
        (user === 'scissors' && computer === 'paper')) {
      return 'win';
    }
    return 'lose';
  }
});
