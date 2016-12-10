start();
//first function
function start(){
	//confirm if you want to play
	var wantPlay = confirm('Do you want to play the game?');
	//if ok -> function, if not-> alert
	if (wantPlay) {
		startGame();		
	}	else {
			alert('Ok,not today(');		
	}
}
//second function
function startGame() {
	//random number
	var pcNumber = Math.random()*100;
	//user number
	var userNumber = prompt ('Please, enter number' , '50');

			if (userNumber > pcNumber) {
				alert('Our number is lower. Try again!');
				start();
			}
			else if (userNumber < pcNumber) {
				alert('Our number is higher. Try again!');
				start();	
			}
			else {
				alert('GREAT! You have cheats)');
				start();
			}
}


