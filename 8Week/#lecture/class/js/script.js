/*
//console.log('load');
var divElement = document.getElementById('div');
var btn1Element = document.getElementById('btn1');
var btn2Element = document.getElementById('btn2');
var btn3Element = document.getElementById('btn3');
var isBtn1Click = false;
var isBtn2Click = false;

// console.log(divElement);
// console.log(btn1Element);

function onClickBtn1(){
    console.log('btn 1 click');
    if(!isBtn1Click){ //false -> true;
        divElement.classList.add('style1');
        isBtn1Click = true;
    }else{ //true -> false;
        divElement.classList.remove('style1');
        isBtn1Click = false;
    }
}
function onClickBtn2(){
    if(!isBtn2Click){
        isBtn2Click = true;
        divElement.classList.add('style2');
    }else{
        isBtn2Click = false;
        divElement.classList.remove('style2');
    }
}
function onClickBtn3(){
    divElement.classList.remove('style1', 'style2');
    //button1, button2 를 클릭할 때, 상태체크를 할 수 있도록.
    isBtn1Click = false;
    isBtn2Click = false;
    divElement.classList.toggle('style3');
    // divElement.classList.toggle('style3', true); -> add
    // divElement.classList.toggle('style3', false); -> remove
}
btn1Element.addEventListener('click', onClickBtn1);
btn2Element.addEventListener('click', onClickBtn2);
btn3Element.addEventListener('click', onClickBtn3);


var mouseDivElement = document.getElementsByClassName('mouse');
//console.log(mouseDivElement);
function onOverMouseDiv1(){
    console.log('over');
    //console.log(this);
    //mouseDivElement[0];
    this.classList.add('animated1');
}
function onOutMouseDiv1(){
    console.log('out');
    this.classList.remove('animated1');
}
function onOverMouseDiv2(){
    this.classList.add('animated2');
}
function onOutMouseDiv2(){
    this.classList.remove('animated2');
}
function onOverMouseDiv3(){
    this.classList.add('animated3');
}
function onOutMouseDiv3(){
    this.classList.remove('animated3');
}
mouseDivElement[0].addEventListener('mouseover', onOverMouseDiv1);
mouseDivElement[0].addEventListener('mouseout', onOutMouseDiv1);

mouseDivElement[1].addEventListener('mouseover', onOverMouseDiv2);
mouseDivElement[1].addEventListener('mouseout', onOutMouseDiv2);

mouseDivElement[2].addEventListener('mouseover', onOverMouseDiv3);
mouseDivElement[2].addEventListener('mouseout', onOutMouseDiv3);


var divTagElements = document.getElementsByTagName('div');
var emailInputElements = document.getElementsByName('email');

// console.log(divTagElements); //HTMLCollection []
// console.log(inputTagElements); //HTMLCollection []
// console.log(emailInputElements);

// console.log(emailInputElements[0].getAttribute('type'));
// console.log(emailInputElements[0].getAttribute('name'));
// console.log(emailInputElements[0].getAttribute('value'));
//키가 눌릴 때 발생.
// emailInputElements[0].addEventListener('keydown', function(){
//     // console.log('keydown');
// });
//키를 누르고 있을 때 발생.
// emailInputElements[0].addEventListener('keypress', function(){
    // console.log('keypress');
// });
//키를 뗄 때 발생.
// emailInputElements[0].addEventListener('keyup', function(){
    // console.log('keyup');
// });
//영역을 선택할 때 발생.
// emailInputElements[0].addEventListener('select', function(){
    // console.log('select');
// });

var inputTagElements = document.getElementsByTagName('input');
console.log(inputTagElements);
console.log(inputTagElements.length) // -> 3
for(var i = 0; i < inputTagElements.length; i++){
    //console.log(i);
    // inputTagElements[i].addEventListener('focus', function(){
    //     console.log('focus', this);
    // });
    // inputTagElements[i].addEventListener('blur', function(){
    //     console.log('blur', this);
    // });
    inputTagElements[i].addEventListener('change', function(){
        //DOM 로드시에 입력된 속성값을 반환.
        console.log(this.getAttribute('value'));
        console.log(this.value);
        //this.value = this.value.toUpperCase();
        //this.value = ''; //value 문자열 초기화.
        this.value = null; //value 초기화.
    });
}


var listElement = document.getElementById('list');
var listChildNodes = listElement.childNodes;
var listChildrenElements = listElement.children; // 배열.
var listFirstChild = listElement.firstChild;
var listLastChild = listElement.lastChild;
var listFirstChildElement = listElement.firstElementChild;
var listLastChildElement = listElement.lastElementChild;
// console.log(listElement);
// console.log(listChildNodes);
console.log(listChildrenElements);
// console.log(listFirstChild);
// console.log(listFirstChildElement);
// console.log(listLastChild);
// console.log(listLastChildElement);

for(var i = 0; i < listChildrenElements.length; i++){
    console.log(listChildrenElements[i].id);
    console.log(listChildrenElements[i].className);
    listChildrenElements[i].innerHTML = '<div class="style' + (i+1) + '" >계원</div>';
    listChildrenElements[i].style.marginTop = '20px';
    listChildrenElements[i].style.marginLeft = '40px';
    listChildrenElements[i].style.fontSize = '40px';
    listChildrenElements[i].style.lineHeight = '60px';
}
*/
function onResize(){
    console.log('resize');
    console.log(window.innerWidth, window.innerHeight);
    
}
window.addEventListener('resize', onResize);