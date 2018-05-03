// 2.
var _num = function () {
    a = 5;
    if (a = Number) {
        console.log ("_num 결과 : true");
    }
};

var _str = function () {
    b = "test";
    if (b = String) {
        console.log ("_str 결과 : false");
    };
}
_num ();
_str ();

// 3. 함수로 고치기 !!!!!
var _self = {
    greeting : '겨스님..',
    myName : '김소이입니다...',
    today : '오늘은',
    month : 5,
    separate : '/',
    day : 3,
    is : '시험입니당....',
    luck : '저는 멍청이에요....시험만 보면 떨리고 문제를 이해를 못하겟서요,,, 교수님.....이거 왠지 이렇게 하는ㄱㅓ 아닌거같아요 저 함수 선언 안하구 변수 선언 헀어요 ㅠㅠㅠ........'
};

console.log (
    _self.greeting + " " + _self.myName + " "+ _self.today + " " + _self.month + _self.separate + _self.day + " " + _self.is + " " + _self.luck
);

// 4.
var c = function(_arr1, _arr2)  {
    _arr1 = [10, -50, 5, 0, 15, -20, 40, 200];
    _arr2 = [-1, 40, 10, -30, 20, 0, -100, 15];
    console.log ("_arr1 = [10, -50, 5, 0, 15, -20, 40, 200] 결과 : " + Math.max.apply(null, _arr1));
    console.log ("_arr2 = [-1, 40, 10, -30, 20, 0, -100, 15] 결과 : " + Math.min.apply(null, _arr2));
};
c ();

// 5.
var _numSpanId = document.getElementById ("student-number");
var _numBtn = document.getElementById ('btn-student-number');

var _namSpanId = document.getElementById ('student-name');
var _namBtn = document.getElementById ('btn-student-name');

var numBtnClick = function () {
    _numSpanId.innerHTML = "21561041";
    if (_numBtn.click) {
        alert ("학번이 입력되었습니다.");
    };
};
_numBtn.addEventListener ('click', numBtnClick);

var namBtnClick = function () {
    _namSpanId.innerHTML = "kim SOI";
    if (_numBtn.click) {
        alert ("이름이 입력되었습니다.");
    };
};
_namBtn.addEventListener ('click', namBtnClick);

// 6. 어흐흑.. 이건 못하겠습니다..
var btnEvt = document.getElementById ('btn-even');
var numResult = document.getElementById ("even-result");

var btnEvtClick = function () {
    var _userNum = prompt ("숫자를 입력해주세요.");
        for (i = 1; i <= _userNum; i++) {
            if ((i % 2) === 1) {
  
            } else {
                numResult.innerHTML = _userNum + " 교수님 죄송해여...";
            };
        }      
};
btnEvt.addEventListener ('click', btnEvtClick);

// 7. 어렵습니다 이것도..
var colorBtn = document.getElementById ("btn-color");
var _pE = document.getElementsByClassName ('sentence');
var iscolorBtnClick = false;

var colorBtnClick = function () {
    for (i = 0; i<_pE.length; i++) {
        if (!iscolorBtnClick) {
            _pE[i].classList.add ('style1');
            iscolorBtnClick = true;
        } else {
            _pE[i].classList.remove ('style1');
            iscolorBtnClick = false;
        };
    };
};
colorBtn.addEventListener('click', colorBtnClick);

// 8.

// 9.

// 10.





