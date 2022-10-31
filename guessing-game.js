/* 

Write your guess-game code here! Don't forget to look at the test specs as a guide. You can run the specs
by running "npm test".

In this file, you will also include the event listeners that are needed to interact with your HTML file when
a user clicks a button or adds a guess to the input field.

*/
const form = document.getElementById("form");
const input = document.getElementById("input");
const submitButton = document.getElementById("submit-button");
const feedbackMsg = document.getElementById("feedback-message");
const replayBtn = document.getElementById("replay-button");
const attemptCount = document.getElementById("attempt-count");
counter = 5;
currentGuesses=[];
tracker = 0;
winningNumber = Math.floor(Math.random() * 100);
attemptCount.innerText = counter;
form.addEventListener("submit", (event) => {
  event.preventDefault();
});

function toggleVisibility (...args) {
  for (i = 0; i < args.length; i++) {
    args[i].classList.toggle("hidden");
  }
};

function toggleDisabled (...args) {
  for (i = 0; i < args.length; i++) {
    if (args[i].disabled === true) {
      args[i].disabled = false;
    } else {
      args[i].disabled = true;
    }
  }
};

function gameRestart () {
  form.reset();
  toggleVisibility(feedbackMsg, replayBtn);
  toggleDisabled(input, submitButton);
  counter = 5;
  attemptCount.innerText = counter;
  startGame();
};

function checkForMatch() {
  let numberInput = input.value;
  console.log(numberInput)
  console.log(winningNumber);
  counter--;
  attemptCount.innerText = counter;
  if (numberInput == winningNumber && counter >= 0) {
    toggleDisabled(input, submitButton);
    feedbackMsg.innerText = `You won! The winning number was ${winningNumber}!`;
    feedbackMsg.classList.toggle("hidden");
    replayBtn.classList.toggle("hidden");
  }
  else if (!(numberInput == winningNumber) && counter === 0) {
    toggleDisabled(input, submitButton);
    feedbackMsg.innerText = `The winning number was ${winningNumber}. Better luck next time!`;
    feedbackMsg.classList.toggle("hidden");
    replayBtn.classList.toggle("hidden");
  }
  else {
    if( 5 >= Math.abs(winningNumber-numberInput)){
      hint.innerText = "Within 5!";
    }
    else if( 10 >= Math.abs(winningNumber-numberInput)){
      hint.innerText = "Within 10";
    }
    else if( 20 >= Math.abs(winningNumber-numberInput)){
      hint.innerText = "Within 20";
    }
    else if( 30 >= Math.abs(winningNumber-numberInput)){
      hint.innerText = "Within 30";
    }
    else if( 49 >= Math.abs(winningNumber-numberInput)){
      hint.innerText = "Within 50";
    }
    else if(Math.abs(winningNumber-numberInput) >= 50){
      hint.innerText = "Ice cold";
    }
  }
};

function guessTracker(currentGuesses, tracker){
  let numberInput = input.value;
  currentGuesses[tracker].push = numberInput;
  tracker +=1;
  System.out.println(Arrays.toString(currentGuesses));
  console.log(currentGuesses);
  if(tracker >=currentGuesses.length){
    while(tracker>0){
      currentGuesses[tracker]= "-";
      tracker--;
    }
  }
}

submitButton.addEventListener("click", checkForMatch, guessTracker);
replayBtn.addEventListener("click", gameRestart);