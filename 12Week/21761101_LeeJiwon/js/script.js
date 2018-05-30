var $tabMenu = document.getElementById('tab-menu');
var $tabContainer = document.querySelector('.tab-container');
var $tabMenuEl = $tabMenu.querySelectorAll('a');
var $tabContent = $tabContainer.querySelectorAll('.tab-content');

var _cuId = 0;
var _exId = _cuId;
// 클릭 이벤트 바인딩 (클로저)
function tabMenuClick(id){
    // 클릭 이벤트 콜백함수
    function onClickTabMenu(){
        console.log(id);
        var $el = this;
        if(!$el.classList.contains('selected')){
            // selected라는 클래스가 없을 때
            console.log('없음');

            _cuId = id; // 없을 때 id를 바꿔줌

            $tabMenuEl[_exId].classList.remove('selected'); // style을 지워줌
            $el.classList.add('selected'); // style을 넣어줌
            $tabContent[_cuId].classList.add('selected'); 
            $tabContent[_exId].classList.remove('selected'); 

            $tabContainer

            _exId = _cuId; // 숫자 적용
        }
    }

    // 클릭 이벤트 바인딩
    $tabMenuEl[id].addEventListener('click', onClickTabMenu);
}

// 클릭 이벤트 콜백함수

function init(){
    console.log('init');
    // 클릭 이벤트 바인딩
    for(var i = 0; i < $tabMenuEl.length; i++){
        tabMenuClick(i);
    }
}
init();