var gallery = document.getElementById ('gallery');

var pre = gallery.getElementsByClassName ('preview')[0];
var preItem = pre.getElementsByClassName ('pre-item');
var preA = pre.getElementsByTagName ('a');

var list = gallery.getElementsByClassName ('list')[0];
var listItem = list.getElementsByTagName ('li');
var listA = list.getElementsByTagName ('a');

var view = gallery.getElementsByClassName ('view')[0];
var viewItem = view.getElementsByClassName ('view-item');



function click (num1, num2) {

	sum = num1 + num2;

};



click (1, 2);
console.log(sum);






var _a = 0;
var _b = 4;

var _num = _a;
var _sum = _b;


function btnListClick (id) {

	listA[id].addEventListener('click', function(event) {

		event.preventDefault();
		console.log ('List Click', id);

		_a  = id;
		_b  = id - 1;

		if (_b == -1) {
			_b = 4;
		}

		changeImage();

	});

	preA[id].addEventListener('click', function(event) {

		event.preventDefault();
		console.log ('Pre Click', id);

		_b  = id - 1;

		if (_b == -1) {
			_b = 4;
		}

		preItem[_sum].classList.remove('selected');
		preItem[_b].classList.add ('selected');

		viewItem[_num].classList.remove('selected');
		viewItem[id].classList.add ('selected');

		listItem[_num].classList.remove('selected');
		listItem[id].classList.add ('selected');

		_num = id;
		_sum = _b;

	});

};




function changeImage() {

	preItem[_sum].classList.remove('selected');
	preItem[_b].classList.add ('selected');

	listItem[_num].classList.remove('selected');
	listItem[_a].classList.add ('selected');

	viewItem[_num].classList.remove('selected');
	viewItem[_a].classList.add ('selected');

	_num = _a;
	_sum = _b;

};



for (var i = 0; i < listItem.length; i++) {

	btnListClick(i);

};
