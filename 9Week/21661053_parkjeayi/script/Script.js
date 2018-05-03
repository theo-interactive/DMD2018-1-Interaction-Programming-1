



function chickNum(func) {
    if (func == Number) { console.log("func" + func + ":" + "true"); }
    else if (func === String) { console.log("func" + func + ":" + "false"); }
}
chickNum(prompt());


var my = {
    greeting: "Hello.",
    MyName: " I'm Jeayi.",
    month: 5,
    separate: "/",
    day: 3,
    is: "it.",
    luck: "Good Luck."
};

console.log(my.greeting + " " + my.MyName + " " + my.month + " " + + my.separate + " " + my.day + " " + my.is + " " + my.luck);


var StudentNum = document.getElementById("btn-student-number");
var stnum = document.getElementById("student-number");
StudentNum.addEventListener('click', function ()
{ stnum.innerHTML("21661053 �й��� �ԷµǾ����ϴ�."); });

var StudentName = document.getElementById("btn-student-name");
var stname = document.getElementById("student-name");
StudentName.addEventListener('click', function ()
{
    stname.innerHTML("Jeayi �̸��� �ԷµǾ����ϴ�.");
});

var btneven = document.getElementById("btn-even");
btneven.addEventListener('click', function () {

    var Num_22 = prompt("���ڸ� �Է��Ͻÿ�");
    var Num_2 = 0;
    for (j = 0; j < Num_22; j++) {
        if (j % 2 == 0)
        {
            console.log(J % 2)}
       
        else { console.log((J-1)%2);}
        
    }
    console.log("�Է�(" + Num_22 + ")���:" + Num_2);
    alert("�Է�(" + Num_22 + ")���:" + Num_2);
});

var star = document.getElementById("btn-star");
var stru = document.getElementById("star-result");
star.addEventListener('click', function ()
{
    var z = prompt("���ڸ� �Է����ּ���");
    var StarS;
    for (var y = 0; y < z;y++)
    {
        StarS+="*";
    }
    stru.innerHTML(starS);
    for (var y = z; y < 0; y--)
    { starS += "*"; }
    stru.innerHTML(starS);
})
