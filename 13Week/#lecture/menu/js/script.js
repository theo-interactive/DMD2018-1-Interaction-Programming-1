
//Elements.
var $btnMenu = document.getElementById('btn-menu');
var $sideMenu = document.getElementById('side-menu');
var $btnClose = document.getElementById('btn-close');

//todo
//1 - 메뉴가 열려있는지 상태 체크. : O
//2 - 애니메이션 중인 상태에서 버튼 클릭이 안되도록 방지. : O
//op 1 - X 버튼에 애니메이션.
//op 2 - a 태그에 순차적인 애니메이션.

var _isOpen = false;
var _isAni = false;
function onClickBtnMenu(event){
    event.preventDefault();
    if(_isAni) return;
    if(!_isOpen){
        _isOpen = true;
        _isAni = true;
        $sideMenu.classList.add('open');
        setTimeout(function(){
            _isAni = false;
        }, 400);
    }
}
function onClickBtnClose(event){
    event.preventDefault();
    if(_isAni) return;
    if(_isOpen){
        _isOpen = false;
        _isAni = true;
        $sideMenu.classList.remove('open');
        setTimeout(function(){
            _isAni = false;
        }, 400);
    }
}
$btnMenu.addEventListener('click', onClickBtnMenu)
$btnClose.addEventListener('click', onClickBtnClose);