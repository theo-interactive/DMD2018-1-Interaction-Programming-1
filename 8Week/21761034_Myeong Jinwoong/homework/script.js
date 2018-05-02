
var _result = document.getElementById("result");
var _radio = document.getElementsByName("select_number");
var _nums = 0;
// console.log(_radio);
// console.log(typeof _radio);
 function _Pluscalculator(){
     for(i = 0; i < 5; i++){
     if(_radio[i].checked){
       _nums = _nums + Number(_radio[i].value);
     }
     }
     _result.innerHTML = _nums;
 }

 function _Minuscalculator(){
    for(i = 0; i < 5; i++){
        if(_radio[i].checked){
          _nums = _nums - Number(_radio[i].value);
        }
        }
        _result.innerHTML = _nums;
 }

 function _Multiplecalculator(){
    for(i = 0; i < 5; i++){
        if(_radio[i].checked){
          _nums = _nums * Number(_radio[i].value);
        }
        }
        _result.innerHTML = _nums;
 }

 function _Dividecalculator(){
    for(i = 0; i < 5; i++){
        if(_radio[i].checked){
          _nums = _nums / Number(_radio[i].value);
        }
        }
        _result.innerHTML = _nums;
 }

 function _percentcalculator(){
    for(i = 0; i < 5; i++){
        if(_radio[i].checked){
          _nums = _nums % Number(_radio[i].value);
        }
        }
        _result.innerHTML = _nums;
 }

 function _resetcalculator(){
    for(i = 0; i < 5; i++){
        if(_radio[i].checked){
          _nums = 0;
        }
        }
        _result.innerHTML = _nums;
 }
//console.log(_nums);
var _btnplus = document.getElementById("btn-plus");
_btnplus.addEventListener("click",_Pluscalculator);

var _btnminus = document.getElementById("btn-minus");
_btnminus.addEventListener("click",_Minuscalculator);

var _btnmultiple = document.getElementById("btn-multiple");
_btnmultiple.addEventListener("click",_Multiplecalculator);

var _btndivide = document.getElementById("btn-divide");
_btndivide.addEventListener("click",_Dividecalculator);

var _btnpercent = document.getElementById("btn-percent");
_btnpercent.addEventListener("click",_percentcalculator);

var _btnreset = document.getElementById("btn-reset");
_btnreset.addEventListener("click", _resetcalculator);

/* 아는선에서 작성해봤는데.. 어떻게 되긴했는데 더 줄여보고싶은데 잘 안돼요..
하나의 function안에 click 이벤트에 따라 다른 수식을 할 수 있도록 넣고 싶은데, 더 디벨럽 해보겠습니다. */