/* Select Number */

var radioElement = document.getElementsByName('select_number');
var selectNumber;

/*
for (var i = 0; i < radioElement.length; i++) {
    radioElement[i].addEventListener('change', changeRadio);  
}

function changeRadio() {
    selectNumber = getNumber();
    console.log(selectNumber);
}
*/

function getNumber () {
    for (var i = 0; i < radioElement.length; i++) {
        if (radioElement[i].checked) {
            selectNumber = radioElement[i].value;
        }
    }
    return Number(selectNumber);
}


/* Calculation */

var result = document.getElementById('result');

var btnPlus = document.getElementById('btn-plus');
function resultPlus() {
    getNumber();
    result.innerHTML = Number(result.innerHTML) + Number(selectNumber);
}
btnPlus.addEventListener('click', resultPlus);

var btnMinus = document.getElementById('btn-minus');
function resultMinus() {
    getNumber();
    result.innerHTML = Number(result.innerHTML) - Number(selectNumber);
}
btnMinus.addEventListener('click', resultMinus);

var btnMultiple = document.getElementById('btn-multiple');
function resultMultiple() {
    getNumber();
    result.innerHTML = Number(result.innerHTML) * Number(selectNumber);
}
btnMultiple.addEventListener('click', resultMultiple);

var btnDivide = document.getElementById('btn-divide');
function resultDivide() {
    getNumber();
    result.innerHTML = Number(result.innerHTML) / Number(selectNumber);
}
btnDivide.addEventListener('click', resultDivide);

var btnPercent = document.getElementById('btn-percent');
function resultPercent() {
    getNumber();
    result.innerHTML = Number(result.innerHTML) % Number(selectNumber);
}
btnPercent.addEventListener('click', resultPercent);

var btnReset = document.getElementById('btn-reset');
function resultReset() {
    result.innerHTML = 0;
}
btnReset.addEventListener('click', resultReset);