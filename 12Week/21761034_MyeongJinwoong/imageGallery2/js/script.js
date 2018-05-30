var $gallery = document.getElementById('gallery');
var $view = $gallery.querySelector('.view');
var $viewContainer = $view.querySelector('.view-container');
var $list = $gallery.querySelector('.list');
var $viewItem = $view.querySelectorAll('.view-item');//[] // 아래$viewItem과 같음.
//var $viewItem = $viewContainer.children();//[];
var $listItem = $list.querySelectorAll('a');//[]

//갤러리의 width값.
var _galleryW = 800;
var _cuId = 0;
var _exId = 0;
//전체 이미지의 개수.
var _max = $viewItem.length;
//갤러리 리사이즈
function galleryResize(){
    // console.log(_max);

    //.view-container 800 * 4 = 3200px;
    $viewContainer.style.width = _galleryW * _max + 'px';
    for(var i = 0; i < $viewItem.length; i++){
        // .view-item 800px
        $viewItem[i].style.width = _galleryW + 'px';
    }
}
function gallerySlide(){
    // _cuId = 0 이면 800 * 0 = 0, 0 * -1 = 0;
    // _cuId = 1 이면 800 * 1 = 800, 800 * -1 = -800;
    // _cuId = 2 이면 800 * 2 = 1600, 1600 * -1 = -1600;
    // _cuId = 3 이면 800 * 3 = 2400, 2400 * -1 = -2400;
    // $viewContainer.style.left = _galleryW * _cuId * -1 + 'px';
    /*
    CSS
    translate3d(x,y,z);
    transform :translate3d(0,0,0);
    //크로스 브라우징
    -moz-transform :translate3d(0,0,0); // 파이어폭스
    -webkit-transform :translate3d(0,0,0); // 사파리, 크롬
    -o-transform :translate3d(0,0,0); // 오페라
    -ms-transform :translate3d(0,0,0); // 익스플로러
    */
    // 각 리스트의 격차에 따른 속도 분배
    var duration = 350 + 150*Math.abs(_cuId - _exId);

    console.log(duration);

    $viewContainer.style.transform = 'translate3d('+_galleryW * _cuId * -1 + 'px, 0, 0)';
    
    // 움직일 스타일 속성.
    $viewContainer.style.transitionProperty = 'transform';
    // 속도
    $viewContainer.style.transitionDuration = duration+'ms';
    // 가속도
    $viewContainer.style.transitionTimeFunction = 'ease-out';
    // $viewContainer.style.transitionTimeFunction = 'cubic-bezier(0.455, 0.03, 0.515, 0.955)';
    
}

$viewContainer.addEventListener('transitionend', function(){
    $viewContainer.style.transitionProperty = null;
    $viewContainer.style.transitionDuration = null;
    $viewContainer.style.transitionTimeFunction = null;
});

function listClick(id){
    function onClickList(event){
        event.preventDefault();
        var $el = this, $parent = $el.parentElement;
        if(!$parent.classList.contains('selected')){
            _cuId = id;
            $listItem[_exId].parentElement.classList.remove('selected');
            $parent.classList.add('selected');
            //현재의 값이 들어왔을 때 움직이고 현재 값(_cuId)을 이전 값(_exId)에 대입한다.
            gallerySlide();
            
            _exId = _cuId;
        }
    }
    $listItem[id].addEventListener('click',  onClickList);
}




//초기화.
function init(){
    // console.log('초기화');
    galleryResize();
    for(var i = 0; i < $listItem.length; i++){
        listClick(i);
    }
}
init();