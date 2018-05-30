// ### 문제 1.
// 1. js 폴더, script.js 파일 생성 후 index.html 에 로드합니다. 
// 2. 자신의 '학번 이름' 포함된 경고창을 출력합니다.
// > 태그의 속성 필수 기입, 유효 위치 확인, 소문자로 입력합니다.


// alert("21761034 명진웅");

// ### 문제 2.
// 아래의 요건에 따라 코드를 작성합니다.
// 1. 'Iron Man', 'Captain America', 'Hulk', 'Thor' 를 요소로 가지는 heros 라는 이름의 배열(Array) 객체를 생성합니다.
// 2. 'Spider-Man' 을 heros 배열 객체에 추가합니다.
// 3. heros 배열 객체의 뒤에서 3번째 요소를 'Black Panther' 로 변경합니다.
// 4. console 창에 배열을 출력합니다.

var heros = ['Iron Man', 'Captain America', 'Hulk', 'Thor'];
heros.push('Spider-Man');
console.log(heros);
heros[heros.length -3] = 'Black Panther';
//heros[heros.length -3, 1, 'Black Panther'];



// ### 문제 3.
// 아래의 요건에 따라 코드를 작성합니다.
// 1. 하나의 배열(Array) 객체 타입 매개변수를 입력받는 함수를 생성합니다.
// 2. 입력된 전달인자가 객체가 아닌 경우 실행되지 않고 '객체만 입력가능합니다.' 문구 포함된 경고창 출력 후 false 를 반환합니다.
// 3. 전달인자 배열의 원소들의 데이터 타입을 원소로 가지는 새로운 배열을 생성합니다.
// 4. 함수 호출하여 console 창에 결과값을 출력합니다.
// ~~~~
// func([1, 'Hello', 10, ['interaction', 'programming', 1], {'name' : 'rh'}])
// 결과 : ['number', 'string', 'number', 'object', 'object']
// ~~~~

function getType(_array){
    //console.log(typeof _array);
    if(typeof _array !== 'object'){
        alert('객체만 입력가능합니다.');
        return false;
    }
    var newArray = [];
    for (var i = 0; i < _array.length; i++){
        newArray.push(typeof _array[i]);
        //console.log(_array[i]);
    }
    newArray = [];
    for(var index in _array){
        newArray.push(typeof _array[index]);
    }
    return newArray;
}
// getType(0); // 경고창.
// getType('text'); // 경고창.
// getType({name : 'mj'}); // console
var q3 = getType([1, 'Hello', 10, ['interaction', 'programming', 1], {'name' : 'rh'}]); //console
console.log(q3);

// function getType(_array){
//     var result =0;
//     //console.log(_array);
//     for(var i = 0; i < _array.length; i++){
//         result = result + _array[i];
//     }
//     //return _array;
//     return result;
// }

// var type = getType([0,1,2,3,4]);
// console.log(type);  

// ### 문제 4.
// 아래의 요건에 따라 코드를 작성합니다.
// 1. button#btn-sum 을 클릭할 경우, '숫자를 입력해주세요.' 라는 문구와 입력창이 포함된 다이얼로그창을 출력합니다.
// 2. select_operator 를 name 가지는 input 요소를 변경한 경우, 변경 선택된 요소의 값(연산부호)을 구합니다.
// 3. (1) 의 callback 호출시 (2) 에서 선택된 연산부호 값이 없는 경우, '연산부호를 선택해주세요.' 문구 포함된 경고창 출력 후 false 를 반환합니다.
// 4. 연산부호가 '+' 일 경우, 1부터 사용자가 입력한 숫자(1)까지의 값을 모두 더한 결과값을 구합니다.
// 5. 연산부호가 '*' 일 경우, 1부터 사용자가 입력한 숫자(1)까지의 값을 모두 곱한 결과값을 구합니다.
// 6. 연산된 결과값을  div#sum-result 의 내부에 입력될 수 있도록 작성합니다.
// ~~~~
// input[name=select_operator] 의 값이 + 일 때, func(10) 결과 : 55
// input[name=select_operator] 의 값이 * 일 때, func(5) 결과 : 120
// ~~~~
var sumResultElement = document.getElementById('sum-result');
var btnSumElement = document.getElementById('btn-sum');
var selectOpElements = document.getElementsByName('select_operator');
var _cuOp;
// getCheckedValue();

function getCheckedValue(){
    for(var i = 0; i < selectOpElements.length; i++){
        if(selectOpElements[i].checked){
            // console.log(selectOpElements[i].value);
            _cuOp = selectOpElements[i].value;
        }
    }
}
function onChangeRadio(){
    getCheckedValue();

}

for(var i = 0; i < selectOpElements.length; i++){
    selectOpElements[i].addEventListener('change',onChangeRadio);
}

// console.log(selectOpElements);

function onClickBtnSum(){
    if(_cuOp === undefined){
        alert('연산부호를 선택해주세요.');
        return false;
    }
    var number = prompt('숫자를 입력해주세요.');
    // console.log(number);
    var result = 0;
    switch(_cuOp){
        case '+' :
            for(var i = 1; i <= number; i++){
                result = result + i;
            }
        break;
        case '*' :
            for(var i = 1; i <= number; i++){
                if(result === 0 && i == 1){
                    result = i; // i = 1;
                }else{
                    result = result * i;
                }
            }
        break;
        default :
                //if의 else와 같음, 지금 상태에서는 아무것도 없을 떄.
        break;
    }
    sumResultElement.innerHTML = result;
    // console.log(result);
    
    // 위 switch구문은 아래와 같다. 
    // if(_cuOp === "*"){

    // }else if(_cuOp === "*"){

    // }else{

    // }
}
btnSumElement.addEventListener('click',onClickBtnSum);

// ### 문제 5.
// 아래의 요건에 따라 코드를 작성합니다.
// 1. button#btn-color-1 를 클릭할 경우, box 라는 클래스 이름을 가진 모든 div 요소의 배경색 스타일을 'red', 글자색 스타일을 'white' 로 변경합니다.
// 3. button#btn-color-2 를 클릭한 경우, box 라는 클래스 이름을 가진 div 요소 중 3번째 요소의 배경색 스타일을 'blue', 글자색 스타일을 'black' 으로 변경합니다.

var btnColorElement1 = document.getElementById('btn-color-1');
var btnColorElement2 = document.getElementById('btn-color-2');
var boxElements = document.getElementsByClassName('box');
// console.log(boxElements);

function onClickBtnColor1(){
    for(var i = 0; i < boxElements.length; i++){
        // CSS > background-color > backgroundColor //낙타 구문.
        boxElements[i].style.backgroundColor = "red";
        boxElements[i].style.color = "white";    
    }
    
}
function onClickBtnColor2(){
        boxElements[2].style.backgroundColor = "blue";
        boxElements[2].style.color = "black";    
}
btnColorElement1.addEventListener('click', onClickBtnColor1);
btnColorElement2.addEventListener('click', onClickBtnColor2);

// ### 문제 6.
// 아래의 요건에 따라 코드를 작성하고 예시와 같은 결과값이 출력되도록 함수를 작성합니다.
// 1. 하나의 숫자(Number) 타입 매개변수를 입력받는 함수를 생성합니다.
// 2. 입력된 전달인자의 수에 따라 예시 형태와 같은 결과로 문자열을 반환합니다.
// 3. button#btn-star 을 클릭할 경우, '숫자를 입력해주세요.' 라는 문구와 입력창이 포함된 다이얼로그창을 출력합니다.
// 4. (1)의 Number 타입 매개변수의 전달인자로 사용자가 입력한 숫자를 할당하고 (2)의 문자열 결과값이 pre#star-result 의 내부에 입력될 수 있도록 작성합니다.
// ~~~~
// func(5)
// 결과 :
// ★☆☆☆☆
// ★★☆☆☆
// ★★★☆☆
// ★★★★☆
// ★★★★★
// ★★★★☆
// ★★★☆☆
// ★★☆☆☆
// ★☆☆☆☆

// func(3)
// 결과 :
// ★☆☆
// ★★☆
// ★★★
// ★★☆
// ★☆☆
// ~~~~

function getStars(_number){ // 전달인자가 '5'인 경우
    var result = '';
    for(var i = 0; i < _number; i++){//한번 돌 때 안에 for문이 숫자만큼 돈다. 5줄 표시
        for(var j = 0; j < _number; j++){ //★★★★★ 1줄의 문자열을 만듬.
            
            if(i >= j){
                result += '★'; 
            }else{
                result += '☆';
            }
        }
        //result +='<br />';
        result += '\n'; // 정규식 줄 바꿈 처리.
    }
    for(var i = _number - 2; i >= 0; i--){
        for(var j = 0; j< _number; j++){
            if(i >= j){
                result += '★'; 
            }else{
                result += '☆';
            }
        }
        result += '\n';
    }
    return result;
}

// console.log(result);

var btnStarElement = document.getElementById('btn-star');
var starResultElement = document.getElementById('star-result');

function onClickBtnStar(){
    var number = prompt('숫자를 입력해주세요.');
    var result = getStars(number);
    starResultElement.innerHTML = result;
}
btnStarElement.addEventListener('click', onClickBtnStar);