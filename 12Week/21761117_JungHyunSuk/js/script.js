// console.log("connected");
var $tabMenu = document.getElementById('tab-menu');
var $tabContainer = document.querySelector('.tab-container');

var $tabMenuEl = $tabMenu.querySelectorAll('a');
var $tabContent = $tabContainer.querySelectorAll('.tab-content');

var _cuId = 0;
var _exId = _cuId;

//click 이벤트를 바인딩. (클로저)
function tabMenuClick(id){
    //클릭 이벤트 콜백함수.
    function onClickTabMenu(){
        console.log(id);
        var $el = this;
        if(!$el.classList.contains('selected')){ //selected 라는 클래스가 없을 때.
            console.log('없음');
            $tabMenuEl[_exId].classList.remove('selected');
            _cuId = id;
            /////////
            $tabMenuEl[_exId].classList.remove('selected');
            $el.classList.add('selected');
            //탭 속의 내용콘텐츠 
            $tabContent[_exId].classList.remove('selected');
            $tabContent[_cuId].classList.add('selected');
            /////////
            _exId = _cuId;
        }
        // else{
        //     console.log('있음');
        // }
    }

    //클릭 이벤트 바인딩.
    $tabMenuEl[id].addEventListener('click', onClickTabMenu);
}

//클릭 이벤트 콜백함수.
function init(){
    // console.log('init');
    //click 이벤트를 초기화.
    for(var i = 0; i < $tabMenuEl.length; i++){
        tabMenuClick(i); 
    }
}
init();
