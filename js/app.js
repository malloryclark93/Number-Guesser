// Game instructions
  // Player must guess a number of a min and max num
  // Player gets a certain amount of guesses
  // Notify player of guesses remaining
  // Notify the player of the correct answer if they loose
  // Let the player choose to play again

  // Game values 
  let min = 1, 
      max = 10,
      winningNum = 2,
      guessesLeft = 3;

// UI Elements 
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

// Assign UI min and max 
      minNum.textContent = min;
      maxNum.textContent = max;

      // Listen for guess 
      guessBtn.addEventListener('click', function(){
        let guess = parseInt(guessInput.value);
          console.log(guess);
        // Validate our input
        if(isNaN(guess) || guess < min || guess > max){
          setMessage(`Please Enter A Number Between ${min} and ${max}`, `red`);

        }
        // Check if won
        if(guess === winningNum){
        // Disable input
          guessInput.disabled = true;
        // Changer border color
        guessInput.style.borderColor = 'green';
        // Set message if they won
        setMessage(`${winningNum} is correct, YOU WIN : )`, 'green');
       
      }

      });

      // Set message
      function setMessage(msg, color){
        message.style.color = color;
        message.textContent = msg;

      }