var BtnPlus = document.getElementById('btn-plus');
var BtnMinus = document.getElementById('btn-minus');
var BtnMultiple = document.getElementById('btn-multiple');
var BtnDivide = document.getElementById('btn-divide');
var BtnPercent = document.getElementById('btn-percent');
var BtnReset = document.getElementById('btn-reset');


var dada = document.getElementsByName('select_number');
var DivResult = document.getElementById('result');
/*
var c= DivResult.firstChild;
DivResult.removeChild(c);
DivResult.getAttribute('0');
console.log(DivResult.firstChild);
*/

var p1;
var total1=0;
var click_no=0;
var ssi;

var cc= parseInt(DivResult.firstChild.nodeValue);
console.log(typeof(cc)); //type를 알려준다.
console.log(total1); //0
DivResult.innerHTML = cc + total1;
console.log(DivResult.innerHTML);
DivResult.firstChild.nodeValue = cc + total1;



dada[0].addEventListener('click',pp0);
dada[1].addEventListener('click',pp1);
dada[2].addEventListener('click',pp2);
dada[3].addEventListener('click',pp3);
dada[4].addEventListener('click',pp4);


console.log(click_no);

function pp0 () {p1=dada[0].getAttribute('value');
//console.log(dada[0].getAttribute('value')); 
console.log(p1);
console.log(total1);
click_no = click_no + 1;
if (click_no==2) { 
    cal(ssi);  
    console.log(click_no); }
};

function pp1 () {p1=dada[1].getAttribute('value');
//console.log(dada[1].getAttribute('value')); 
console.log(p1);
console.log(total1);
click_no = click_no + 1;
console.log(click_no);
if (click_no==2) { 
    cal(ssi);  
    console.log(click_no); }
};

function pp2 () {p1=dada[2].getAttribute('value');
//console.log(dada[1].getAttribute('value')); 
console.log(p1);
console.log(total1);
click_no = click_no + 1;
console.log(click_no);
if (click_no==2) { 
    cal(ssi);  
    console.log(click_no); }
};
function pp3 () {p1=dada[3].getAttribute('value');
//console.log(dada[1].getAttribute('value')); 
console.log(p1);
click_no = click_no + 1;
if (click_no==2) { 
    cal(ssi); 
    console.log(click_no);  }
};
function pp4 () {p1=dada[4].getAttribute('value');
//console.log(dada[1].getAttribute('value')); 
console.log(p1);
click_no = click_no + 1;
if (click_no==2) { 
    cal(ssi);  
    console.log(click_no); }
};

/*
for(var i =0; i<dada.length; i++){
    if(dada[i].checked){
        end = dada[i].getAttribute('value');
        console.log(end);//이때 value는 숫자
    } }
*/


/*
str_value = '123';
//typeof(str_value);
// 현재의 타입이 string 문자타입임을 확인

int_value = parseInt(str_value);
// 함수를 사용하여 숫자 자료형으로 변경함
//typeof(int_value);
// 타입 확인결과 문자에서 숫자 타입으로 변경되었음
console.log(str_value);
console.log(int_value);
*/


/*
var end;
function sutjada (){
    for(var i =0; i<dada.length; i++){
        if(dada[i].checked){
            end = dada[i].getAttribute('value');
            console.log(end);//이때 value는 숫자
        } 
    }
}

*//*
function hi(){
    console.log(hi);
}
dada[i].addEventListener('click',hi);
*/
/*
BtnPlus.addEventListener('click', onClickBtnPlus);

function onClickBtnPlus(){
    console.log('plusbuttonclicked');
    console.log(total);
    total = total + p1;
    DivResult.innerHTML = cc + total ;
    //console.log(cc.innerHTML);
    //DivResult.firstChild.nodeValue === cc.innerHTML;


    }

BtnPlus.addEventListener('click', high);
function high(){
    console.log(high);
}*/



    function cal(hi){
     //   var total1;
     //   var p1;

        console.log('plusbuttonclicked');
        console.log(total1);
        console.log(p1);       

        if (hi == '+'){
            total1 = total1 + p1;
            ssi='+';
            console.log(total1);
            console.log(ssi);
        }
        else if(hi == '-'){
            total1 = total1 - p1;
        }
        else if (hi == '*'){
            total1 = total1 * p1;
        }
        else if (hi == '/'){
            total1 = total1 / p1;
        }
        // else if ( hi == '%'){
        //     total1 = total1 % p1;
        // }
        console.log(total1);
        console.log(click_no);
        DivResult.innerHTML = total1 ;
    }

    BtnPlus.addEventListener('click', cal('+'));
    BtnMinus.addEventListener('click', cal('-'));

