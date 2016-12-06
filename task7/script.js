start();

//First function , question
function start(){
	var wantPlay = confirm('Do you want to play the game?');

	if (wantPlay) {
		startGame();		
	}	else {
			console.log('Today you will not win the jackpot, but you could');		
	}
}

//second function, startgame

function startGame(){

	var price1 = 10;
	//random number
	var randomNumber = Math.floor(Math.random() * 5 ) + 1;
	//window
	var guess = prompt('I am thinking of a random number between 1 and 5. What is it? Use first attemp;');

		if (parseInt(guess) === randomNumber ) {

  			document.write('<p>You guessed the number!</p>');
  			document.write('<p>You won ' + price1 + ' $');

		}  else {

 			alert('Sorry. The number was ' + randomNumber + ' !');
 			secondAttemp();
		}
}

// third function, second attemp
function secondAttemp(){

	var price2 = 5;
	var randomNumber = Math.floor(Math.random() * 5 ) + 1;

	var guess = prompt('I am thinking of a random number between 1 and 5. What is it? Use second attemp;');

		if (parseInt(guess) === randomNumber ) {

  			document.write('<p>You guessed the number!</p>');
  			document.write('<p>You won ' + price2 + ' $');

		}  else {

 			alert('Sorry. The number was ' + randomNumber + ' !');
 		 	thirdAttemp();	
		}		
}

//fourth function, third attemp
function thirdAttemp(){

	var price3 = 2;
	var randomNumber = Math.floor(Math.random() * 5 ) + 1;

	var guess = prompt('I am thinking of a random number between 1 and 5. What is it? Use third attemp;');

		if (parseInt(guess) === randomNumber ) {

  			document.write('<p>You guessed the number!</p>');
  			document.write('<p>You won ' + price3 + ' $');

		}  else {

 		alert('Sorry. The number was ' + randomNumber + ' !');
 		start();

		}	
}