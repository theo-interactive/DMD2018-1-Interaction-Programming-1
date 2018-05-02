
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

// rh : Number(_radio[i].value); 는 radio 의 checked 된 값이 바뀔 때만 변합니다.
// radio value 에 대한 전역변수를 사용한다면 해당 부분에서 for 문을 계속 해서 찾을 필요는 없을 것 같습니다.
// 그리고 click 이벤트를 하나만 두고 만든다고 하면, 콜백시 현재의 id 문자열을 찾아서 조건문으로 사용한다면 가능할 것 같은데, 시도해보세요~