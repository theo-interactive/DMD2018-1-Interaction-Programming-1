//2



var a = [5,'text']


if(a = 5){
    console.log('true');
}

if(a = 'text'){
    console.log('false');
}


//3


var func = {};
func = ({
    greeting: '안녕하세요 ',
    myName: '강민주 ',
    today: '오늘은 ',
    month: 5,
    separate: '/',
    day: 3,
    is: ' 입니다. ',
    luck: '행운을 빕니다.'
});
//var a = ' ';
//for(var i = 0; i<func.length; i++){
//    if(i > 0){
//        a +=' ';
//    }
//    a += func[i];
//    if(i === 1){
//        a += '---- fin';
//    }
//}

console.log(func.greeting + func.myName + func.today + func.month + func.separate + func.day + func.is + func.luck);


//4


var a = [10, -50, 5, 0, 15, -20, 40, 200];
var b = [0,1,2,3,4];
    
   
 //5
 var btnStuNumElement = document.getElementById('btn-student-number');
var btnStuNameElment = document.getElementById('btn-student-name');
var StudentNumberElement = document.getElementById('student-number');
var StudentNameElement = document.getElementById('student-name');
var btnStuNumElement.addEventListener('click', onClickStuNum);
var btnStuNameElement.addEventListener('click', onClickStuName);

function onClickStuName(e){
    event.preventDefault();
    var Stuname = getBtnName();
   if(result[0] !== 'undefined'){
        var studentNameElement =
           document.createElement('span');
        
    }
};
var getBtnName = function(){
    var name = prompt('이름이 입력되었습니다')
   
};
function onClickStuNum(e){
    event.preventDefault();
    var Stuname = getBtnNumb();
    if(result[0] !== 'undefined'){
        var studentNumElement =
            document.createElement('span');
        
    }
};
var getBtnNumb = function(){
    var name = prompt('학번이 입력되었습니다')
    
};


    //6
    

var btnEvenElement = document.getElementById('btn-even');
var evenResultElement = document.getElementById('even-result');
btnEvenElement.addEventListener('click', onClickBtnEven);
function onClickBtnEven(e){
    event.preventDefault();
    var result = getEven();
    if(result[0] !== undefined){
        var resultRowElement = document.createElement('div');
        resultRowElement.classList.add('row');
        resultRowElement.innerHTML = '짝수:' + result[0];
        resultElement.appendChild(resultRowElement);
    }
}
var getEven = function(){
    var number = prompt('숫자를 입력해주세요');
    var isEven;
    var Evens = '';
    for(var i = 2; i <= number, i++){
        isEven = true;
    }
}
if(isEven){
    if(Evens !== ''){
        Evens += ', ';
    }
   Evens += i;
}
return[number, primes];
    //7
var btnColorElement = document.getElementById('btn-color');
var mouseElement = document.getElementsByClassName('sentence');
var text = mouseElement.innerText;
var isClick = false;

mouseElement.addEventListener('click', onMouseClick);
btnColorElement.addEventListener('click',onClickBtnColor);
function onClickBtnColor(event){
    e.preventDefault();
    console.log('click');
}

function onMouseClick(event){
    e.preventDefault();
    console.log('click');
    if(!isClick){
        isClick = true;
        mouseElement.innerHtml = text.colorInterpolation('red');
    }else{
        isClick = false;
        mouseElement.innerHtml = text;
    }
}


    //8
    //9

    //10
    
    
var btnStarElement = document.getElementById('btn-star');

var resultElement = document.getElementById('star-result');
btnStarElement.addEventListener('click', onClickBtnStar);
function onClickBtnStar(event){
    event.preventDefault();
    var result = '';
   for(var i = 1; i >= j; i++){
        for(var j = 0; j < i; j++){
            result += '*'
        }
        result += '<br/>';
    }
    resultElement.innerHTML = result;
}
var btnStarElement = document.getElementById('btn-star');

var result1Element = document.getElementById('star-result1');
btnStarElement.addEventListener('click', onClickBtnStar);
function onClickBtnStar(event){
    event.preventDefault();
    var result = '';
   for(var i = 1; i <= 5; i++){
        for(var j = 0; j < i; j++){
            result += '*'
        }
        result += '<br/>';
    }
    result1Element.innerHTML = result;
}    
    
    
    
