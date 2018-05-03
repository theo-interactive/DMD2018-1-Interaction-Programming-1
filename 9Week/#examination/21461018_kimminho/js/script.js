function func(_number){  
        if(parseInt(_number) === Number){
            console.log('true');            
        }else{
            console.log('false');            
        }
    }   
func(5);
// func('text');


// function test(_obj){
//     greeting : '안녕하세요',
//     myName : '김민호입니다.',
//     today : '오늘은',
//     month : 5,
//     separate : '/',
//     day : 3,
//     is : '입니다.',
//     luck : '행운을 빕니다.'
// }
// for(var i = 0; i < _obj.length; i++){

// }
// // test();

var _array1 = [10, -50, 5, 0, 15, -20, 40, 200];
var _array2 = [-1, 40, 10, -30, 20, 0, -100, 15];
function _math(_array1, _array2){

}
var max = Math.max.apply(null, _array1);
console.log('최대값 : ' + max);
var min = Math.min.apply(null, _array2);
console.log('최솟값 : ' + min);



var studentNumber = document.getElementById('btn-student-number');
studentNumber.addEventListener('click', function(){
    studentNumber.innerHTML = '21461018';
    alert('학번이 입력되었습니다.');
});

var studentName = document.getElementById('btn-student-name');
studentName.addEventListener('click', function(){
    studentName.innerHTML = '김민호';
    alert('이름이 입력되었습니다.');
});







var evenBtn = document.getElementById('btn-even');
var resultElement = document.getElementById('even-result');
evenBtn.addEventListener('click', function(){
    var result = getPrime();
    if(result[0] !== undefined){
    var resultRowElement = document.createElement('even-result');
    resultRowElement.classList.add('even-result');
    resultRowElement.innerHTML = '입력한 숫자 : ' + result[0] + '<br/> 짝수 : ' + result[1];
    resultElement.appendChild(resultRowElement);
}
});
var getPrime = function(){
    var number = prompt('숫자를 입력하세요.');
    var isPrime;
    var primes = '';
    for(var i = 2; i <= number; i++){
        isPrime = true;
        for(var j = 1; j < i; j++){
            if(i % j === 1){
                isPrime = false;
                break;
            }
        }
        if(isPrime){
            if(primes !== ''){
                primes += ', ';    
            }
            primes += i;
        }
    }
    return [number, primes];
};




var sentenceElement = document.getElementsByClassName('sentence');
var isBtn1Click = false;
var isBtn2Click = false;
var btnColor = document.getElementById('btn-color');
btnColor.addEventListener('click', function(){
        sentenceElement.classList.add('style1');  

});

function _number(num){
    if(num !== Number){
        alert('숫자만 입력가능합니다.');
        // num = false;
       //console.log('false');        
    }
}
var num = 1;
_number();

var btnStarElement = document.getElementById('btn-star');
var resultElement = document.getElementById('star-result');
btnStarElement.addEventListener('click', onCickBtnStar);
function onCickBtnStar(event){
    event.preventDefault();
    var result = '';  
for(i = 6; i > 0; i--){
    for(var j = 0; j < i; j++){
        result += '*';
    }
    result += '<br/>';
}
for(var i = 1; i <= 6; i++){
    for(var j = 0; j < i; j++){
        result += '*';
    }
    result += '<br/>';
}
    resultElement.innerHTML = result;
}


var btnStar = document.getElementById('btn-star');
btnStar.addEventListener('click', function(){
    prompt('숫자를 입력해주세요.');
});

















