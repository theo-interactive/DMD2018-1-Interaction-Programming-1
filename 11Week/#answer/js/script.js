// ### 문제 1.
// 1. js 폴더, script.js 파일 생성 후 index.html 에 로드합니다. 
// 2. 자신의 '학번 이름' 포함된 경고창을 출력합니다.
// > 태그의 속성 필수 기입, 유효 위치 확인, 소문자로 입력합니다.
//alert('20180000 김용원');
// console.log('20180000 김용원');

// ### 문제 2.
// 아래의 요건에 따라 코드를 작성합니다.
// 1. 'Iron Man', 'Captain America', 'Hulk', 'Thor' 를 요소로 가지는 heros 라는 이름의 배열(Array) 객체를 생성합니다.
// 2. 'Spider-Man' 을 heros 배열 객체에 추가합니다.
// 3. heros 배열 객체의 뒤에서 3번째 요소를 'Black Panther' 로 변경합니다.
// 4. console 창에 배열을 출력합니다.

//배열.
//1. 배열 생성.
var heros = ['Iron Man', 'Captain America', 'Hulk', 'Thor'];
// console.log(heros);
//결과 - ['Iron Man', 'Captain America', 'Hulk', 'Thor'];
//배열에 추가
//push();
heros.push('Spider-Man');
// console.log(heros);
//결과 - ['Iron Man', 'Captain America', 'Hulk', 'Thor', 'Spider-Man'];
//n번째 배열 값 바꾸기.

//1.
// heros[heros.length - 3] = 'Black Panther';
// heros[heros.length - 3] = 0;
// heros[heros.length - 3] = {name : 'Black Panther'};
// console.log(heros);

//2.
// heros.splice(heros.length - 3, 1, 'Black Panther');
// console.log(heros);


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
    if(typeof _array !== 'object'){
        alert('객체만 입력가능합니다.');
        return false;
    }
    var newArray = [];
    for(var i = 0; i < _array.length; i++){
        newArray.push(typeof _array[i]);
        // newArray.push(i);
    }
    var array2 = {name : 'rh', phone : '010-9137-8688'};
    // for ... in 사용법. - object 일 때.
    // for(var key in array2){
        // console.log(key);
        // console.log(array2[key]);
        //array2['name'], array2['phone'];
    // }
    // for ... in 사용법. - array 일 때.
    newArray = [];
    for(var index in _array){
        newArray.push(typeof _array[Number(index)]);
        // console.log(_array[Number(index)]);
        //console.log(Number(index));
        //console.log(parseInt(index, 10));
    }
    return newArray;
    //console.log(newArray);
}
var q3 = getType([1, 'Hello', 10, ['interaction', 'programming', 1], {'name' : 'rh'}]);
// console.log(q3);

// function getType(_array){
//     // console.log(typeof _array);
//     // if(typeof _array === 'number'){
//     // }else if(typeof _array == 'string'){
//     // }
//     if(typeof _array !== 'object'){
//         alert('객체만 입력가능합니다.');
//         return false;
//     }else{
//         console.log('객체 타입입니다.');
//         return true;
//     }
// }
// getType(0); //경고창.
// getType('text'); //경고창.
// getType({name : 'rh'}); //console
// getType(['number', 'string', 'number', 'object', 'object']); //console

// function getType(_array){
//     // console.log(_array);
//     var result = 0;
//     for(var i = 0; i < _array.length; i++){
//         result = result + _array[i];
//     }
//     //return _array;
//     return result;
//     //함수 반환. - 함수 안에서 실행된 내부 코드 진행 후 결과값을 변수 등에 반환시켜준다.
// }
// var type = getType([0,1,2,3,4]);
// console.log(type);

// getType(0);//<- _array 전달 인자로 0 을 선언.
// getType('text');//<- _array 전달 인자로 'text' 을 선언.
// getType({object : 'object'});//<- _array 전달 인자로 {object : 'object'} 을 선언.
// getType([0,1,2,3,4]);//<- _array 전달 인자로 {object : 'object'} 을 선언.



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
var __cuOp;
function getCheckedValue(){
    for(var i = 0; i < selectOpElements.length; i++){
        if(selectOpElements[i].checked){ // checked 되었는지 확인.
            //체크된 radio 타입 input 의 value 값을 찾아보자.
            __cuOp = selectOpElements[i].value;
        }
    }
}
function onChangeRadio(){
    getCheckedValue();
}
for(var i = 0; i < selectOpElements.length; i++){
    selectOpElements[i].addEventListener('change', onChangeRadio);
}
function onClickBtnSum(){
    //if(__cuOp == 'undefined'){
    if(__cuOp === undefined){
        alert('연산부호를 선택해주세요.');
        return false;
    }
    var number = prompt('숫자를 입력해주세요.'); // 문자열.
    var result = 0;
    switch(__cuOp){
        case '+' :
            for(var i = 1; i <= number; i++){
                result = result + i;
            }
        break;
        case '*' :
            for(var i = 1; i <= number; i++){
                // n * 0 = 0 이기 때문에 조건문으로 연산가능하도록 분리.
                if(result === 0 && i == 1){
                    //result = i; // 1.
                    result = 1;
                }else{
                    result = result * i;
                } 
            }
        break;
        default :
        break;
    }
    sumResultElement.innerHTML = result;
    // if(__cuOp === '+'){
    // }else if(__cuOp === '*'){
    // }else{
    // }
}
btnSumElement.addEventListener('click', onClickBtnSum);


// ### 문제 5.
// 아래의 요건에 따라 코드를 작성합니다.
// 1. button#btn-color-1 를 클릭할 경우, box 라는 클래스 이름을 가진 모든 div 요소의 배경색 스타일을 'red', 글자색 스타일을 'white' 로 변경합니다.
// 3. button#btn-color-2 를 클릭한 경우, box 라는 클래스 이름을 가진 div 요소 중 3번째 요소의 배경색 스타일을 'blue', 글자색 스타일을 'black' 으로 변경합니다.

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