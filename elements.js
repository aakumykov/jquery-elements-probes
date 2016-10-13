'use strict';

var app = angular.module('App',[]);

app.controller('Ctrl', function($scope){
	$scope.element;

});

$(document).ready(function(){

	// var element1 = $('#el1');
	// console.log(element1);

	console.log(
		angular.element(
			$('#element1').attr('id')
		)
	);

	// app.element.on('mousedown', function(obj){
	// 	// obj.pressed = true;
	// 	// console.log('pressed: '+obj.pressed);
	// 	alert
	// });

	// element1.mouseup(function(obj){
	// 	obj.pressed = false;
	// 	console.log('pressed: '+obj.pressed);
	// });
});