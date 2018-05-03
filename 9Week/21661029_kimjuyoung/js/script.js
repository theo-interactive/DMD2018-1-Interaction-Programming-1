

// 문제2
function typeCheck(msg){

    if(typeof msg === Number){
        console.log("typeCheck(5) 결과 : " + true);
        return;
    }if(typeof msg === String){
        console.log("false");
        return;
    }

};

typeCheck(5);
typeCheck('text');

//문제5

var studentNum = document.getElementById("btn-student-number");
var numResult = document.getElementsByName("student-number")

var numClick = function(){
    numResult.innerHTML = String("21661029");
}

studentNum.addEventListener('click', numClick);


//문제6

var resultElement = document.getElementById("even-result");

var evenBtn = document.getElementById("btn-even");

var evenClick = function(){
    prompt("숫자를 입력해주세요.");
}

evenBtn.addEventListener ('click', evenClick);

//문제7

var colorBtn = document.getElementById("btn-color");
var colorChange = document.getElementsByClassName("sentence");

var colorClick = false;

function onColorClick(){
    if(!colorClick){ 

        colorBtn.classList.add("style1");
        colorClick = true;

    }else{ 

        colorBtn.classList.add("style2");
        colorClick = false;
    }

}

colorBtn.addEventListener("click", onColorClick);

//문제8

function onlyNum(x){
    if(x === Number){
        console.log("true");
    }else if(x === String){
        alert("숫자만 입력 가능합니다.")
        console.log("false")
    }
}

onlyNum(5);
onlyNum("text");

//문제10

var starBtn = document.getElementById("btn-star");

var starClick = function(){
    prompt("숫자를 입력해주세요.");
}

starBtn.addEventListener("click", starClick);