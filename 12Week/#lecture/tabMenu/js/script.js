var $tabMenu = document.getElementById('tab-menu');
var $tabContainer = document.querySelector('.tab-container');
var $tabMenuEl = $tabMenu.querySelectorAll('a');
var $tabContent = $tabContainer.querySelectorAll('.tab-content');

var _cuId = 0;
var _exId = _cuId;
//클릭 이벤트 바인딩.(클로저)
function tabMenuClick(id){
    //클릭 이벤트 콜백함수.
    function onClickTabMenu(){
        var $el = this;
        //if(!this.classList.contains('selected')){
        if(!$el.classList.contains('selected')){ //selected 라는 클래스가 없을 때.
            _cuId = id;
            ////////////
            $tabMenuEl[_exId].classList.remove('selected');
            $el.classList.add('selected');
            $tabContent[_exId].classList.remove('selected');
            $tabContent[_cuId].classList.add('selected');
            ////////////
            _exId = _cuId;
        }
    }
    //클릭 이벤트 바인딩.
    $tabMenuEl[id].addEventListener('click', onClickTabMenu);
}
function init(){
    console.log('init');
    //클릭 이벤트 초기화.
    for(var i = 0; i < $tabMenuEl.length; i++){
        tabMenuClick(i);
    }
}
init();