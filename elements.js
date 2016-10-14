'use strict';

function log(msg){
	if (msg.join) { for (i in msg) console.log(i); }
	else console.log(msg);
}

var app = angular.module('App',[]);
app.controller('Ctrl', function($scope){});

$(document).ready(function(){
	$('BODY').click(function(){
		removeContextMenu();
	});

	$('#el1').contextmenu(function(e){
		createContextMenu(e);
		return false;
	});
});

function removeContextMenu(){
	$('#context_menu').remove();
}

function createContextMenu(e, data={}){
	removeContextMenu();

	var box = $(document.createElement('div'));
		box.attr('id','context_menu');
		box.append('<header>Действия</header>');
		box.css('left',e.pageX+'px');
		box.css('top',e.pageY+'px');

	$('body').append(box);
}