'use strict';

$(document).ready(function(){

	$(document).mousemove(function(arg){
		//console.log('мышь движется');
	});

	var element1 = $('#el1');
	console.log(element1);

	element1.mousedown(function(obj){
		obj.pressed = true;
		console.log('pressed: '+obj.pressed);
	});

	element1.mouseup(function(obj){
		obj.pressed = false;
		console.log('pressed: '+obj.pressed);
	});
});