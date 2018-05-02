/* 
Quest 1.
1.숫자(1-5) 중 현재 선택된 숫자에 따라 연산자(+, -, *, /, %) 버튼을 클릭시 연산 처리가 가능하도록 구현합니다.
*/

/* 
Quest 2.
2.연산된 결과는 result 아이디를 가진 영역에 값을 출력합니다.
*/

/*
 Quest 3.
3.초기화 버튼을 클릭시 숫자(0)를 초기화합니다.
*/
document.getElementById("btn-reset").onclick = function() {
    document.getElementById("result").innerHTML =null;
  };