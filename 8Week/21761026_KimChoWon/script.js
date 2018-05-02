/*Quest
1.숫자(1-5) 중 현재 선택된 숫자에 따라 연산자(+, -, *, /, %) 버튼을 클릭시 연산 처리가 가능하도록 구현합니다.
2.연산된 결과는 result 아이디를 가진 영역에 값을 출력합니다.
3.초기화 버튼을 클릭시 숫자(0)를 초기화합니다.*/
console.log("start");
var select_number_a = document.getElementsByName('select_number');
var result_a = document.getElementById('result');
var btn_plus_a = document.getElementById('btn-plus');
var btn_minus_a = document.getElementById('btn-minus');
var btn_multiple_a = document.getElementById('btn-multiple');
var btn_divide_a = document.getElementById('btn-divide');
var btn_percent_a = document.getElementById('btn-percent');
var btn_reset_a = document.getElementById('btn-reset');

btn_plus_a.addEventListener("click",function(){
    for(i=0; i<select_number_a.length;i++){
        if(select_number_a[i].checked){
            checked = Number(select_number_a[i].getAttribute('value'));
        }
    }
    result_a.innerHTML = Number(result_a.innerHTML) + checked;
});

btn_minus_a.addEventListener("click",function(){
    for(i=0; i<select_number_a.length;i++){
        if(select_number_a[i].checked){
            checked = Number(select_number_a[i].getAttribute('value'));
        }
    }
    result_a.innerHTML = Number(result_a.innerHTML) - checked;
});

btn_multiple_a.addEventListener("click",function(){
    for(i=0; i<select_number_a.length;i++){
        if(select_number_a[i].checked){
            checked = Number(select_number_a[i].getAttribute('value'));
        }
    }
    result_a.innerHTML = Number(result_a.innerHTML) * checked;
});

btn_divide_a.addEventListener("click",function(){
    for(i=0; i<select_number_a.length;i++){
        if(select_number_a[i].checked){
            checked = Number(select_number_a[i].getAttribute('value'));
        }
    }
    result_a.innerHTML = Number(result_a.innerHTML) / checked;
});

btn_percent_a.addEventListener("click",function(){
    for(i=0; i<select_number_a.length;i++){
        if(select_number_a[i].checked){
            checked = Number(select_number_a[i].getAttribute('value'));
        }
    }
    result_a.innerHTML = Number(result_a.innerHTML) % checked;
});

btn_reset_a.addEventListener("click",function(){
    result_a.innerHTML = 0;
});

