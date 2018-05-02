// JavaScript source code
/*
 * 
 * 
var Num_1 = 1;
var Num_2 = 2;
var Num_3 = 3;
var Num_4 = 4;
var Num_5 = 5;
*/
/* 1.숫자(1-5) 중 현재 선택된 숫자에 따라 연산자(+, -, *, /, %) 버튼을 클릭시 연산 처리가 가능하도록 구현합니다.*/

/* 2.연산된 결과는 result 아이디를 가진 영역에 값을 출력합니다.*/

/* 3.초기화 버튼을 클릭시 숫자(0)를 초기화합니다.*/


document.onselectstart = new Function("return false");//스크롤차단.


//숫자버튼을 눌르면 값이다라진다.
var Result = document.getElementById('result');
//var Numresult = Result[0].getAttribute('input');
Result.value = 0;//연산 후 결과값.
var Numchoice ;//선택값

console.log(Result.value);


//---------------------------------------------------------선택 값 });
var Num1 = document.getElementById('ButtonNum1');
Num1.addEventListener('click', function () {
    Numchoice = 1;
    console.log(Numchoice);})
var Num2 = document.getElementById('ButtonNum2');
Num2.addEventListener('click', function () {
    Numchoice = 2;
    console.log(Numchoice);})
var Num3 = document.getElementById('ButtonNum3');
Num3.addEventListener('click', function () {
    Numchoice = 3;
    console.log(Numchoice);})
var Num4 = document.getElementById('ButtonNum4');
Num4.addEventListener('click', function () {
    Numchoice = 4;
    console.log(Numchoice);})
var Num5 = document.getElementById('ButtonNum5');
Num5.addEventListener('click', function () {
    Numchoice = 5;
    console.log(Numchoice);})

//---------------------------------------------------------연산 });
var _Plus = document.getElementById('Plus');
_Plus.addEventListener('click', function ()
{ //Result.value += Numchoice;

    Result.value = (Number(Result.value) + Numchoice);;
});
var _Subtract = document.getElementById('Subtract');
_Subtract.addEventListener('click', function ()
{
Result.value -= Numchoice;
    console.log(typeof Result.value);});
var _Multiply = document.getElementById('Multiply');
_Multiply.addEventListener('click', function ()
{Result.value *= Numchoice;  });
var _Division = document.getElementById('Division');
_Division.addEventListener('click', function ()
{ Result.value %= Numchoice;  })
var _Remainder = document.getElementById('Remainder');
_Remainder.addEventListener('click', function ()
{ Result.value /= Numchoice; });



var reset = document.getElementById("Reset");
reset.addEventListener('click',function ()
{
    Result.value = 0;
})



