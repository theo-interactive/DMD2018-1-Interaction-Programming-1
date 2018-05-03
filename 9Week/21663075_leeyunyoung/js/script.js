// console.log('load');



// 문제 2.


// 문제 3.

var a = '';

var _obj = {
    greeting : '안녕하세요',
    myName : '김용원입니다.',
    today : '오늘은',
    month : 5,
    separate : '/',
    day : 3,
    is : '입니다.',
    luck : '행운을 빕니다.'
}
// console.log(_obj);

for(var i = 0; i < _obj.length; i++){
    a += _obj[i];
};

console.log(a);


    



// 문제 4.
var _numberOne = [10, -50, 5, 0, 15, -20, 40, 200]

var _numberTwo = [-1, 40, 10, -30, 20, 0, -100, 15]

var min = Math.min.apply(null, _numberOne);

var max = Math.max.apply(null, _numberTwo);


console.log("최소값 : " + min);

console.log("최대값 : " + max);







// 문제 5.
var studentNumberBtn = document.getElementById('btn-student-number');
var numberInsert = document.getElementById('student-number');

var studentNumberClick = function(){
    var addNumber = document.createElement('span')
    addNumber.innerHTML += '21663075';

    numberInsert.appendChild(addNumber);
}

studentNumberBtn.addEventListener('click',studentNumberClick);


var studentNameBtn = document.getElementById('btn-student-name');
var nameInsert = document.getElementById('student-name');

var studentNameClick = function(){
    var addName = document.createElement('span')
    addName.innerHTML += '이윤영';

    nameInsert.appendChild(addName);
}

studentNameBtn.addEventListener('click',studentNameClick);







// 문제 6.
var evenBtn = document.getElementById('btn-even');
var evenClick = function(){
    var numberInsert = prompt('숫자를 입력해주세요.')
    if( numberInsert == 10){
        console.log('모르겠다..');
    }
}

evenBtn.addEventListener('click', evenClick);







// 문제 7.


var colorChange = document.getElementById('btn-color');
var clickElement = document.getElementsByClassName('sentence');
/*
var isBtn1Click = false;
var isBtn2Click = false;

var changeBtn1 = function(){
    // console.log('스타일 바꾸기');
    if(!isBtn1Click){
        clickElement.classList.add("sentence");
    }

}


colorChange.addEventListener('click', changeBtn1);
*/

function clickEventDiv(){
    this.classList.add('sentence');
}


clickElement [0].addEventListener('click', clickEventDiv);




// 문제 8.


// 문제 9.

// 문제 10.
var statBtn = document.getElementById('btn-star');

var starClick = function(){
    prompt('숫자를 입력해주세요.')
}

statBtn.addEventListener('click', starClick);




