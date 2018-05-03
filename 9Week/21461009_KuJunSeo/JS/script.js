//문제 2번//

// console.log('typeof number :' + true); 
// console.log('typeof string :' +  false); 

//문제 3번//
var person = {};

person.greeting = '안녕하세요'
person.myName = ' 구준서입니다. '
person.today = '오늘은 ';
person.month = 5;
person.separate=' / ';
person.day=3;
person.is=' 입니다.';
person.luck=' 행운을 빕니다.';
//문제 4번//


//문제 5번//

var studentElement = document.getElementById("btn-student-number");
    studentElement.addEventListener("click", function(){
        var student = prompt("학번을 입력하세요");
        alert("학번이 입력되었습니다.");
        if(student){
        var spanElement = document.getElementById('student-number');
        spanElement.innerHTML = student;
        document.getElementById("student-number")
        
    }
    })

var nameElement = document.getElementById("btn-student-name");
nameElement.addEventListener("click", function(){
        var student = prompt("이름을 입력하세요");
        alert("이름이 입력되었습니다.");
        if(student){
        var spanElement = document.getElementById('student-name');
        spanElement.innerHTML = student;
        document.getElementById("student-name").appendChild(spanElement);
        
    }
    })

console.log(person.greeting + person.myName +  person.today + person.month +  person.separate + person.day + person.is + person.luck);
//문제 6번//
var even_Element = document.getElementById("btn-even");
even_Element.addEventListener("click", function(){
    if(prompt('숫자를 입력해주세요.')){
        
    }});

//문제 7번//



//문제 8번//



//문제 9번//

var btnStarElement = document.getElementById('btn-star');
var resultElement = document.getElementById('star-result');
btnStarElement.addEventListener('click', onCickBtnStar);
function onCickBtnStar(event){
    event.preventDefault();
    var result = '';
    for(var i = 1; i <= 5; i++){
        for(var j = 0; j < i; j++){
            result += '*';
        }
        result += '<br/>';
    }
    for(i = 5; i > 0; i--){
        for(var j = 0; j < i; j++){
            result += '*';
        }
        result += '<br/>';
    }
    resultElement.innerHTML = result;
}

//문제 10번//

var star = document.getElementById("btn-star"); 
         star.addEventListener("click", function(){ 
         if(prompt("숫자를 입력해주세요")) 
         { 
            var starElement = document.getElementById('star-result');
            starElement.innerHTML = stars;
            document.getElementById("star-result").appendChild(starElement);
             } 
         }); 


         