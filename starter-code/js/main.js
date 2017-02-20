console.log("JS file is connected to HTML! Woo!")

var cardOne = "King";
var cardTwo = "Queen";
var cardThree = "King";
var cardFour = "Queen"; 



//Card 1
if (cardOne === cardThree) {
	alert("You found a match!");	
}
else if (cardOne != cardFour) {
	alert("Sorry, try again.");
}
else (cardOne != cardTwo) 
	alert("Sorry, try again.");



//Card 2
if (cardTwo === cardFour){
	alert("You found a match!");	
}
else if (cardTwo != cardThree){
	alert("Sorry, try again.");
}
else (cardTwo != cardOne)
	alert("Sorry, try again.")

	
//Card 3
if (cardThree === cardOne){
	alert("You found a match!");	
}
else if (cardThree != cardTwo){
	alert("Sorry, try again.");
}
else (cardThree != cardFour)
	alert("Sorry, try again.")


//Card 4
if (cardFour === cardTwo){
	alert("You found a match!");	
}
else if (cardFour != cardThree){
	alert("Sorry, try again.");
}
else (cardFour != cardOne)
	alert("Sorry, try again.")
