var $gallery = document.getElementById('gallery');
// querySelector = CSS문과 동일하게 Id,Class 지정, 단수(1개씩)
// document.querySelector('#gallery');
// document.querySelector('div#galley');
// document.querySelector('div.view');
// 아래 목록까지 다 찾아짐.

// querySelectorAll = 복수(여러개)
// document.querySelectorAll('.view-item');

var $view = $gallery.querySelector('.view');
var $list = $gallery.querySelector('.list');
console.log($list);
console.log($view);



// 기존에 Element를 찾을 땐 htmlCollection으로 찾을 수 있음.
// var view = document.getElementsByClassName('.view');
// var list = document.getElementsByClassName('.list');
// console.log(list);
// console.log(view);


var $viewItem = $view.querySelectorAll('.view-item');
var $listItem = $list.querySelectorAll('a');
console.log($viewItem);
console.log($listItem);

// 전역변수. 현재 ID, 이전 ID.
var _cuId = 0;
var _exId = _cuId;

// 클로저.
function listClick(id){
    function onClickList(event){
        // 기존 태그의 기능을 상실하게 함.
        event.preventDefault();
        
        // this = 지금 클릭한 요소.
        // console.log(this);
        // parentElement = 해당 요소의 부모 노드.
        var $el = this, $parent = $el.parentElement;
        
        // if($parent.classList.contains('selected')){
        //     console.log('선택되어 있음!');
        // } // border되어있는 element 찾기.

        // contains = 특정 클래스 값이 요소의 클래스 속성에 존재하는지 확인한다.
        if(!$parent.classList.contains('selected')){
            // 전역변수의 id를 변경한다. - 현재 보여지는 이지미를 체크하기 위함.
            _cuId = id;
            $listItem[_exId].parentElement.classList.remove('selected');
            $parent.classList.add('selected');
            $viewItem[_exId].classList.remove('selected');
            $viewItem[_cuId].classList.add('selected');
            console.log(id);
            // 다음에 클릭할 것을 대비해, 이전 id 를 현재 id로 변경
            _exId = _cuId;
        }

    }
    $listItem[id].addEventListener('click',  onClickList);
    // func 

    // func
}


// list item click 이벤트.
for(var i = 0; i < $listItem.length; i++){
    listClick(i);
}