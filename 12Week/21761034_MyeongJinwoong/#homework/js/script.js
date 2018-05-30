var $tabMenu = document.getElementById('tab-menu');
var $tabContainer = document.querySelector('.tab-container');

var $tabMenuEl = $tabMenu.querySelectorAll('a');
var $tabContent = $tabContainer.querySelectorAll('.tab-content');

var _cuId = 0;
var _exId = _cuId;

// 클릭 이벤트 바인딩.(클로저)
function tabMenuClick(id){
    // 클릭 이벤트 콜백 함수.
    function onClickTabMenu(){
        console.log(id);
        var $el = this;
        if(!$el.classList.contains('selected')){//el안에 selected 클래스가 !(없으면)
            _cuId = id;
            //////////////////////
            $tabMenuEl[_exId].classList.remove('selected');
            $el.classList.add('selected'); // 아래와 동일 구문
            $tabContent[_exId].classList.remove('selected');
            $tabContent[_cuId].classList.add('selected');
            //this.classList.add('selected');
            //////////////////////
            _exId = _cuId;
            
            console.log('없음');
        }else{
            console.log("있음");
        }
    }

    // 클릭 이벤트 바인딩.
    $tabMenuEl[id].addEventListener('click',onClickTabMenu);
}


var $count = document.getElementById('count');

function getCount(number){
    var counter = 0;
    var i = setInterval(function() {
      if ( counter == number ) {
        clearInterval(i);
      } else {
       counter += 1;
       $count.innerHTML = counter; 
      }
    }, 1 );
  };



function init(){
console.log('init 실행!')
// 클릭 이벤트 바인딩.
for(var i =0; i < $tabMenuEl.length; i++){
    tabMenuClick(i);
}
}
init();
getCount(500);