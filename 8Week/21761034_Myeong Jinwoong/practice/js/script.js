/*
// console.log('load');
var divElement = document.getElementById("div");
var btn1Element = document.getElementById("btn1");
var btn2Element = document.getElementById("btn2");
var btn3Element = document.getElementById("btn3");
var isBtn1Click = false;
var isBtn2Click = false;

console.log(divElement);
console.log(btn1Element);

function onclickBtn1(){
    console.log('btn 1 click');
    if(!isBtn1Click){ // false > true;
        divElement.classList.add("style1");
        isBtn1Click = true;  
    }else{ // true > false;
        divElement.classList.remove("style1");
        isBtn1Click = false;
    }
    
}
function onclickBtn2(){
    console.log('btn 2 click');
    if(!isBtn2Click){
        divElement.classList.add("style2");
        isBtn2Click = !isBtn2Click;
    }else{
        divElement.classList.remove("style2");
        isBtn2Click = !isBtn2Click;
    }
}
function onclickBtn3(){
    divElement.classList.remove('style1','style2');
    //button1,2를 클릭할 때 상태체크를 할 수 있도록 함.
    isBtn1Click = false;
    isBtn2Click = false;
    console.log('btn 3 click');
    divElement.classList.toggle("style3");
}
btn1Element.addEventListener("click",onclickBtn1);
btn2Element.addEventListener("click",onclickBtn2);
btn3Element.addEventListener("click",onclickBtn3);

var mouseDivElement = document.getElementsByClassName("mouse");
// console.log(mouseDivElement);
function onOverMouseDiv1(){
 //   console.log("over");
 //   console.log(this);
    this.classList.add('animated1');
}
function onOutMouseDiv1(){
 //   console.log("out");
    this.classList.remove('animated1');
    
}
function onOverMouseDiv2(){
    this.classList.add("animated2")
}
function onOutMouseDiv2(){
    this.classList.remove("animated2")
}
function onOverMouseDiv3(){
    this.classList.add("animated3")
}
function onOutMouseDiv3(){
    this.classList.remove("animated3")
}
mouseDivElement[0].addEventListener("mouseover", onOverMouseDiv1);
mouseDivElement[0].addEventListener("mouseout", onOutMouseDiv1);
mouseDivElement[1].addEventListener("mouseover", onOverMouseDiv2);
mouseDivElement[1].addEventListener("mouseout", onOutMouseDiv2);
mouseDivElement[2].addEventListener("mouseover", onOverMouseDiv3);
mouseDivElement[2].addEventListener("mouseout", onOutMouseDiv3);

*/
var divTagElemenets = document.getElementsByTagName('div');
var inputTagElements = document.getElementsByTagName('input');
var emailInputNameElements = document.getElementsByName('e-mail');
//console.log(divTagElemenets);
//console.log(inputTagElements);
//console.log(emailInputElements);
/*
console.log(emailInputNameElements[0].getAttribute("type"));
console.log(emailInputNameElements[0].getAttribute("name"));
console.log(emailInputNameElements[0].getAttribute("value"));

//키가 눌릴 때 발생
emailInputNameElements[0].addEventListener("keydown", function(){
    console.log("keydown");
});
//키를 누르고 있을 때 발생
emailInputNameElements[0].addEventListener("keypress", function(){
    console.log("keypress");
});
// 키를 땔 때 발생
emailInputNameElements[0].addEventListener("keyup", function(){
    console.log("keyup");
});
// 영역을 선택했을 때 발생.
emailInputNameElements[0].addEventListener('select',function(){
    console.log('select');
})

console.log(inputTagElements);
console.log(inputTagElements.length)
for(var i=0; i < inputTagElements.length; i++){
    inputTagElements[i].addEventListener('focus', function(){
        console.log('focus',this);
    })
    inputTagElements[i].addEventListener('blur', function(){
        console.log('blur',this);
    })
}
*/
// for(var i=0; i < inputTagElements.length; i++){
// inputTagElements[i].addEventListener('change', function(){
//     console.log(this.getAttribute('value'));
//     console.log(this.value);
//     this.value = this.value.toUpperCase();
//     this.value =" "; //value 문자열 초기화
//     this.value = null; // value 초기화.
// })
// }
var listElement = document.getElementById('list');
var listChildNode = listElement.childNodes;
var listChildrenElemenet = listElement.children;
var listFirstElement = listElement.firstChild;
var listLastElement = listElement.lastChild;
var listFirstChildElement = listElement.firstElementChild;
var listLastChildElement = listElement.lastElementChild;
 console.log(listChildrenElemenet);
// console.log(listElement);
// console.log(listChildNode);
// console.log(listFirstElement);
// console.log(listLastElement);
// console.log(listFirstChildElement);
// console.log(listLastChildElement);

for(var i = 0; i < listChildrenElemenet.length; i++){
    console.log(listChildrenElemenet[i].id);
    console.log(listChildrenElemenet[i].className);
    listChildrenElemenet[i].innerHTML = '<div class="style' +(i+1)+'">계원</div>';
    listChildrenElemenet[i].style.margin = "40px";
    listChildrenElemenet[i].style.fontSize = "40px";
    listChildrenElemenet[i].style.lineHeight = "60px";
}
function onResize(){
    console.log('resize');
    console.log(window.innerHeight, window.innerWidth);
}

window.addEventListener('resize', onResize);