//gallery 요소.
var $gallery = document.getElementById('gallery');
//document.querySelector('#galley');
//document.querySelector('div#galley');
//document.querySelector('div.view');
//1개 만.
//document.querySelectorAll('.view-item');
//['<view-item>', '<view-item>', '<view-item>', '<view-item>'];
//복수.

//gallery view, list 요소.
var $view = $gallery.querySelector('.view');
var $list = $gallery.querySelector('.list');
//gallery view, list - item 요소.
var $viewItem = $view.querySelectorAll('.view-item');//[]
var $listItem = $list.querySelectorAll('a');//[]

//전역변수. 현재 ID, 이전 ID.
var _cuId = 0;
var _exId = _cuId;
//클로저.
function listClick(id){
    function onClickList(event){
        //console.log(event);
        //요소(태그)가 가지는 기본 속성을 방지(제거).
        event.preventDefault();
        //클릭한 요소.
        var $el = this, $parent = $el.parentElement;
        //parentElement. - 해당 요소의 부모 노드.
        // if($parent.classList.contains('selected')){
        //     console.log('선택 O');
        // }else{
        //     //false.
        //     console.log('선택 X');
        // }
        if(!$parent.classList.contains('selected')){
            //전역변수의 id 를 바꾼다. - 현재 보여지는 이미지를 체크하기 위함.
            _cuId = id;
            $listItem[_exId].parentElement.classList.remove('selected');
            $parent.classList.add('selected');
            $viewItem[_exId].classList.remove('selected');
            $viewItem[_cuId].classList.add('selected');
            //다음에 클릭할 것을 대비하여, 이전 id 를 현재의 id 로 변경.
            _exId = _cuId;
        }
    }
    $listItem[id].addEventListener('click', onClickList);
}

//list item click 이벤트.
for(var i = 0; i < $listItem.length; i++){
    listClick(i);
}