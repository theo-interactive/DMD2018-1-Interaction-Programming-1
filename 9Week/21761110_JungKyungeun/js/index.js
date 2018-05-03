  
  console.log('*2');
    var PushtheP = document.getElementById('select-input');
    PushtheP.innerHTML = pushit();
    
    function pushit (){
        if(PushtheP.innerHTML === typeof(number)){
            console.log("true")
        }
        else if (PushtheP.innerHTML === typeof(string)){
            console.log('false')
        }
    }
    pushit();

    console.log('*3');
    console.log('*4');

    console.log('*5');
    var BtnStudentNumber = document.getElementById('btn-student-number');
    var BtnStudentName = document.getElementById('btn-student-name')
    var StudentNumber = document.getElementById('student-number');
    var StudentName = document.getElementById('student-name');

    BtnStudentNumber.addEventListener('click',typenumit);
    function typenumit () {
     StudentNumber.innerHTML = '21761110';
     console.log(StudentNumber.innerHTML);
    }
    if (typenumit() === 1) {
        window.alert("학번입력완료")
    }
    

    BtnStudentName.addEventListener('click',typenameit);
    function typenameit () {
        StudentName.innerHTML = '정경은';
        console.log(StudentName.innerHTML);
       
    }
    if (typenameit() === 1) {
        window.alert("이름입력완료")
    }

    console.log('*6');

    var BtnEven = document.getElementById('btn-even');
    var EvenResult = document.getElementById('even-result');
    BtnEven.addEventListener('click', Evenee);
    
    // function onCickBtnEven (event){ 
    //     event.preventDefault();
    //     var result = Evenee(); 
    //     if(result[0] !== undefined){
    //         var NewEven = document.createElement('div');// div 태그가 하나 있는데, 여기 아래에 div태그를 하나 더 만든거임.
    //         NewEven.classList.add('row'); // 하나 더 만든 div태그에 row를 더해준다. 그래서 result[0] ㅎ하고 result[1] 만 써줄 수 있는거임. 
    //         NewEven.innerHTML = '입력한 숫자 : ' + result[0] + '<br/> 소수 : ' + result[1];
    //         BtnEven.appendChild(NewEven);
    //     }
        
    function OnclickEven (event){
        event.preventDefalut();
        var result = Evenee();
        if(result[0] !== undefined){
            var resultrowElement = document.createElement('div');
            resultrowElement.classList.add('row');
            resultrowElement.innerHTML = '입력한 숫자 : ' + result[0] + '<br/> 짝수 : ' + result[1];
            EvenResult.appendChild(resultrowElement);
        }
    }
    function Evenee (){
        var number = prompt('숫자를 입력하세요.');
        var isEven;
        var evens = '';
        for(var i = 0; i <= number; i++){
            isEven = true;
            for(var j = 0; j <= i; j++){
                if(i % j === 1){
                    isEven = false;
                    break;
                }
            }
            if(isEven){
                if(evens !== ''){
                    evens += ', ';    
                }
                evens += i;
            }
        }
        return [number, evens];
    };


    console.log('*7');
    var BtnColor = document.getElementById('btn-color');
    BtnColor.addEventListener('click', Change);

    function Change(){
        BtnColor.classList.toggle('btn-color');
    }
    console.log('*8');
    console.log('*9');

    function 
var btnStarElement = document.getElementById('btn-star');
var resultElement = document.getElementById('result');
btnStarElement.addEventListener('click', onCickBtnStar);
function onCickBtnStar(event){
    event.preventDefault();
    var result = '';
    for(var i = 1; i <= 5; i++){
        for(var j = 0; j < i; j++){
            result += '*';
        }
        result += '<br/>';
    }
    for(i = 5; i > 0; i--){
        for(var j = 0; j < i; j++){
            result += '*';
        }
        result += '<br/>';
    }
    resultElement.innerHTML = result;
}