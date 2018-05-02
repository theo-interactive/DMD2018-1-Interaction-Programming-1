var divIdResult = document.getElementById ('result');

// 숫자 클릭
var inputName = document.getElementsByTagName ('input');
var _num;
var i = 0;

var _numClick = function () {
    for (i = 0; i < inputName.length; i++) {
        if (inputName[i].checked) {
            _num = inputName[i].value;
            /* 교수님 질문이 있습니당 !!!

            divIdResult.innerHTML = Number (_num);

            위의 식을 넣었던 이유는 일단 숫자를 먼저 클릭했을 때, 결과값에 선택한 숫자를 뜨게 하기 위해 저 식을 넣었던 것인데
            저 식을 넣어버리니 밑에서 연산이 제대로 되어지지 않더라구요.......
            일단 저 식을 지우면 원하는대로 구현이 된다는건 확인을 했는데
            왜 저 식을 넣으면 꼬여버리는 것일까요 ㅠㅠ??
            */

            // rh : 첫 로드할 때와 radio checked 요소가 변경될 때 해당 코드가 실행되어야 할 것 같습니다.
            // 현재 _numClick() 은 각 연산 클릭 이벤트 콜백함수에서 _num 의 값을 찾기 위해 사용 중이므로 원하는 방식으로는 사용할 수 없겠네요.
            // radio input 의 change 이벤트 콜백시에만 _num 의 값이 바뀌고 난 후 divIdResult.innerHTML = Number (_num); 코드가 실행되어야 할 것 같습니다.
            
        };
    };
};

for (i = 0; i < inputName.length; i++) {
    inputName[i].addEventListener ('click', _numClick);
};

// 초기화 클릭
var resetBtn = document.getElementById ('btn-reset');

var _resetClick = function () {
    divIdResult.innerHTML = Number ("0");
};

resetBtn.addEventListener ('click', _resetClick);

// 플러스 클릭
var plusBtn = document.getElementById ("btn-plus");

var _plusClick = function () {
    _numClick ();
    divIdResult.innerHTML = Number(divIdResult.innerHTML) + Number (_num);
}

plusBtn.addEventListener ('click', _plusClick);

// 마이너스 클릭
var minusBtn = document.getElementById ("btn-minus");

var _minusClick = function () {
    _numClick ();
    divIdResult.innerHTML = Number(divIdResult.innerHTML) - Number (_num);
}

minusBtn.addEventListener ('click', _minusClick);

// 멀티플 클릭
var multipleBtn = document.getElementById ("btn-multiple");

var _multipleClick = function () {
    _numClick ();
    divIdResult.innerHTML = Number(divIdResult.innerHTML) * Number (_num);
}

multipleBtn.addEventListener ('click', _multipleClick);

// 디바이드 클릭
var divideBtn = document.getElementById ("btn-divide");

var _divideClick = function () {
    _numClick ();
    divIdResult.innerHTML = Number(divIdResult.innerHTML) / Number (_num);
}

divideBtn.addEventListener ('click', _divideClick);

// 퍼센트 클릭
var percentBtn = document.getElementById ("btn-percent");

var _percentClick = function () {
    _numClick ();
    divIdResult.innerHTML = Number(divIdResult.innerHTML) % Number (_num);
}

percentBtn.addEventListener ('click', _percentClick);