//1
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

//2
var func2 = function(input)
{
    if("number" === typeof input)
    {
    console.log("true"); 
    }
    else if("string" === typeof input)
    {
    console.log("false"); 
    }
}
func2(5);
func2("text");
//3

var func3 = function()
{
    console.log(_obj.greeting +' '+ _obj.myName+' '+_obj.today+' '+_obj.month+' '+_obj.separate+' '+_obj.day+' '+_obj.is+' '+_obj.luck);
}
var _obj = {
    greeting : '안녕하세요',
    myName : '남현우입니다.',
    today : '오늘은',
    month : 5,
    separate : '/',
    day : 3,
    is : '입니다.',
    luck : '행운을 빕니다.'
    }
func3();

//4

//5

var BtnStudentNumber = document.getElementById('btn-student-number');
var BtnStudentName = document.getElementById('btn-student-name');
var InputStudentNumber = document.getElementById('student-number');
var InputStudentName = document.getElementById('student-name');
var StudentNumber = "21861151"
var StudentName = "남현우"

function OnStudentNumberClick(e)
{
    e.preventDefault();
    InputStudentNumber.innerHTML = StudentNumber;
    alert("학번이 입력되었습니다.")
}

function OnStudentNameClick(e)
{
    e.preventDefault();
    InputStudentName.innerHTML = StudentName;
    alert("이름이 입력되었습니다.")
}

BtnStudentNumber.addEventListener("click", OnStudentNumberClick);
BtnStudentName.addEventListener("click", OnStudentNameClick);


//6.
var BtnEven = document.getElementById('btn-even');
var EvenResult = document.getElementById('even-result');

function GetNumber()
{
    var Input = prompt("숫자를 입력해주세요");
    var Numbers = '';
    for(var i=2; i<Input; i++)
    {
        if(Input % 2)
        {
           
        }
        else
        {
            Numbers += i
            Numbers += ', '
        }
    }
    return [Numbers];
}
function EnterNumber()
{
    
    var result = GetNumber();
    EvenResult.innerHTML = result;
}
BtnEven.addEventListener("click", EnterNumber);

//7
var BtnColor = document.getElementById("btn-color");
var Sentence = document.getElementsByClassName("sentence");

function ChangeColor1()
{
    Sentence[0].classList.add('style1');
}
function ChangeColor2()
{
    Sentence[0].classList.add('style1');
}

BtnColor.addEventListener("click", ChangeColor1);

//8
var func8 = function(input)
{
    var result = ''
    if("number" === typeof input)
    {
        for(i=0; i<input; i++)
        {
            result += "*";
            console.log(result);
        }
    }
    else
    {
        console.log("false");
        alert("숫자만 입력가능합니다.")
    }
}
//func("text");
func8(5);

//9
var func9 = function(input)
{
    var result = ''
    {
        for(i=input; i>=0; i--)
        {
            result += "*";
            console.log(result);
        }
        // for(i=1; i<=input; i++)
        // {
        //     result += "*";
        //     console.log(result);
        // }
    }
}
func9(6);

//10
var btnStarElement = document.getElementById('btn-star');
var resultElement = document.getElementById('star-result');
btnStarElement.addEventListener('click', InputNumber);
function InputNumber()
{
    var NumbersPrompt = prompt("숫자를 입력해주세요.")
    if(NumbersPrompt)
    {
        
    }
}
function onCickBtnStar(){
    var result = '';
    for(i = NumbersPrompt; i > 0; i--){
        for(var j = 0; j < i; j++){
            result += '*';
        }
        result += '<br/>';
    }
    for(var i = 1; i <= NumbersPrompt; i++){
        for(var j = 0; j < i; j++){
            result += '*';
        }
        result += '<br/>';
    }
    
    resultElement.innerHTML = result;
}