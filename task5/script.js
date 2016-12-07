function a(){
	return 5;
}

function b(bx,by){
	return bx + by;
}

function c(cx,cy) {
	return Math.pow(cx,cy);
}

function d(number) {
	var obj = {
		a : number
	};
	return obj;
}

function e(ex){
	return function(){
		return ex;
	}
}

function f(fx,fy) {
	var array = [];
	for (var i=0; i < fy; i++){

		array.push(fx);
	}
	return array;
}

function g(gx) {
	if (gx) {
		return gx;
	}
	else {
		return 99;
	}
}

function h(hx){
	return hx();
}

function j(array = []){
	return array[0] + array[1] + array[2];
}

function k(obj = {}){
	var sum = 0;
	for (var key in obj){
		sum += obj[key]
	}
	return sum;
}

function m(arrayx = [], arrayy = []){
	var sumarray = [];
	for (var i = 0; i < arrayx.length; i++){
		sumarray[i] = arrayx[i] + arrayy[i];
	}
	return sumarray;
}

function n(nx) {
	return function(ny) {
		return function(nz) {
			return nx + ny + nz;
		}
	}
}

