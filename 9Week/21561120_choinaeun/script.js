///1


///2
function CheckType(_type){
   console.log(typeof _type);
};
CheckType(2);
CheckType("안녕하세요");


///3

var func = {};
func = {
    greeting : '안녕하세요',
    myName : '최나은 입니다.',
    today : '오늘은',
    month : 5,
    separate : '/',
    day : 3,
    is : '입니다.',
    luck : '행운을 빕니다.'
};
console.log(func.greeting+" "+func.myName+" "+func.today+" "+func.month+" "
            +func.separate+" "+func.day+" "+func.is+" "+func.luck);



///4

function CheckMax(max,min) {
    console.log(Math.abs(Math.max.apply(null,max))+Math.abs(Math.min.apply(null,min)));
}
CheckMax([10, -50, 5, 0, 15, -20, 40, 200], [-1, 40, 10, -30, 20, 0, -100, 15]); 
CheckMax([0, 1, 2, 3, 4], [-4, -3, -2, -1, 0]);
///5


var PlusHakbun = document.getElementById("btn-student-number");
var MyHakbun = document.getElementById("student-number");
PlusHakbun.addEventListener('click',function(){
    alert("학번이 입력되었습니다");
    MyHakbun.innerHTML +="21561120";
});
var PlusName = document.getElementById("btn-student-name");
var MyName = document.getElementById("student-name");
PlusName.addEventListener('click',function(){
    alert("이름이 입력되었습니다");
    MyName.innerHTML +="최나은";
});

///6

var GetUserNumber = document.getElementById("btn-even");
GetUserNumber.addEventListener('click',function(){
    var _Number = prompt("숫자를 입력해주세요");
    for (var i=0; i<_Number.length; i++){
    if(_Number[i]%2==0){even-result.innerHTML +"_Number[i]";}
    }
}
)

///7




///8
function searchNumber(_Num2){
    var _Num3 = typeof _Num2
    if(_Num3=typeof[]){alert("숫자만 입력가능합니다");
    console.log ("false");}
}
searchNumber('text');