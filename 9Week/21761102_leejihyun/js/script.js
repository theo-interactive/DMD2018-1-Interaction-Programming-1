var a = 5;
var b = 'text';
console.log(a == Number);
console.log(b == String);

var c ={
   greeting : '안녕하세요',
    myName : '이지현입니다.',
    today : '오늘은',
    month : 5,
    separate : '/',
    day : 3,
    is : '입니다.',

};
console.log("결과 :" + " " + c.greeting + " " + c.myName + " " + c.today + " " + c.month + " " + c.separate + " " + c.day + " " + c.is);


var a_numbers = ([10, -50, 5, 0, 15, -20, 40, 200], [-1, 40, 10, -30, 20, 0, -100, 15]);
var b_numbers = ([0, 1, 2, 3, 4], [-4, -3, -2, -1, 0]);

var a_numbersmax = Math.max (a_numbers);
console.log(a_numbersmax);

var a_numbersmin = Math.min ([10, -50, 5, 0, 15, -20, 40, 200], [-1, 40, 10, -30, 20, 0, -100, 15]);
console.log(a_numbersmin);

var b_numbersmax = Math.max ([0, 1, 2, 3, 4], [-4, -3, -2, -1, 0]);
console.log(b_numbersmax);

var b_numbersmin = Math.min ([0, 1, 2, 3, 4], [-4, -3, -2, -1, 0]);
console.log(b_numbersmin);

document.getElementById("btn-student-number").onclick = function() {
    document.getElementById("student-number").innerHTML = "21761102";
    alert('학번이 입력되었습니다.');
  };

  document.getElementById("btn-student-name").onclick = function() {
    document.getElementById("student-name").innerHTML = "이지현";
    alert('이름이 입력되었습니다.');
  };

  document.getElementById("btn-even").onclick = function() {
    prompt('숫자를 입력해주세요.');

  };

  