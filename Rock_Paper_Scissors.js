//Define JS variables.
let score_User = 0;//Initialize
let score_Computer = 0;//Initialize
//Define DOM variables.We can use it later
let score_User_span = document.getElementById("user-score");//It is neccesary to update the result depends on who wins and display on HTML
let score_Computer_span = document.getElementById(`comp-score`);//It is neccesary to update the result depends on who wins and display on HTML
const scoreBoard_div = document.querySelector(`div.score-board`);//Return the first element in the document with the class score-board
let result_p = document.querySelector(`div.result > p`);//Return the first element in the document with the class result
const rock_button_div = document.getElementById(`rock`);
const paper_button_div = document.getElementById(`paper`);
const scissors_button_div = document.getElementById(`scissors`);

//Actions
/*What happens if we click on the rock button?
---> First we take the value of the rock button and compare it against computer choice*/
/*How do you know the value of the computer?
---> The computer value is a random choice between those three options*/
/*How does it compare these two values and check who wins and display the result on the DOM?
---> First we need to add events for each button.*/

//Computer function
function getComputerChoice(){
  const choices = [`rock`,`paper`,`scissors`];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
  };

//User function
function game(userChoice) {//receive user input by parameter
const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    //Choices user wins
    case `paperrock` :
    case `rockscissors` :
    case `scissorspaper` :
      win(userChoice,computerChoice);
    break;
    //choices user loses
    case `rockpaper` :
    case `scissorsrock` :
    case `paperscissors` :
      lose(userChoice,computerChoice);
    break;
    //choices both draw
    case `paperpaper` :
    case `rockrock` :
    case `scissorsscissors` :
      draw(userChoice,computerChoice);
    break;
  }
    function convertToWord(letter){
      if(letter=="rock") return "Rock"
      if(letter=="paper") return "Paper"
      return "Scissors"
    }
            //invoking win, loose and draw functions
            function win(userChoice,computerChoice){
              score_User++;//Increases one time the user score
              score_User_span.innerHTML = score_User;//Show user score in the DOM
              score_Computer_span = score_Computer_span;//Show computer score in the DOM
              result_p.innerHTML = convertToWord(userChoice) + " Beats " + convertToWord(computerChoice) + "  You Win !! ";
              document.getElementById(userChoice).classList.add("gree-glow");
              setTimeout(function() {document.getElementById(userChoice).classList.remove("gree-glow")},500);
              }
            function lose(userChoice,computerChoice){
              score_Computer++;//Increases one time the user score
              score_Computer_span.innerHTML = score_Computer;//Show user score in the DOM
              score_User_span = score_User_span;//Show computer score in the DOM
              result_p.innerHTML = convertToWord(userChoice) + " Loses " + convertToWord(computerChoice) + "  You Lost !! ";
              document.getElementById(userChoice).classList.add("red-glow");
              setTimeout(function() {document.getElementById(userChoice).classList.remove("red-glow")},500);
              }
            function draw(userChoice,computerChoice){
              score_User_span.innerHTML = score_User;//Show user score in the DOM
              score_Computer_span.innerHTML = score_Computer;//Show computer score in the DOM
              result_p.innerHTML = convertToWord(userChoice) + " Draw " + convertToWord(computerChoice) + "  Shoot Again !! ";
              document.getElementById(userChoice).classList.add("gray-glow");
              setTimeout(function() {document.getElementById(userChoice).classList.remove("gray-glow")},500);
            }
};

//Main function
function main () {
  rock_button_div.addEventListener(`click`,function press_rock() {
     game(`rock`);//Create function when clicks on rock button
  });
  paper_button_div.addEventListener(`click`,function press_paper() {
     game(`paper`);//Create function when clicks on paper button
  });
  scissors_button_div.addEventListener(`click`,function press_scissors() {
     game(`scissors`);//Create function when clicks on scissors button
  });
}

//Invoking functions
main();
