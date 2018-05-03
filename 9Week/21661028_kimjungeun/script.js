
/* 교수님,,,, 죄송합니다... 열심히 한다했는데..... 채점하실게... 없으실거에요......
....재밌는데.,,기말고사때는 좀 더 발전하는 제가 되겠습니다...........!*/


/*2*/
var a = 1;
var b = "2";

if (a)
{
    a = 1;
    console.log(a);
}        

if (typeof b ===  "2")
{
    console.log("false");
} 


/*3*/
var MEME = {
    greeting : "안녕하세요",
    myName : "김정은입니다. ",
    today : "오늘은",
    month : 5 , 
    separate : '/',
    day : 3,
    is : '입니다.',
    luck : '행운을 빕니다.'
};

console.log(MEME.greeting + " " + MEME.myName + " " + MEME.today + " " + MEME.month + " " + MEME.separate + " " + MEME.day + " " + MEME.is + " " + MEME.luck);

/*4*/
var Q4_1 = [10, -50, 5, 0, 15, -20, 40, 200];
var Q4_1_2 = [-1, 40, 10, -30, 20, 0, -100, 15];

    //console.log(Q4_1, Q4_1_1);

var max = Math.max.apply(null, Q4_1);
var min = Math.min.apply(null, Q4_1_2);
    console.log(max, min);


var Q4_2 = [0, 1, 2, 3, 4];
var Q4_2_2 = [-4, -3, -2, -1, 0];

var max = Math.max.apply(null, Q4_2);
var min = Math.min.apply(null, Q4_2_2);
    console.log(max, min);



/*5*/

var StuNumBtn = document.getElementById ('btn-student-number');
var StNum = document.getElementById ('student-number');

var quest_05 = function () {
   var Numinput = prompt ('학번이 입력되었습니다.');

   if (Numinput) {
          var _Numinput = document.createElement ("21661028")
          _Numinput.innerHTML += Numinput;

          StNum.appendChild(_Numinput);
      };
};

StuNumBtn.addEventListener ('click', quest_05);

//
/*
    var input = document.getElementById ("student-number");
    //console.log(input);
    
    for (var i = 0; i<input.length; i++){
        //console.log(input[i]);
        input[i].innerHTML += "21661028"
    };





    var button05 = document.getElementById('btn-student-number');
      //console.log (botton05);
      
      var ClickButton = function()
        {
            alert("학번이 입력되었습니다.");
        };
    
    button05.addEventListener('click', ClickButton);
    */
/*6*/
    var button06 = document.getElementById("btn-even");
    
    function resetPrompt()
    {
        if(prompt ("숫자를 입력해 주세요.")=== 0)
        { 
            document.getElementById("btn-even") = null;
        }
    }
    //console.log(resetPrompt);
     button06.addEventListener("click", resetPrompt);




     /*7 */
     var divElement = document.getElementById('btn-color');
     var callback = function(){

            //console.log(divElement.classList);
            divElement.style.color = 'red';
            //divElement.classList.add('p');
     }

     divElement.addEventListener('click', callback);

