

// 숫자 선택.
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


    // 더하기
    var plusBotton = document.getElementById ("btn-plus");

    var plusClick = function  () {
        numberClick();
        resultArea.innerHTML = Number (resultArea.innerHTML) + Number(number);
    };

    plusBotton.addEventListener('click', plusClick);


    // 빼기
    var minusBotton = document.getElementById ("btn-minus");

    var minusClick = function  () {
        numberClick();
        resultArea.innerHTML = Number (resultArea.innerHTML) - Number(number);
    };
 
    minusBotton.addEventListener('click', minusClick);


    // 곱하기
    var multipleBotton = document.getElementById ("btn-multiple");

    var multipleClick = function  () {
        numberClick();
        resultArea.innerHTML = Number (resultArea.innerHTML) * Number(number);
    };
 
    multipleBotton.addEventListener('click', multipleClick);


    // 나누기
    var divideBotton = document.getElementById ("btn-divide");

    var divideClick = function  () {
        numberClick();
        resultArea.innerHTML = Number (resultArea.innerHTML) * Number(number);
    };
 
    divideBotton.addEventListener('click', divideClick);
 

    // 나머지
    var percentBotton = document.getElementById ("btn-percent");

    var percentClick = function  () {
        numberClick();
        resultArea.innerHTML = Number (resultArea.innerHTML) % Number(number);
    };

    percentBotton.addEventListener('click', percentClick);


    // 초기화
    var resetBotton = document.getElementById ("btn-reset");

    var resetClick = function  () {
        resultArea.innerHTML = 0;
    };
    
    resetBotton.addEventListener('click', resetClick);