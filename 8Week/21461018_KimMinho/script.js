
// 밑에 라디오버튼을 선택하고, 위의 연산버튼을 클릭하면 result창에 결과값이 나와야함.
var radioBtn = document.getElementsByName('select_number');

var plusBtn = document.getElementById("btn-plus")
var minusBtn = document.getElementById("btn-minus")
var multBtn = document.getElementById("btn-multiple")
var divideBtn = document.getElementById("btn-divide")
var perBtn = document.getElementById("btn-percent")
var resetBtn = document.getElementById("btn-reset")

var result = document.getElementById('result');

var _function = function(){
    for(var i = 0; i < radioBtn.length; i ++){
        if(radioBtn[i].checked){
            BtnNumber = Number(radioBtn[i].value);
        }
    }
}



plusBtn.addEventListener('click', function(){
   _function();
    result.innerHTML = Number(result.innerHTML) + BtnNumber;
});

minusBtn.addEventListener('click', function(){
    _function();
     result.innerHTML = Number(result.innerHTML) - BtnNumber;
 });

 multBtn.addEventListener('click', function(){
    _function();
     result.innerHTML = Number(result.innerHTML) * BtnNumber;
 });

 divideBtn.addEventListener('click', function(){
    _function();
     result.innerHTML = Number(result.innerHTML) / BtnNumber;
 });

 perBtn.addEventListener('click', function(){
    _function();
     result.innerHTML = Number(result.innerHTML) % BtnNumber;
 });

 resetBtn.addEventListener('click', function(){
    result.innerHTML = 0;
 });
