console.log("WELCOME TO THE INDIAN QUIZ ")
var readlineSync = require("readline-sync");
var userName = readlineSync.question("What is your name ? : ")
console.log("Hi " + userName + "  Welcome to the Quiz :")
score = 0;

function game(question, answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer === answer) {
    console.log("right")
    score = score + 1
    console.log(score)
  }
  else {
    console.log("wrong ");
    score = score - 1
    console.log(score)
  }

}
game(" what is national animal of INDIA  :  ", "tiger")
game("How many states are there in INDIA :  ", "29")
game(" What is the capital city of INDIA :  ", "delhi")
game(" What is the national bird of INDIA :  ", "peacock")
game(" Where is taj mahal situated in INDIA :  ", "agra")
console.log("Your final score is : " + score)