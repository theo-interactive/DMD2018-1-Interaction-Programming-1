var bg = document.getElementsByClassName ('gallery_bg')[0];
var gallery = document.getElementById ('gallery');

var pre = gallery.getElementsByClassName ('pre')[0];
var preItem = pre.getElementsByClassName ('pre-item');
var preA = pre.getElementsByTagName ('a');

var view = gallery.getElementsByClassName ('view')[0];
var viewItem = view.getElementsByClassName ('view-item');

var next = gallery.getElementsByClassName ('next')[0];
var nextItem = next.getElementsByClassName ('next-item');
var nextA = next.getElementsByTagName ('a');

var btn = gallery.getElementsByClassName ('btn')[0];
var btnList = btn.getElementsByTagName ('li');
var preBTN = btn.getElementsByClassName ('pre-btn')[0];
var nextBTN = btn.getElementsByClassName ('next-btn')[0];





var _a = 0;
var _b = 4;
var _c = 1;

var _num = _a;
var _sum = _b;
var _jum = _c;





preBTN.addEventListener('click', function(event) {

		event.preventDefault();
		console.log ('Pre BTN');

});

nextBTN.addEventListener('click', function(event) {

		event.preventDefault();
		console.log ('Next BTN');

});


function btnListClick (id) {

	preItem[id].addEventListener('click', function(event) {

		event.preventDefault();
		console.log ('Pre Image', id);

		_b  = id - 1;

		if (_b == -1) {
			_b = 4;
		}

		_c  = id + 1;

		if (_c == 5) {
			_c = 0;
		}

		viewItem[_num].classList.remove('selected');
		viewItem[id].classList.add ('selected');

		preItem[_sum].classList.remove('selected');
		preItem[_b].classList.add ('selected');

		nextItem[_jum].classList.remove('selected');
		nextItem[_c].classList.add ('selected');

		_num = id;
		_sum = _b;
		_jum = _c;

	});

	nextItem[id].addEventListener('click', function(event) {

		event.preventDefault();
		console.log ('Next Image', id);

		_b  = id - 1;

		if (_b == -1) {
			_b = 4;
		}

		_c  = id + 1;

		if (_c == 5) {
			_c = 0;
		}

		viewItem[_num].classList.remove('selected');
		viewItem[id].classList.add ('selected');

		preItem[_sum].classList.remove('selected');
		preItem[_b].classList.add ('selected');

		nextItem[_jum].classList.remove('selected');
		nextItem[_c].classList.add ('selected');

		_num = id;
		_sum = _b;
		_jum = _c;

	});

};



for (var i = 0; i < viewItem.length; i++) {

	btnListClick(i);

};


