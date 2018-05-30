var $tabMenu = document.getElementById('tab-menu');
var $tabContainer = document.querySelector('.tab-container');
var $tabContainer2 = document.querySelector('.tab-container2');

var $tabMenuEl = $tabMenu.querySelectorAll('a');
var $tabContent = $tabContainer.querySelectorAll('.tab-content');
var $tabContent2 = $tabContainer2.querySelectorAll('.tab-content2');

var _cuId = 0;
var _exId = _cuId;

// 클릭 이벤트 바인딩 (클로저)
function tabMenuClick(id) {
    // 클릭 이벤트 콜백함수
    function onClickTabMenu() {
        console.log(id);
        var $el = this;
        if (!$el.classList.contains('selected')) { // selected 라는 클래스가 없을 때.
            // console.log('없음');
            _cuId = id;
            //////////
            $tabMenuEl[_exId].classList.remove('selected');
            $el.classList.add('selected');
            $tabContent[_exId].classList.remove('selected');
            $tabContent2[_exId].classList.remove('selected');
            $tabContent[_cuId].classList.add('selected');
            $tabContent2[_cuId].classList.add('selected');
            $tabContent2[1].classList.remove('tab-container2');
            //////////
            _exId = _cuId;
        }
    }
    // 클릭 이벤트 바인딩
    $tabMenuEl[id].addEventListener('click', onClickTabMenu);
}

// 클릭 이벤트 콜백함수
function init() {
    console.log('init');

    // 클릭 이벤트 초기화
    for (var i = 0; i < $tabMenuEl.length; i++) {
        tabMenuClick(i);
    }
}
init();

// Youtube 팝업 열기
function youtubeFullscreen(url){
    window.open(url, "", "fullscreen,scrollbars")
}