function type () {
    if (typeof aa === (Number)) {
        console.log(true);
    }
    if (typeof bb === (String)) {
        console.log(false);
    }
}
var aa = 5;
var bb = 'text';
type();


var _say = {
    greeting : '안녕하세요',
    myName : '김용원입니다.',
    today : '오늘은',
    month : 5,
    separate : '/',
    day : 3,
    is : '입니다.',
    luck : '행운을 빕니다.',
    my : function() {
        console.log(_say.greeting + ' ' + _say.myName + ' ' + _say.today + ' '
            + _say.month + ' ' + _say.separate + ' ' + _say.day + ' ' + _say.is + ' ' + _say.luck);
        }
    };
_say.myName = '박혜진입니다.';
_say.my();



var number1 = [10, -50, 5, 0, 15, -20, 40, 200];
var number2 = [-1, 40, 10, -30, 20, 0, -100, 15];
var max1 = Math.max.apply(null, number1);
var min1 = Math.min.apply(null, number2);
console.log('최대값 ' + max1 + ', ' + '최소값 ' + min1);

var number3 = [0, 1, 2, 3, 4];
var number4 = [-4, -3, -2, -1, 0];
var max2 = Math.max.apply(null, number3);
var min2 = Math.min.apply(null, number4);
console.log('최대값 ' + max2 + ', ' + '최소값 ' + min2);



var btnNumber = document.getElementById('btn-student-number');
var clickNumber = function() {
        alert('학번이 입력되었습니다.');
        document.getElementById('student-number').innerHTML = '21761048';
    }
btnNumber.addEventListener('click', clickNumber);

var btnName = document.getElementById('btn-student-name');
var clickName = function() {
        alert('이름이 입력되었습니다.');
        document.getElementById('student-name').innerHTML = '박혜진';
    }
btnName.addEventListener('click', clickName);



var btnEven = document.getElementById('btn-even');
var btnEvenResult = document.getElementById('even-result');
var clickEven = function() {
    var promptNumber = prompt('숫자를 입력해주세요.');
}
btnEven.addEventListener('click', clickEven);



var btnColor = document.getElementById('btn-color');
var pElement = document.getElementsByClassName('sentence');
var clickbtnColor = function() {
    pElement[0].classList.add('style');
}
btnColor.addEventListener('click', clickbtnColor);



var btnStar = document.getElementById('btn-star');
var starResult = document.getElementById('star-result');
function clickBtnStar(event) {
    event.preventDefault();
    var number = prompt('숫자를 입력해주세요.');
    var result = '';
    for (var i = 1; i <= number; i++) {
        for (var j = 0; j < i; j++) {
            result += '*';
        }
        result += '<br/>';
    }
    for (i = number; i > 0; i--) {
        for (var j = 0; j < i; j++) {
            result += '*';
        }
        result += '<br/>';
    }
    starResult.innerHTML = result;
}
btnStar.addEventListener('click', clickBtnStar);