
//문제 2
function searchIndex(_array, number) 
{
   
    for (var i = 0; i < _array.length; i++)
    {
        if (_array[i] === number)
        {
            console.log(i + " : number");
        }
        else
        {
            console.log(i + " : _array");
        }
    }
}

var _array = [8, 5, 20, 95];
var number = 5;
searchIndex(_array, number);

//문제 3

var Identity = {
    greeting : '안녕하세요 ',
    myName : "백지연입니다 ",
    today : '오늘은 ',
    month : 5 ,
    separate : '/ ',
    day : 3 ,
    is : '입니다. ',
    luck : '행운을 빕니다.'};
    
    
    console.log(Identity.greeting + Identity.myName + Identity.today + Identity.month
     + Identity.separate + Identity.day + Identity.is + Identity.luck);


     //문제 5

     var btnStudentElement = document.getElementById('btn-student-number');
var resultElement = document.getElementById('result');
btnStudentElement.addEventListener('click', onCickBtnStudent);
function onCickBtnStudent(event){
    event.preventDefault();
    var result = getNumber();
    
}
var getNumber = function(){
    var number = alert('학번을 확인하세요.');
    
    return [];
};


var btnNameElement = document.getElementById('btn-student-name');
var resultElement = document.getElementById('result');
btnNameElement.addEventListener('click', onCickBtnName);
function onCickBtnName(event){
    event.preventDefault();
    var result = getName();
    
}
var getName = function(){
    var name = alert('이름을 확인하세요.');
    
    return [];
};

    //문제 6
    var btnEvenElement = document.getElementById('btn-even');
var resultElement = document.getElementById('result');
btnEvenElement.addEventListener('click', onCickBtnName);
function onCickBtnName(event){
    event.preventDefault();
    var result = getEven();
    
}
var getEven = function(){
    var name = prompt('숫자를 입력해 주세요.');
    
    return [];
};
     //문제 9
     
     var btnStarElement = document.getElementById('btn-star');
var resultElement = document.getElementById('star-result');
btnStarElement.addEventListener('click', onClickBtnStar);
function onClickBtnStar(event){
    event.preventDefault();
    var result = '';
    for(var i = 5; i <=1; i++){
        for(var j = 0; j < i; j++){
            result += '*';
        }
        result += '<br/>';
    }
    for(i = 0; i < 5; i){
        for(var j = 0; j < i; j++){
            result += '*';
        }
        result += '<br/>';
    }
    resultElement.innerHTML = result;
}

