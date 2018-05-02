var resultArea = document.getElementById('result');

var nGroup = document.getElementsByName('select_number');

var plusBTN = document.getElementById('btn-plus');
var minusBTN = document.getElementById('btn-minus');
var multipleBTN = document.getElementById('btn-multiple');
var divideBTN = document.getElementById('btn-divide');
var percentBTN = document.getElementById('btn-percent');

var resetBTN = document.getElementById('btn-reset');



var checkNum = function () {
	for (var i = 0; i < nGroup.length; i++){
		if (nGroup[i].checked) {
			checked = Number(nGroup[i].value);
		}
	}
};


plusBTN.addEventListener ('click', function () {

	checkNum ();
	resultArea.innerHTML = Number(resultArea.innerHTML) + checked;

});


minusBTN.addEventListener ('click', function () {

	checkNum ();
	resultArea.innerHTML = Number(resultArea.innerHTML) - checked;

});


multipleBTN.addEventListener ('click', function () {

	checkNum ();
	resultArea.innerHTML = Number(resultArea.innerHTML) * checked;

});


divideBTN.addEventListener ('click', function () {

	checkNum ();
	resultArea.innerHTML = Number(resultArea.innerHTML) / checked;

});


percentBTN.addEventListener ('click', function () {

	checkNum ();
	resultArea.innerHTML = Number(resultArea.innerHTML) % checked;

});


resetBTN.addEventListener ('click', function() {
	resultArea.innerHTML = 0;
});