console.log("JS file is connected to HTML! Woo!")

var cardOne = "King";
var cardTwo = "Queen";
var cardThree = "King";
var cardFour = "Queen"; 



/*
if (cardOne === cardThree) {
	alert("You found a match!");	
}
else if (cardOne != cardFour) {
	alert("Sorry, try again.");
}
else if (cardOne != cardTwo) 
	alert("Sorry, try again.");

else if (cardTwo === cardFour){
	alert("You found a match!");	
}
else if (cardTwo != cardThree){
	alert("Sorry, try again.");
}
else if (cardTwo != cardOne) {
	alert("Sorry, try again.")
}	
else if (cardThree === cardOne){
	alert("You found a match!");	
}
else if (cardThree != cardTwo){
	alert("Sorry, try again.");
}
else if (cardThree != cardFour){
	alert("Sorry, try again.")
}
else if (cardFour === cardTwo){
	alert("You found a match!");	
}
else if (cardFour != cardThree){
	alert("Sorry, try again.");
}
else (cardFour != cardOne)
	alert("Sorry, try again.") */

var gameBoard = document.getElementById('game-board');

var createCards = function(){
	for (i = 1; i < cards.length; i++) {
		var gameCard = document.createElement('div')
		gameCard.className ='card'
		gameBoard.appendChild(gameCard)
	}
};










