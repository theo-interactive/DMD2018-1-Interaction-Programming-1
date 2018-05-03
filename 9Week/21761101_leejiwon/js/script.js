/*
문제 2.
*/

function NumberString(num){
    return typeof num === 'number';
  }

    NumberString(5);
    NumberString('text');
    
    console.log(NumberString(5));
    console.log(NumberString('text'));

/*
문제 3.
*/

        var person = {
            greeting : '안녕하세요',
            myName : '김용원입니다.',
            today : '오늘은',
            month : 5,
            separate : '/',
            day : 3,
            is : '입니다.',
            luck : '행운을 빕니다.'
        };

      console.log(person.greeting + " " + person.myName + " " + person.today + " " + person.month + " " + person.separate + " " + person.day + " " + person.is + " " + person.luck);

/*
문제 4.
*/

    var numbers1 = [10, -50, 5, 0, 15, -20, 40, 200];
    var numbers2 = [-1, 40, 10, -30, 20, 0, -100, 15];

    var max = Math.max.apply(null, numbers1);

    var min = Math.min.apply(null, numbers2);

    console.log(max - min);

/*
문제 5.
*/

var studentNumberBtn = document.getElementById('btn-student-number');
var studentNameBtn = document.getElementById('btn-student-name');
var spanNumberElement = document.getElementById('student-number');
var spanNameElement = document.getElementById('student-name');

  function onClickNumberButton(){
    var NumberBtn = prompt('학번을 입력하세요.');
    spanNumberElement.innerHTML = NumberBtn;
    if(alert("학번이 입력되었습니다.")){
        console.log("학번이 입력되었습니다.");
    }
  };
  
  function onClickNameButton(){
    var NameBtn = prompt('이름을 입력하세요.');
    spanNameElement.innerHTML = NameBtn;
    if( alert("이름이 입력되었습니다.")){
        console.log("이름이 입력되었습니다.");
    }
  };

  studentNumberBtn.addEventListener('click', onClickNumberButton);
  studentNameBtn.addEventListener('click', onClickNameButton);

/*
문제 6.
*/

var evenBtn = document.getElementById('btn-even');
var evenResult = document.getElementById('even-result');

function onClickEvenButton(){

    var btnNumber = prompt('숫자를 입력해주세요.');

    var evenNumber = '';

    for(var i=1; i<=btnNumber; i++){
        var j = i % 2;
        if(j == 0){
          evenNumber = evenNumber + i + ',';
          }
        }
        evenResult.innerHTML = evenNumber;
  };
  evenBtn.addEventListener('click', onClickEvenButton);

/*
문제 7.
*/

var colorBtn = document.getElementById('btn-color');
var sentenceElement = document.getElementsByClassName('sentence');
var isbtn1Click = false

function onClickBtn1(){
    classSentence.classList.add('style1'); // false를 받고
}

colorBtn.addEventListener('click', onClickBtn1);

/*
문제 8.
*/

function numberReturn(typeNumber){

    if(typeof typeNumber === 'number'){

      var numnum = '';

      for(var i = 0; i < typeNumber; i++){
        numnum = numnum + '*';
        }
        console.log(numnum);
        return typeof numnum ===  null;
      }else{
      alert("숫자만 입력가능합니다.");
    }
  }
  numberReturn(10);
  numberReturn('10');

  console.log(numberReturn(10));
  console.log(numberReturn('10'));

/*
문제 9.
*/

    function numberReturn2(typeNumber){

    if(typeof typeNumber === 'number'){

        var numnum = '';
  
        for(var i = 0; i < typeNumber; i++){
          numnum = numnum + '*';
          }
          console.log(numnum);
        }
      }
  
      function numberReturn3(number){
        for(var j = 0; j > number; j--){
          console.log(numberReturn2(j));
        }
      }
      numberReturn3(3);

/*
문제 10.
*/

var starBtn = document.getElementById('btn-star');
var starResult = document.getElementById('star-result');

function onClickStarButton(){

    var starNumber = prompt('숫자를 입력해주세요.');

    starNumber = numberReturn3(3);

    starResult.innerHTML = starNumber;
  };
  starBtn.addEventListener('click', onClickStarButton);