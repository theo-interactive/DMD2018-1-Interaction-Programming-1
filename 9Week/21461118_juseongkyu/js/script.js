//문제1

//문제2
var _number = 123;
var _string = "string";
typeof(_numer);
/*function(){}*/


//문제3
var person ={};
        person ={
            greeting : "안녕하세요",
            name : "주성규입니다",
            today : "오늘은",
            month : 5,
            separate : "/",
            day : 3,
            is : "입니다.",
            luck : "행운을 빕니다.",
            
        }
        console.log(person.greeting + " " + person.name + person.today + " " + person.month + person.separate + person.day + person.is + " "+ person.luck) ;

//문제4
var numbers1 = [10, -50, 5, 0, 15, -20, 40, 200];
        var max = Math.max.apply(null, numbers1);
        console.log(max);
var numbers2 = [-1, 40, 10, -30, 20, 0, -100, 15];      
        var min = Math.min.apply(null, numbers2);
        console.log(min);
var numbers3 = [0, 1, 2, 3, 4];
        var max = Math.max.apply(null, numbers3);
                console.log(max);
var numbers4 = [-4, -3, -2, -1, 0];
        var min = Math.min.apply(null, numbers4);
        console.log(min);

//문제5
document.getElementById("btn-student-number").onclick = function() {
    document.getElementById("student-number").innerHTML = "21461118";
    alert('학번이 입력되었습니다.');
  };


//문제6
//문제7
//문제8
//문제9
//문제10
var btns = document.getElementById("btn-star");
btns.addEventListener("click", function(){//addEventListener이벤트 연결
    prompt("숫자를 입력하세요")
 });


