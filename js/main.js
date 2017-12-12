'use strict';
var negative = document.querySelector('.punishment').outerHTML;
var choose = document.querySelector('.colour').outerHTML;
var x = "";
function repeat(){
	for (var i = 0; i <= 100; i++){
	x += negative;
	}
return x;
}
document.write(repeat());
/*
document.addEventListener('DOMContentLoaded', function(){
	document.querySelector('select[name="select"]').onchange=changeEventHandler;
},false);

function changeEventHandler(event){
	if(!event.target.value){
		negative.classList.add('.red');

	}
}
*/
var paint = document.querySelector('.colour');
paint.addEventListener('click', comparar);
function comparar(){

	if (paint === '#red') {
		document.querySelector('.colour').innerHTML
	}else if (paint === '#blue'){
		document.querySelector('.colour').innerHTML

	}else (paint === '#blue'){
		document.querySelector('.colour').innerHTML
	}
