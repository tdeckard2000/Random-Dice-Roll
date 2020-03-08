//get random number
function returnDiceNumber(){
  var randomNumber = (Math.ceil((Math.random())*(5+1)));
  return randomNumber;
}

//save random dice numbers to determine the winner
var diceOneNumber = returnDiceNumber();
var diceTwoNumber = returnDiceNumber();

//convert random dice number to image link
var diceOneImage = ("images/dice" + diceOneNumber + ".png");
var diceTwoImage = ("images/dice" + diceTwoNumber + ".png");

//display the dice images on screen
document.querySelector(".img1").setAttribute("src", diceOneImage);
document.querySelector(".img2").setAttribute("src", diceTwoImage);

//determine the winner and save to variable
var gameWinner = "";

if (diceOneNumber > diceTwoNumber){
  gameWinner = "Player One Wins!";
  document.querySelector(".playerTwoFlag").classList.add("hideMe");
} else if (diceOneNumber < diceTwoNumber){
  gameWinner = "Player Two Wins!";
  document.querySelector(".playerOneFlag").classList.add("hideMe");
} else {
  gameWinner = "It's a tie! Refresh."
    document.querySelector(".playerOneFlag").classList.add("hideMe");
    document.querySelector(".playerTwoFlag").classList.add("hideMe");
}

//write out the winner at the top of the screen
document.querySelector(".container h1").textContent = gameWinner;
