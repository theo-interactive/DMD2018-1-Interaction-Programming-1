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

var R = 300 , dur = 5; 

var tl = new TimelineLite()
.staggerTo(".small_cookie", dur ,{
bezier:{curviness:1.5,values:[{x:0,y:0},{x:R/2,y:R/2},{x:0,y:R},{x:-R/2,y:R/2},{x:0,y:0}]}
,rotation:-720,repeat:-1,ease:Power0.easeNone},dur/6)
.to(".main_cookie", dur ,{rotation:-360,ease:Power0.easeNone,repeat:-1},0)
.time(dur);



