document.addEventListener('DOMContentLoaded', () => {
    const choices = document.querySelectorAll('.choice')
    const resultDiv = document.getElementById('result')
    const userScoreSpan = document.getElementById('user-score')
    const computerScoreSpan = document.getElementById('computer-score')
    const playAgainButton = document.getElementById('play-again')
    const quitButton = document.getElementById('quit')

    let userScore = 0;
    let computerScore = 0;

    const computerChoice = () => {
 const choices = ['rock', 'paper', 'scissors'];
      const randomIndex = Math.floor(Math.random() * choices.length)
        return choices[randomIndex]; };

    const determineWinner = (user, computer) => {
   if (user === computer) 
    { return 'draw';}
  if ((user === 'rock' && computer === 'scissors') ||(user === 'scissors' && computer === 'paper') ||(user === 'paper' && computer === 'rock')) {
            return 'win'; }
        return 'lose';
    };

    const displayResult = (user, computer, result) => {
 resultDiv.textContent = `You chose ${user}, computer chose ${computer}. You ${result}!`;
 if (result === 'win')
     {  userScore++;} 
    else if (result === 'lose') 
        {computerScore++}
  userScoreSpan.textContent = userScore;
     computerScoreSpan.textContent = computerScore;};

    const resetGame = () => {
   resultDiv.textContent = '';
 playAgainButton.classList.add('hidden');
 quitButton.classList.add('hidden');
        choices.forEach(button => button.disabled = false);};

    choices.forEach(button => {
        button.addEventListener('click', () => {
  const userChoice = button.getAttribute('data-choice');
  const computerChoiceResult = computerChoice();
     const result = determineWinner(userChoice, computerChoiceResult);

     displayResult(userChoice, computerChoiceResult, result);

 choices.forEach(button => button.disabled = true);
    playAgainButton.classList.remove('hidden');
    quitButton.classList.remove('hidden');
        });
    });

    playAgainButton.addEventListener('click', resetGame);

    quitButton.addEventListener('click', () => {
    resultDiv.textContent = `Final Score - You: ${userScore}, Computer: ${computerScore}`;
   playAgainButton.classList.add('hidden');
          quitButton.classList.add('hidden');
        choices.forEach(button => button.disabled = true);
    });
});
