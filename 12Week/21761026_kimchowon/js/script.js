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

// $tabContainer.prepend('<div>prepend/<div>');
var $btn1 = document.getElementById('btn1');
var $source1 = document.getElementById('source1');
var $tabtarget1= document.getElementById('tab-target1');
var $btn2 = document.getElementById('btn2');
var $source2 = document.getElementById('source2');
var $tabtarget2= document.getElementById('tab-target2');
var $btn3 = document.getElementById('btn3');
var $source3 = document.getElementById('source3');
var $tabtarget3= document.getElementById('tab-target3');
$btn1.addEventListener('click', function(){
    console.log("실행");
    $tabtarget1.append($source1);
    //익스플로러 에러: Object doesn't support property or method 'append'
});
$btn2.addEventListener('click', function(){
    console.log("실행");
    $tabtarget2.append($source2);
    //익스플로러 에러: Object doesn't support property or method 'append'
});
$btn3.addEventListener('click', function(){
    console.log("실행");
    $tabtarget3.append($source3);
    //익스플로러 에러: Object doesn't support property or method 'append'
});
