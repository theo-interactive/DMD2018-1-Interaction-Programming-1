

function questTwo(_param){

	if ( typeof _param == 'number' ) {
		console.log ("true");
	} else if ( typeof _param == 'string' ) {
		console.log ("false");
	};

};

questTwo(5);
questTwo('text');







function questThree (_object) {

	var result = '';

	for (var key in _object) {
		result += _object[key];

		if (key !== _object.length -1) {
			result += ' ';
		};
	};

	console.log (result);
	
};

questThree( {
    greeting : '안녕하세요',
    myName : '윤다혜입니다.',
    today : '오늘은',
    month : 5,
    separate : '/',
    day : 3,
    is : '입니다.',
    luck : '행운을 빕니다.'
} );







function questFour (array1, array2) {
	var max = Math.max.apply (null, array1);
	var min = Math.min.apply (null, array2);

	console.log ( "최대값 = " + Math.abs(max) + " / 최소값 = " + Math.abs(min) );
};

questFour([10, -50, 5, 0, 15, -20, 40, 200], [-1, 40, 10, -30, 20, 0, -100, 15]);
questFour([0, 1, 2, 3, 4], [-4, -3, -2, -1, 0]);







var stuNum = document.getElementById ('student-number');
var stuNumBtn = document.getElementById ('btn-student-number');

var stuNumBtnClick =  function () {
	alert ('학번이 입력되었습니다.');
	stuNum.innerHTML = "21661082";
};


var stuName = document.getElementById ('student-name');
var stuNameBtn = document.getElementById ('btn-student-name');

var stuNameBtnClick =  function () {
	alert ('이름이 입력되었습니다.');
	stuName.innerHTML = "윤다혜";
};


stuNumBtn.addEventListener('click', stuNumBtnClick);
stuNameBtn.addEventListener('click', stuNameBtnClick);







var evenBtn = document.getElementById ('btn-even');
var evenResult = document.getElementById ('even-result');

evenBtn.addEventListener('click', function() {
	evenNum = prompt ( '숫자를 입력해주세요.');

	for (var i = 0; i <= evenNum; i++) {

		if (i % 2 == 0) {
			//console.log (i + "짝수");
			evenResult.innerHTML += i;
		};

	}

});







var colorBtn = document.getElementById ('btn-color');
var sentence = document.getElementsByClassName ('sentence');

colorBtn.addEventListener('click', function () {

	for (var i = 0; i < sentence.length; i++) {
		sentence[i].style.color = 'red';
	}

});







function questEight (NumA) {

	if (typeof NumA !== 'number') {
		alert ('숫자만 입력가능합니다.');
		return "false";
	} else {
		return "*";
	};

};

//console.log (questEight ('text'));
console.log (questEight (5));
//console.log (questEight (8));













var starBtn = document.getElementById ('btn-star');
var starResult = document.getElementById ('star-result');


starBtn.addEventListener('click', function () {

	prompt ('숫자를 입력해주세요.');

});