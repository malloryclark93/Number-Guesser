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
          setMessage(`Please Enter A Number Between ${min} and ${max}`, 'red');

        }
        // Check if won
        if(guess === winningNum){
        
          gameOver(true, `${winningNum} is correct, YOU WIN : )`);
       
      } else {
        // Wrong number 
        guessesLeft -= 1;
        // ^^ same as guessesLeft = guessesLeft -1;
        if(guessesLeft === 0){
        // Game over - lost

          gameOver(false, `Game over, you lost. The correct number was ${winningNum}`);

        } else {
        // Changer border color
          guessInput.style.borderColor = 'red';

          // Clear input
          guessInput.value = '';

          // Game continues - answer wrong
          setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, 'red');

          }

        }

      });

       // Game over 
       function gameOver(won, msg){
        let color;
        won === true ? color = 'green' : color = 'red'; 
        
        guessInput.disabled = true;
        // Changer border color
         guessInput.style.borderColor = color;
        // Set text color
         message.style.color = color;
       
         // Set message if they won
         setMessage(msg);

         // Play again 
        guessBtn.value = 'Play Again';
        guessBtn.className += 'play-again';
       }

      // Set message
      function setMessage(msg, color){
        message.style.color = color;
        message.textContent = msg;

      }