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

// rh : cc + sutjada 연산했을 때, 연산식은 성립이 되고 있습니다.
// 첫 로드 후, input radio 중에서 체크된 요소가 없기 때문에 selectNumberNumber() 를 호출해도 sutjada 는 선언이후 값이 할당되어 있지 않은 상태로 됩니다.
// var sutjada 선언시 초기값으로 0 을 할당하면, selectNumberNumber() 호출시 radio 요소 중 체크된 사항이 없어 연산 결과가 NaN 이 되는 경우는 없을 듯 합니다.
// 그리고 cc 는 전역에서 선언시 값을 한번만 찾아내고 계속해서 값이 그대로 유지되기 때문에, 클릭 콜백함수에서 DivResult 의 결과값을 cc 값에 업데이트 해야 추가적으로 연산이 이뤄집니다.
// * onClickBtnPercent() 의 연산 확인바랍니다.