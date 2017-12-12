'use strict';
var negative = document.querySelector('.punishment').innerHTML;
function repeat(){
	for (var i = 0; i <= 100; i++){
	negative += '<br> He aprendido bien cómo funcionan los bucles' + '<br>';
	}
return negative;
}
document.write(repeat());
