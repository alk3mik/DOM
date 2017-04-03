/*
   We can access the desired element by using the method getElementId
   of the object document. All the info of the element will be stored
   in the variable, that is if we log on the console the value of
   for instance add, we will get:

   console.log(add);
   <button id="add">Ajouter une ligne</button>
*/

var add = document.getElementById('add');
var del = document.getElementById('del');
var more = document.getElementById('more');
var less = document.getElementById('less');

/*
   We can do the same with the name of the tags, using the method 
   getElementsByTagName.
   But since there might be more than one element belonging to the same
   class, this method returns always an array, but with only one
   element, as in our html file we hacve only one _table_ .
*/
var table = document.getElementsByTagName('table');

// The same holds true for the following one
//
var row = document.getElementsByTagName('tr');


// Add a line to the table upon click on "Ajouter une ligne"

add.addEventListener('click', function() {

	var tr = document.createElement("tr");
	
	tr.innerHTML = "<td>Texte 4</td><td>Texte 5</td><td>Texte 6</td>";
	
	table[0].appendChild(tr);

});


// Remove the last line from the table upon click on "Effacer la dernière ligne"

del.addEventListener('click', function() {
	
	var lastTr = table[0].lastElementChild;
	
	table[0].removeChild(lastTr);

});


// Increase the font size

/*
	IN the following one we will make use of the _window_ method
	*getComputedStyle*, which can give us the values of all the unspecified
	arguments and that are set by the current browser, like for instance
	the one we need to change here: 'font-size'.
*/

more.addEventListener('click', function() {

	var computedSize = window.getComputedStyle(table[0], null).getPropertyValue('font-size');
	
	computedSize = parseFloat(computedSize);
	
	computedSize++ ;
	
	table[0].style.fontSize = computedSize + "px";

});


// Decrease the font size

less.addEventListener('click', function() {

	var computedSize = window.getComputedStyle(table[0], null).getPropertyValue('font-size');
	
	computedSize = parseFloat(computedSize);
	
	computedSize-- ;
	
	table[0].style.fontSize = computedSize + "px";

});