// console.log('script');

// ### 문제 2.

// 아래의 요건에 따라 코드를 작성합니다.
// 1. 입력된 매개변수가 숫자(Number) 타입인 경우 true, 문자(String) 타입인 경우 false 를 반환하는 함수를 작성합니다.
// 2. 함수 호출하여 console 창에 결과값을 출력합니다.
// ~~~~
// func(5) 결과 : true
// func('text') 결과 : false
// ~~~~

function getType(_number){
    // console.log(typeof _number)
    //문자열로 데이터 형식이 반환됨. 'number', 'string', 'object'
    if(typeof _number === 'number'){
        return true;
    // }else{
        // return false;
    }
    if(typeof _number === 'string'){
        return false;
    }
}
var q1_1 = getType(5);
var q1_2 = getType('text');
// console.log(q1_1);
// console.log(q1_2);

//함수 반환 - return
// function func(){
//     console.log('함수 실행 1');
//     return false;
//     //반환된 이후에는 코드 실행이 안된다.
//     console.log('함수 실행 2');
//     for(var i=0; i < 5; i++){
//         console.log(i);
//     }
// }
// var test = func();
// console.log(test);


// ### 문제 3.

// 1. 하나의 객체(Object) 타입 매개변수를 입력받는 함수를 작성합니다. 객체의 값은 숫자(Number) 와 문자(String) 타입입니다.
// 2. 입력된 전달인자 객체 내 모든 값을 문자열로 연산하여 반환합니다. 문자 연산 시, 각 객체 값 사이에 공백(' ')을 추가합니다. 예시의 전달인자 객체 중 myName 값은 자신의 이름으로 변경합니다.
// 3. 함수를 호출하여 console 창에 결과값을 출력합니다.

// ~~~~
// func({
//     greeting : '안녕하세요',
//     myName : '김용원입니다.',
//     today : '오늘은',
//     month : 5,
//     separate : '/',
//     day : 3,
//     is : '입니다.',
//     luck : '행운을 빕니다.'
// });

// 결과 : 안녕하세요 김용원입니다. 오늘은 5 / 3 입니다. 행운을 빕니다.
// ~~~~

var q3_Object = {
    greeting : '안녕하세요',
    myName : '김용원입니다.',
    today : '오늘은',
    month : 5,
    separate : '/',
    day : 3,
    is : '입니다.',
    luck : '행운을 빕니다.'
}
function greeting(_object){
    //객체 타입이기 때문에 반복문 실행방식 확인.
    // for(var i = 0; i < _object.length; i++){
    //     console.log(i);
    //     console.log(_object[i]);
    // }
    var result = '';
    for(key in _object){
        // console.log(key);
        // console.log(_object[key]);
        if(result !== ''){
            result += ' ';
            //result --> '안녕하세요 ' 2번째 실행될 때.
        }

        //if(result !== '') result += ' '; //if 명령구문이 한줄일 경우.

        //result --> ''; 1번째 실행될 때.
        result += _object[key];
        //result --> '안녕하세요' 1번째 실행될 때.
        //result += ' ';
    }
    return result;
}
//안녕하세요김용원입니다.오늘은5/3입니다.행운을 빕니다.
//안녕하세요 김용원입니다. 오늘은 5 / 3 입니다. 행운을 빕니다.
var q3 = greeting(q3_Object);
// console.log(q3);

// ### 문제 4.

// 1. 두개의 배열(Array) 객체 타입 매개변수를 입력받는 함수를 작성합니다. 배열의 값은 숫자(Number) 타입입니다.
// 2. 첫번째 입력된 전달인자 배열 내의 최대값(1), 두번째 입력된 전달인자 배열 내의 최소값(2)을 구합니다.
// 3. (1)과 (2)의 절대값이 반환될 수 있도록 작성합니다.(문항 삭제)
// 4. 함수를 호출하여 console 창에 결과값을 출력합니다.

// ~~~~
// func([10, -50, 5, 0, 15, -20, 40, 200], [-1, 40, 10, -30, 20, 0, -100, 15]) 결과 : 최대값 200, 최소값 -100
// func([0, 1, 2, 3, 4], [-4, -3, -2, -1, 0]) 결과 : 최대값 4, 최소값 -4
// ~~~~

function getValue(_array1, _array2){
    var max = Math.max.apply(null, _array1); // 배열내의 최대값을 구하는 Math 함수 방법.
    var min = Math.min.apply(null, _array2); // 배열내의 최소값을 구하는 Math 함수 방법.
    var result = '최대값 ' + max + ', 최소값 ' + min;
    // return '최대값 ' + max + ', 최소값 ' + min;
    return result;
}
var q4_1 = getValue([10, -50, 5, 0, 15, -20, 40, 200], [-1, 40, 10, -30, 20, 0, -100, 15]);
var q4_2 = getValue([0, 1, 2, 3, 4], [-4, -3, -2, -1, 0]);
// console.log(q4_1);
// console.log(q4_2);

// ### 문제 5.

// 1. button#btn-student-number 클릭할 경우, 자신의 학번이 span#student-number 의 내부에 입력될 수 있도록 함수를 작성합니다. 
// 2. button#btn-student-name 클릭할 경우, 자신의 이름이 span#student-name 의 내부에 입력될 수 있도록 함수를 작성합니다.
// 3. 1, 2 각 콜백함수 호출 시, 요소에 내용 입력이 완료된 후 예시 문구 포함된 경고창을 출력합니다.

// ~~~~
// 1 함수 실행 후 : '학번이 입력되었습니다.'
// 2 함수 실행 후 : '이름이 입력되었습니다.'
// ~~~~

var btnStudentNumber = document.getElementById('btn-student-number');
var btnStudentName = document.getElementById('btn-student-name');
function onClickBtnStudentNumber(){
    var number = '20180000';
    var spanElement = document.getElementById('student-number');
    spanElement.innerHTML = number;
    alert('학번이 입력되었습니다.');
}
function onClickBtnStudentName(){
    var name = '김용원';
    var spanElement = document.getElementById('student-name');
    spanElement.innerHTML = name;
    alert('이름이 입력되었습니다.');
}
//이벤트 바인딩.
btnStudentNumber.addEventListener('click', onClickBtnStudentNumber);
btnStudentName.addEventListener('click', onClickBtnStudentName);

//### 문제 6.

// 아래의 요건에 따라 코드를 작성합니다.
// 1. button#btn-even 을 클릭할 경우, '숫자를 입력해주세요.' 라는 문구와 입력창이 포함된 다이얼로그창을 출력합니다.
// 2. 사용자가 입력한 숫자를 기준으로 0부터 해당 숫자까지의 숫자 중 짝수인 숫자를 div#even-result 의 내부에 입력될 수 있도록 작성합니다.

// ~~~~
// func(10) 결과 : 2, 4, 6, 8, 10.
// func(7) 결과 : 2, 4, 6.
// ~~~~

var btnEvenElement = document.getElementById('btn-even');
function onClickBtnEven(){
    var number = Number(prompt('숫자를 입력해주세요.'));
    var result = '';
    var resultElement = document.getElementById('even-result');
    for(var i = 0; i <= number; i++){
        //console.log(i);
        if(i % 2 === 0 && i !== 0){ // && 조건 두개가 모두 성립될 때.
            if(result !== ''){
                result += ', ';
            }
            result += i;
            //console.log(i, '짝수');
        }
        if(i === number){//i 의 마지막 값.
            result += '.';
        }
    }
    //result += '.';
    //console.log(result);
    //문자열 생성.

    //--------------
    resultElement.innerHTML = result;
    //요소에 문자열 출력.
}
btnEvenElement.addEventListener('click', onClickBtnEven);

// ### 문제 7.

// 아래의 요건에 따라 코드를 작성합니다.

// 1. button#btn-color 를 클릭할 경우, sentence 라는 클래스 이름을 가진 p 요소의 글자 색 스타일을 'red' 로 변경합니다.
// 2. 단, button#btn-color 를 클릭할 경우, p 요소가 한번에 하나씩 순차적으로 스타일이 변경되도록 조건을 작성합니다.
// 3. 현재 순번의 p 요소 외 p 요소들의 글자 색 스타일을 'black' 으로 변경합니다.
// 4. 마지막 순번의 p 요소 스타일이 변경된 후 button#btn-color 를 클릭할 경우, 첫번째 순번의 p 요소부터 다시 순차적으로 스타일이 변경되도록 작성합니다.

var btnColorElement = document.getElementById('btn-color');
var currentID = 0;
function onClickBtnColor(){
    var sentenceElements = document.getElementsByClassName('sentence');
    //복수. 배열로 반환.
    // console.log(sentenceElements);
    for(var i = 0; i < sentenceElements.length; i++){
        sentenceElements[i].style.color = 'black';
    }
    for(var i = 0; i < sentenceElements.length; i++){
        // console.log(sentenceElements[i]);
        if(i === currentID){
            sentenceElements[i].style.color = 'red';
        }
        //sentenceElements[i].style.backgroundColor = 'black';
    }
    currentID++; //currentID 의 숫자를 1씩 증가.
    //4.
    if(currentID >= sentenceElements.length){
        currentID = 0;
    }
}
btnColorElement.addEventListener('click', onClickBtnColor);

// ### 문제 8.

// 아래의 요건에 따라 코드를 작성합니다.

// 1. 하나의 숫자(Number) 타입 매개변수를 입력받는 함수를 생성합니다.
// 2. 입력된 전달인자가 숫자가 아닌 경우 실행되지 않고 '숫자만 입력가능합니다.' 문구 포함된 경고창 출력 후 false 를 반환합니다.
// 3. 입력된 전달인자의 수만큼 '*' 가 반복되는 문자열을 반환합니다.
// 4. 함수 호출하여 console 창에 결과값을 출력합니다.

// ~~~~
// func('text') 결과 : false
// func(5) 결과 : *****
// func(8) 결과 : ********
// ~~~~

function getStar(_number){
    if(typeof _number !== 'number'){
        alert('숫자만 입력가능합니다.'); //경고창.
        return false; //false 반환.
        //조건이 성립되면 다음 코드부터는 실행이 안됨.
    }
    //숫자 입력시. 이 부분부터 실행.
    var result = '';
    for(var i = 0; i < _number; i++){
        result += '*';
    }
    //console.log(result);
    return result;
}

// var q8_1 = getStar('text');
// var q8_2 = getStar(5);
// var q8_3 = getStar(8);
// console.log(q8_1);
// console.log(q8_2);
// console.log(q8_3);

// ### 문제 9.

// 아래의 요건에 따라 코드를 작성하고 예시와 같은 결과값이 출력되도록 함수를 작성합니다.

// 1. 하나의 숫자(Number) 타입 매개변수를 입력받는 함수를 생성합니다.
// 2. 입력된 전달인자의 수에 따라 예시 형태와 같은 결과로 문자열을 반환합니다.
// 3. 문자열은 한 줄이 끝날 때마다, 줄바꿈 되도록 작성합니다. (힌트 : \n)

function getStars(_number){
    var result = '';
    // for(var i = 1; i <= _number; i++){
    //     //var result = getStar(i);
    //     result += getStar(i);
    //     result += '\n';
    //     // result += '<br/>';
    // }
    // for(var i = _number - 1; i >= 1; i--){
    //     //var result = getStar(i);
    //     result += getStar(i); 
    //     result += '\n';
    // }
    // console.log(result);

    for(var i = _number; i > 0; i--){
        //아래 반복문은 getStar 에서 사용한 구문.
        for(var j = 0; j < i; j++){
            result += '*';
        }
        // ===== 
        //result += getStar(i); 
        result += '\n';
    }
    for(var i = 2; i <= _number; i++){
        for(var j = 0; j < i; j++){
            result += '*';
        }
        //result += getStar(i);
        result += '\n';
        // result += '<br/>';
    }
    return result;
    // console.log(result);
}
var q9_1 = getStars(5);
var q9_2 = getStars(10);
// console.log(q9_1);
// console.log(q9_2);

function getStars2(_number){
    var result = '';
    //반복문 안의 반복문.
    for(var i = 0; i < 5; i++){
        //0 - *****
        //1 - *****
        //2 - *****
        //3 - *****
        //4 - *****
        for(var j = 0; j < 5; j++){
            result += '*';
        }
        result += '\n';
    }
    for(var i = 0; i < 5; i++){
        //0 - *
        //1 - **
        //2 - ***
        //3 - ****
        //4 - *****
        for(var j = 0; j <= i; j++){
            result += '*';
        }
        result += '\n';
    }
    return result;
}
console.log(getStars2(5));

// ### 문제 10.

// 아래의 요건에 따라 코드를 작성합니다.
   
// 1. button#btn-star 을 클릭할 경우, '숫자를 입력해주세요.' 라는 문구와 입력창이 포함된 다이얼로그창을 출력합니다.
// 2. 문제 9 함수의 Number 타입 매개변수의 전달인자로 사용자가 입력한 숫자를 할당하고 함수를 호출합니다.
// 3. 함수에서 반환된 결과값이 pre#star-result 의 내부에 입력될 수 있도록 작성합니다.

var btnStarElement = document.getElementById('btn-star');
function onClickBtnStar(){
    var number = prompt('숫자를 입력해주세요.');
    var starString = getStars(number);//number - 10, number - 5 ... getStars 에서 문자열 생성된 값을 반환받음.
    var starResultElement = document.getElementById('star-result');
    starResultElement.innerHTML = starString;
}
btnStarElement.addEventListener('click', onClickBtnStar);