// 숫자(1-5) 중 현재 선택된 숫자에 따라 연산자(+, -, *, /, %) 버튼을 클릭시 연산 처리가 가능하도록 구현합니다.
// 연산된 결과는 result 아이디를 가진 영역에 값을 출력합니다.
// 초기화 버튼을 클릭시 숫자(0)를 초기화합니다.

var result = document.getElementById("result");
var radioBtn = document.getElementsByName("select_number");


function calculator(){
    for (var i = 0; i < radioBtn.length; i++){
        if(radioBtn[i].checked){
            numberBtn = Number(radioBtn[i].value);
        }
    }
}


var plusBtn = document.getElementById("btn-plus")

plusBtn.addEventListener("click", function(){
    calculator();
    result.innerHTML = Number(result.innerHTML) + numberBtn;
});


var minusBtn = document.getElementById("btn-minus")

minusBtn.addEventListener("click", function(){
    calculator();
    result.innerHTML = Number(result.innerHTML) - numberBtn;
});


var multipleBtn = document.getElementById("btn-multiple")

multipleBtn.addEventListener("click", function(){
    calculator();
    result.innerHTML = Number(result.innerHTML) * numberBtn;
});


var divideBtn = document.getElementById("btn-divide")

divideBtn.addEventListener("click", function(){
    calculator();
    result.innerHTML = Number(result.innerHTML) / numberBtn;
});


var percentBtn = document.getElementById("btn-percent")

percentBtn.addEventListener("click", function(){
    calculator();
    result.innerHTML = Number(result.innerHTML) % numberBtn;
});


var resetBtn = document.getElementById("btn-reset")

resetBtn.addEventListener("click", function(){
    result.innerHTML = 0;
});