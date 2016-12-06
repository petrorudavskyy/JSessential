var x1 = 0, y1 = 0;

var x2 = prompt('Enter x2', '10');
var y2 = prompt('Enter y2', '5');

var distance = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));

alert('First point is: (' + x1 + ', ' + y1 + '), second: ( ' + x2 + ' ,' + y2 + '). The distance is: ' + Math.ceil(distance) + ' .');