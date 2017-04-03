// We can access the desired element by using its ID
//
var add = document.getElementById('add');
var del = document.getElementById('del');
var more = document.getElementById('more');
var less = document.getElementById('less');
// The following is an array
var table = document.getElementsByTagName('table');
// The following is an array
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
more.addEventListener('click', function() {
	var computedSize = window.getComputedStyle(table[0], null).getPropertyValue('font-size');
	computedSize = parseFloat(computedSize);
	computedSize++;
	computedSize = computedSize + "px";
	table[0].style.fontSize = computedSize;

});

// Decrease the font size
less.addEventListener('click', function() {
	var computedSize = window.getComputedStyle(table[0], null).getPropertyValue('font-size');
	computedSize = parseFloat(computedSize);
	computedSize = computedSize - 1;
	var computedSize = computedSize + "px";
	table[0].style.fontSize = computedSize;

});