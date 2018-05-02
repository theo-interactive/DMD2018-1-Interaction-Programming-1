<script type="text/javascript" >
//1.숫자(1-5) 중 현재 선택된 숫자에 따라 연산자(+, -, *, /, %) 버튼을 클릭시 연산 처리가 가능하도록 구현합니다.
    
    var resultElement = document.getElementById("result");
    var selNumElement = document.getElementsByName("select-number");
   var btnPlusElement = document.getElementById('btn-plus');
    var btnMinusElement = document.getElementById('btn-minus');
    var btnMultipleElement = document.getElementById('btn-multiple');
    var btnDivideElement = document.getElementById('btn-divide');
     var btnPercentElement = document.getElementById('btn-percet');
    var btnResetElement = document.getElementById('btn-reset'); 
    
    var RadioInput  = function(){
    for(var i = 0; i < selNumElement.length; i++){
        if(selNumElement[i].checked){
            resultElement = selNumElement[i].value;
        }
    }
    }    
  //2.연산된 결과는 result 아이디를 가진 영역에 값을 출력합니다.
    btnPlusElement.addEventListener('click',function(){
        RadioInput();
        result.innerHTML = Number(result.innerHTML) + resultElement;
    });
    
    btnMinusElement.addEventListener('click',function(){
        RadioInput();
        result.innerHTML = Number(result.innerHTML) - resultElement;
    });
    btnMultipleElement.addEventListener('click',function(){
        RadioInput();
        result.innerHTML = Number(result.innerHTML) * resultElement;
    });
    btnDivideElement.addEventListener('click',function(){
        RadioInput();
        result.innerHTML = Number(result.innerHTML) / resultElement;
    });
    btnPercentElement.addEventListener('click',function(){
        RadioInput(); 
        //여기에서 addEventListener을 읽을수 없다는 에러가 나오는데, 코드가 틀린게 없어보입니다
        result.innerHTML = Number(result.innerHTML) % resultElement;
    });
    
    //3.초기화 버튼을 클릭시 숫자(0)를 초기화합니다.
    
    btnResetElement.addEventListener('click',function(){
        //RadioInput();
        result.innerHTML = null;
    });


    
    
    
    
    
    </script>
    
 // rh : script 파일에는 script 태그를 쓰는게 아닙니다.