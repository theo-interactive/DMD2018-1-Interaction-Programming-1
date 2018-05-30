var $tabMenu = document.getElementById('tab-menu');
var $tabContainer = document.querySelector('.tab-container');
var $tabMenuEl = $tabMenu.querySelectorAll('a');
var $tabContent = $tabContainer.querySelectorAll('.tab-content');

var _cuId = 0;
var _exId = _cuId;
//클릭 이벤트 바인딩. (클로저))
function tabMenuClick(id){
    //클릭 이벤트 콜백 함수.
    function onClickTabMenu(){
        console.log(id);
        var $el = this;
        //if(!this.classList.contains('selected')){
        if(!$el.classList.contains('selected')){
            _cuId = id;
            $tabMenuEl[_exId].classList.remove('selected');
            $el.classList.add('selected');
            $tabContent[_exId].classList.remove('selected');
            $tabContent[_cuId].classList.add('selected');

            _exId = _cuId;
        }
    }
    //클릭 이벤트 바인딩.
    $tabMenuEl[id].addEventListener('click', onClickTabMenu);
}

function init(){
    console.log('init');
    for(var i = 0; i < $tabMenuEl.length; i++){
        tabMenuClick(i);    }
    
}
init();


var galleryEl = document.getElementById('gallery');
var viewEl = galleryEl.getElementsByClassName('view')[0];
var viewItemEl = viewEl.getElementsByClassName('view-item');
var listEl = galleryEl.getElementsByClassName('list')[0];
var listItemEl = listEl.getElementsByTagName('li');
var listItemAEl = listEl.getElementsByTagName('a');

var _cuId = 0;
var _exId = _cuId;

function btnListClick(id) {
listItemAEl[id].addEventListener('click', function(event) {
 event.preventDefault();
 _cuId = id;
 changeImage();
});
}

function changeImage() {
viewItemEl[_exId].classList.remove('selected');
viewItemEl[_cuId].classList.add('selected');
     _exId = _cuId;
}


for (var i = 0; i < listItemEl.length; i++) {
btnListClick(i);
}
