var number = true;            
var string = false;   

var number = 5;
var string = 'text'; 
console.log("" + number); // "true"
console.log("" + string); // "false"


var confirmBtn = document.getElementById("btn-student-number");
var confirmFunction = function(){
    var c = confirm("학번이 입력되었습니다.");
};
confirmBtn.addEventListener("click", confirmFunction);

var confirmBtn = document.getElementById("btn-student-name");
var confirmFunction = function(){
    var c = confirm("이름이 입력되었습니다.");
};
confirmBtn.addEventListener("click", confirmFunction);


var promptBtn = document.getElementById("btn-even");
var promptFunction = function(event){
    var toReset = prompt("숫자를 입력해주세요.");
    event.preventDefault();
    if(toReset == 9){
        //console.log(reset);
    }
    var promptFunction = function(event){
        event.preventDefault();
    }
};
promptBtn.addEventListener("click", promptFunction);



var _numberOne = [10, -50, 5, 0, 15, -20, 40, 200]

var _numberTwo = [-1, 40, 10, -30, 20, 0, -100, 15]

var min = Math.min.apply(null, _numberOne);

var max = Math.max.apply(null, _numberTwo);


console.log("최소값 : " + min);

console.log("최대값 : " + max);


var person = {};
person = {
    greeting : '안녕하세요',
    myName : '진솔입니다.',
    today : '오늘은',
    month : 5 ,
    separate : '/',
    day : 3 ,
    is : '입니다.',
    luck : '행운을 빕니다.'
};
 
console.log(person.greeting + '. 저는 '+ person.myName + person.today + person.month + person.separate
+ person.day + '입니다.' + person.luck);


//--------------------------------------------------------------

var btnStarElement = document.getElementById('btn-star');
var resultElement = document.getElementById('result');
btnStarElement.addEventListener('click', onCickBtnStar);
function onCickBtnStar(event){
    event.preventDefault();
    var result = '';
    for(var i = 6; i > 0; i--){
        for(var j = 0; j < i; j++){
            result += '*';
        }
        result += '<br/>';
    }
    for(i = 1; i <= 6; i++){
        for(var j = 0; j < i; j++){
            result += '*';
        }
        result += '<br/>';
    }
    resultElement.innerHTML = result;
}



var promptBtn = document.getElementById("btn-star");
var promptFunction = function(event){
    var toReset = prompt("숫자를 입력해주세요.");
    event.preventDefault();
    if(toReset == 9){
        //console.log(reset);
    }
    var promptFunction = function(event){
        event.preventDefault();
    }
};
promptBtn.addEventListener("click", promptFunction);

