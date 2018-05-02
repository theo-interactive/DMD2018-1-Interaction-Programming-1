var BtnPlus = document.getElementById('btn-plus');
var BtnMinus = document.getElementById('btn-minus');
var BtnMultiple = document.getElementById('btn-multiple');
var BtnDivide = document.getElementById('btn-divide');
var BtnPercent = document.getElementById('btn-percent');
var BtnReset = document.getElementById('btn-reset');
var radioElement = document.getElementsByName('select_number');
var DivResult = document.getElementById('result');
var cc= parseInt(DivResult.firstChild.nodeValue);
var sutjada;

 function selectNumberNumber(){
   
    for(var i = 0; i < radioElement.length; i++){
        if(radioElement[i].checked){
            sutjada = Number(radioElement[i].value);
        }
    }
}

BtnPlus.addEventListener('click', onClickBtnPlus)
function onClickBtnPlus(){

    selectNumberNumber();
       
    console.log('플러스됐다');
    DivResult.innerHTML = Number(DivResult.innerHTML) + sutjada;
    console.log('플러스됐다2');
};

BtnMinus.addEventListener('click', onClickBtnMinus)
function onClickBtnMinus(){

    selectNumberNumber();
       
    console.log('빼기됐다');
    DivResult.innerHTML = Number(DivResult.innerHTML) - sutjada;
    console.log('빼기됐다2');
};

BtnMultiple.addEventListener('click', onClickBtnMultiple)
function onClickBtnMultiple(){

    selectNumberNumber();
       
    console.log('곱셈됐다');
    DivResult.innerHTML = Number(DivResult.innerHTML) * sutjada;
    console.log('곱셈됐다2');
};

BtnDivide.addEventListener('click', onClickBtnDivide)
function onClickBtnDivide(){

    selectNumberNumber();
       
    console.log('나누기됐다');
    DivResult.innerHTML = Number(DivResult.innerHTML) / sutjada;
    console.log('나누기됐다2');
};

BtnPercent.addEventListener('click', onClickBtnPercent)
function onClickBtnPercent(){

    selectNumberNumber();
       
    console.log('퍼센트됐다');
    DivResult.innerHTML = Number(DivResult.innerHTML) / sutjada;
    console.log('퍼센트됐다2');
};

BtnReset.addEventListener('click', onClickBtnReset)
function onClickBtnReset(){
    DivResult.innerHTML=0;
};

//교수님. 저는 var cc= parseInt(DivResult.firstChild.nodeValue); 이렇게 해서, cc 가 typeof를 했을때도 number가 나와서
//0이 되게 놨습니다. 그래서 Number(DivPlus.innerHTML)이걸, number을 빼고, 그냥 cc 만 하려고 했는데, 안됩니다ㅠ
//즉, cc + Number(sutjada); 이렇게 연산을 하려고 했는데,, 값이 더해지지 않습니다. 