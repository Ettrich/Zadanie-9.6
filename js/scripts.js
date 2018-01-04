var list = document.getElementById('list');
var add = document.getElementById('addItem');

add.addEventListener('click', function(){
	var number = document.getElementsByTagName('li');
	var elementListy = 'item ' + number.length; 
	list.innerHTML += '<li>' + elementListy + '</li>';
});
