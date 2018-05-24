var $gallery = document.getElementById('gallery');
var $view = $gallery.querySelector('.view');
var $viewContainer = $view.querySelector('.view-container');
var $viewItem = $viewContainer.querySelectorAll('.view-item');//[]
var $list = $gallery.querySelector('.list');
var $listItem = $list.querySelectorAll('a');//[]

// var _cuId = 0;
// var _exId = _cuId;
// function listClick(id){
//     function onClickList(event){
//         event.preventDefault();
//         var $el = this, $parent = $el.parentElement;
//         if(!$parent.classList.contains('selected')){
//             _cuId = id;
//             $listItem[_exId].parentElement.classList.remove('selected');
//             $parent.classList.add('selected');
//             $viewItem[_exId].classList.remove('selected');
//             $viewItem[_cuId].classList.add('selected');
//             _exId = _cuId;
//         }
//     }
//     $listItem[id].addEventListener('click', onClickList);
// }

//갤러리의 width 값.
var _galleryW = 800;
var _cuId = 0;
var _exId = 0;
//전체 이미지의 개수.
var _max = $viewItem.length;
//갤러리 리사이즈.
function galleryResize(){
    //.view-container 800 * 4 = 3200 px
    $viewContainer.style.width = _galleryW * _max + 'px';
    for(var i = 0; i < $viewItem.length; i++){
        //.view-item 800 px
        $viewItem[i].style.width = _galleryW + 'px';
    }
}
//초기화.
function init(){
    console.log('초기화');
    galleryResize();
    for(var i = 0; i < $listItem.length; i++){
        // listClick(i);
    }
}
init();