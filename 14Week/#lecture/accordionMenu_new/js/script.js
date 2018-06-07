var $menu = document.getElementById('accordion-menu');
var $menuItems = $menu.querySelectorAll('.menu-item');
var $menuItemsEl = $menu.querySelectorAll('a');
var _max = $menuItems.length;
var _isOpen = false;
var _isAni = false;
var _itemW = 0.4;
var _winW = 0, _winH = 0;
function menu(id){
    var $close = $menuItems[id].querySelector('.btn-close');
    function onClickMenu(e){
        e.preventDefault();
        //$menuItemsEl[id] this = a
        //div.menu-item > a
        //div.menu-item < this.parentElement
        //*****
        //부모 요소 셀렉터.
        var $parent = this.parentElement;
        //*****
        if(_isAni) return;
        if(!$parent.classList.contains('selected')){
            menuItemClassReset();
            $parent.classList.add('selected');
            _isOpen = true;
            _isAni = true;
            for(var i = 0; i < _max; i++){
                var width = 0;
                if(i === id){
                    width = _winW * _itemW;
                }else{
                    width = _winW * (1.0 - _itemW) / (_max - 1);
                }
                $menuItems[i].style.width = width + 'px';        
            }
            setTimeout(function(){
                _isAni = false;
            }, 300);
        }        
    }
    function onClickMenuClose(e){
        e.preventDefault();
        var $parent = this.parentElement;
        if($parent.classList.contains('selected')){
            _isOpen = false;
            $parent.classList.remove('selected');
            for(var i = 0; i < _max; i++){
                width = _winW / _max;
                $menuItems[i].style.width = width + 'px';
            }
        }
    }
    $menuItemsEl[id].addEventListener('click', onClickMenu);
    $close.addEventListener('click', onClickMenuClose);
}
for(var i = 0; i < _max; i++){
    menu(i);
}
function menuItemClassReset(){
    for(var i = 0; i < _max; i++){
        $menuItems[i].classList.remove('selected');
    }
}
function onResize(){
    $menu.classList.add('resize');
    _winW = window.innerWidth;
    _winH = window.innerHeight;
    $menu.style.width = _winW + 'px';
    $menu.style.height = _winH + 'px';
    for(var i = 0; i < _max; i++){
        var width = 0;
        if(_isOpen){
            if($menuItems[i].classList.contains('selected')){
                width = _winW * _itemW;
            }else{
                width = _winW * (1.0 - _itemW) / (_max - 1);
            }
        }else{
            width = _winW / _max;
        }
        $menuItems[i].style.width = width + 'px';
    }
    setTimeout(function(){
        $menu.classList.remove('resize');
    }, 10);
}
onResize();
window.addEventListener('resize', onResize);