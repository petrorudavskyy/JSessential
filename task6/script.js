startGame();

function startGame(){

var pcNumber = Math.random()*100;

	while(userNumber !== pcNumber) {
		var userNumber = prompt ('Please, enter number' , '50');
			
			if (userNumber > pcNumber) {

				alert('Our number is lower. Try again!');
				break;
			}

			else if (userNumber < pcNumber) {

				alert('Our number is higher. Try again!');
				break;
			}
			
			else {

				alert('GREAT! You have cheats)');
				break;

			}
		}
}