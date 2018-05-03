

var a = function(b,c){
    var b = 100;
    var c = '1';
    if(b == Number){
        console.log('a');
    }else{console.log('a');}
    
}

var _root ={};
console.log(typeof _root);
 _root ={greeting : '안녕하세요',
 myName : '김초원입니다.',
 today : '오늘은',
 month : 5,
 separate : '/',
 day : 3,
 is : '입니다.',
 luck : '행운을 빕니다.'
};

console.log(_root.greeting+_root.myName+_root.today+_root["month"]+_root.separate+_root["day"]+_root.is+_root.luck);


var nan1 = ([10, -50, 5, 0, 15, -20, 40, 200], [-1, 40, 10, -30, 20, 0, -100, 15]);
var nan2 = ([0, 1, 2, 3, 4], [-4, -3, -2, -1, 0]);
var ca = Math.max.apply(null,nan1)
console.log(ca);
var cb = Math.min.apply(null,nan2)
console.log(cb);

var Btn1 = document.getElementById("btn-student-number");
Btn1.addEventListener("click",function(){
    if(Btn1.innerHTML = Number(21761026)){
        alert('학번이 입력되었습니다.')
    }

});

var Btn2 = document.getElementById("btn-student-name");
Btn2.addEventListener("click",function(){
    if(Btn2.innerHTML = String("kimchowon")){alert('이름이 입력되었습니다.')}
});

var Btn3 = document.getElementById("btn-even");
var Result1 = document.getElementById("even-result");
Btn3.addEventListener("click",function(){
    var cc;
    if(prompt("숫자를 입력하세요")){
        for(var i=0;i<=cc.length;i++){
            if(cc%2==0){
            console.log(cc);
            }
        }
    }
});


var Btn4 = document.getElementById("btn-color");
var Btn5 = document.getElementsByClassName("sentence");
var s = Btn5.firstElementChild;
Btn4.addEventListener("click",function(){
    for(var i = 0; i < s.length; i++){
        s[i].style.color = '#red';
    }
});







