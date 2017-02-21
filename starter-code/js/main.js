console.log("JS file is connected to HTML! Woo!")

var cards = ['Queen', 'Queen', 'King', 'King'];
var cardsInPlay = []





/*
if (cardOne === cardThree) {
	alert("You found a match!");	
}
else  (cardOne != cardFour) {
	alert("Sorry, try again.");
}*/


var gameBoard = document.getElementById('game-board');

var createCards = function(){
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('div');
		cardElement.className ='card';
		cardElement.setAttribute('data-card', cards[i]);
		cardElement.addEventListener('click', isTwoCards);
		gameBoard.appendChild(cardElement);
		
	}
};

var isMatch = function(cards) {
	if (cards[0] === cards[1]) {
		alert("You found a match!");
	} else if (cards[2] === cards[3]) {
		alert("You found a match!")	
	} else {
		alert("Sorry, try again.")
	}
}


var isTwoCards = function(){
	cardsInPlay.push(this.getAttribute('data-card'));
	console.log(this.getAttribute('data-card'));
	if (this.getAttribute('data-card') === 'king') {
		this.innerHTML = "<img src='king.png'>"; 
	} else {
		this.innerHTML = "<img src='queen.png'>"; 
	}  
  if (cardsInPlay.length === 2) {  
    isMatch(cardsInPlay);    
    cardsInPlay = [];
  }
}


createCards();






