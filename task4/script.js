var symb = '#';
var prob = ' ';

var counter = 0;

while (counter < 7){
	var row = '';
	if (counter % 2 == 0) {
		while (row.length < 10){
			row = row + symb + prob;
		}
	}
	else{
		while (row.length <10){
			row = row + prob + symb;
		}
	}
	console.log(row);
	counter++;
}
