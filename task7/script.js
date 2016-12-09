var count = 1;
start();

randomNumber = Math.floor(Math.random() * 5 ) + 1;

//First function , question
function start(){
	var wantPlay = confirm('Do you want to play the game?');

	if (wantPlay) {
		startGame();		
	}	else {
			alert('Today you will not win the jackpot, but you could');		
	}

	
}

//second function, startgame


function startGame(){

	var price1 = 10 * count;
	console.log(price1);
	//random number
	var randomNumber = Math.floor(Math.random() * 5 ) + 1;
	//window
	var guess = prompt('I am thinking of a random number between 1 and 5. What is it? Use first attemp;');

		if (parseInt(guess) === randomNumber ) {

  			alert('You guessed the number! You won ' + price1 + ' $');
  			start();

		}  else {

 			alert('Sorry. The number was ' + randomNumber + ' !');
 			secondAttemp();
		}
}

// third function, second attemp
function secondAttemp(){

	var price2 = 5 * count;
	console.log(price2);
	var randomNumber = Math.floor(Math.random() * 5 ) + 1;

	var guess = prompt('I am thinking of a random number between 1 and 5. What is it? Use second attemp;');

		if (parseInt(guess) === randomNumber ) {

			alert('You guessed the number! You won ' + price2 + ' $');
  			start();

		}  else {

 			alert('Sorry. The number was ' + randomNumber + ' !');
 		 	thirdAttemp();	
		}		
}

//fourth function, third attemp
function thirdAttemp(){

	var price3 = 2 * count;
	console.log(price3);
	count *= 3;
	var randomNumber = Math.floor(Math.random() * 5 ) + 1;

	var guess = prompt('I am thinking of a random number between 1 and 5. What is it? Use third attemp;');

		if (parseInt(guess) === randomNumber ) {

			alert('You guessed the number! You won ' + price3 + ' $');
  			start();

		}  else {

 		alert('Sorry. The number was ' + randomNumber + ' !');
 		start();

		}	
}


