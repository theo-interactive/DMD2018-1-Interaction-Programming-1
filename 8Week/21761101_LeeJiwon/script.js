var resultElement = document.getElementById('result');

var numberGroup = document.getElementsByName('select_number');

var plusBtn = document.getElementById('btn-plus');
var minusBtn = document.getElementById('btn-minus');
var multipleBtn = document.getElementById('btn-multiple');
var divideBtn = document.getElementById('btn-divide');
var percentBtn = document.getElementById('btn-percent');
var resetBtn = document.getElementById('btn-reset');

// 1. 체크된 라디오값 받아오기

var resultValue;

var NumberChecked = function() {
    for(var i = 0; i < numberGroup.length; i++){
        if(numberGroup[i].checked == true){
        // console.log(numberGroup[i].value);
        resultValue = numberGroup[i].value;
        }
    }
    return resultValue;
}
NumberChecked();

// 2. 버튼을 클릭할 시 사칙연산

function onClickPlusBtn(){
    NumberChecked();
    resultElement.innerHTML = Number(resultElement.innerHTML) + Number(resultValue);
}
plusBtn.addEventListener('click', onClickPlusBtn);

function onClickminusBtn(){
    NumberChecked();
    resultElement.innerHTML = Number(resultElement.innerHTML) - Number(resultValue);
};
minusBtn.addEventListener('click', onClickminusBtn);

function onClickmultipleBtn(){
    NumberChecked();
    resultElement.innerHTML = Number(resultElement.innerHTML) * Number(resultValue);
};
multipleBtn.addEventListener('click', onClickmultipleBtn);

function onClickdivideBtn(){
    NumberChecked();
    resultElement.innerHTML = Number(resultElement.innerHTML) / Number(resultValue);
}
divideBtn.addEventListener('click', onClickdivideBtn);

function onClickpercentBtn(){
    NumberChecked();
    resultElement.innerHTML = Number(resultElement.innerHTML) % Number(resultValue);
}
percentBtn.addEventListener('click', onClickpercentBtn);

function onClickResetBtn(){
    NumberChecked();
    resultElement.innerHTML = '0';
}
resetBtn.addEventListener('click', onClickResetBtn);
