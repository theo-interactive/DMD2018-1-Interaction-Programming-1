


/*
1. 숫자(1-5) 중 현재 선택된 숫자에 따라 연산자(+, -, *, /, %) 버튼을 클릭시 연산 처리가 가능하도록 구현합니다.
2. 연산된 결과는 result 아이디를 가진 영역에 값을 출력합니다.
3. 초기화 버튼을 클릭시 숫자(0)를 초기화합니다.
*/




var checkedNumber = document.getElementsByName("select_number");

var number;
var numberClick = function(){
    for( var i = 0; i < checkedNumber.length; i++){
        if(checkedNumber[i].checked){
            number = Number(checkedNumber[i].value);
        }
    }
};


// 계산
var resultArea = document.getElementById("result");


    // + 더하기
    var plusBotton = document.getElementById ("btn-plus");

    var plusClick = function () 
    {
        numberClick();
        resultArea.innerHTML = Number (resultArea.innerHTML) + Number(number);
    };
    plusBotton.addEventListener('click', plusClick);


    // - 빼기
    var minusBotton = document.getElementById ("btn-minus");

    var minusClick = function () 
    {
        numberClick();
        resultArea.innerHTML = Number (resultArea.innerHTML) - Number(number);
    };
    minusBotton.addEventListener('click', minusClick);


    // * 곱하기
    var multipleBotton = document.getElementById ("btn-multiple");

    var multipleClick = function () 
    {
        numberClick();
        resultArea.innerHTML = Number (resultArea.innerHTML) * Number(number);
    };
    multipleBotton.addEventListener('click', multipleClick);


    // / 나누기
    var divideBotton = document.getElementById ("btn-divide");

    var divideClick = function () 
    {
        numberClick();
        resultArea.innerHTML = Number (resultArea.innerHTML) * Number(number);
    };
    divideBotton.addEventListener('click', divideClick);


    // % 나머지
    var percentBotton = document.getElementById ("btn-percent");

    var percentClick = function () 
    {
        numberClick();
        resultArea.innerHTML = Number (resultArea.innerHTML) % Number(number);
    };
    percentBotton.addEventListener('click', percentClick);


    // 숫자 초기화
    var resetBotton = document.getElementById ("btn-reset");

    var resetClick = function () 
    {
        resultArea.innerHTML = 0;
    };
    resetBotton.addEventListener('click', resetClick);


 




