var $menu = document.getElementById('accordion-menu');
var $menuItems = $menu.querySelectorAll('.menu-item');
var $menuItemsEl = $menu.querySelectorAll('a');
var _max = $menuItems.length;
var _itemW = 0.4; //40%
//100 - 1.0
//40% - 0.4. 20% - 0.2
function menuOverOut(id){
    function onOverMenu(e){
        e.preventDefault();
        for(var i = 0; i < _max; i++){
            //현재 영역에 오버된 요소 - selected.
            var width = 0;
            if(i === id){
                //현재 선택된 요소 item.
                //선택된 item 의 width : 800 의 40% = 800 * _itemW(0.4)
                width = 800 * _itemW; //40%
            }else{
                //현재 선택된 item 이외의 item.
                //width : 800 의 40% 를 제외한 영역을 기준으로 나머지 개수를 나누어 영역을 구함.
                //(1) (1.0 - 0.4) - 40% 를 제외한 영역 ---- 0.6
                //(2) (4 - 1) - 선택된 요소를 제외한 개수 - _max($menuItems.length) - 1  ----- 3
                //800 * (1) / (2) = 0.2
                //공식 : 전체영역의 길이  * (1.0 - _itemW) / (_max - 1)
                width = 800 * (1.0 - _itemW) / (_max - 1); //20%
            }
            //100% 40-20-20-20
            $menuItems[i].style.width = width + 'px';            
        }
    }
    function onOutMenu(e){
        e.preventDefault();
        //console.log('out', id);
        for(var i = 0; i < _max; i++){
            width = 800 / _max;
            $menuItems[i].style.width = width + 'px';
        }
    }
    //마우스 이벤트.
    //click.
    //mouseover, mouseout. - 마우스가 영역에 들어갈 때, 나올 때.
    //mouseenter, mouseleave. - 마우스가 영역에 머무를 때, 떠날 때.
    //mousedown, mousemove, mouseup
    // - 드래그.
    //down : 마우스 커서를 눌렀을 때. 
    //move : 마우스를 움직일 때.
    //up : 마우스 커서를 눌렀다가 뗄 때.
    $menuItemsEl[id].addEventListener('mouseenter', onOverMenu);
    $menuItemsEl[id].addEventListener('mouseleave', onOutMenu);
}
for(var i = 0; i < _max; i++){
    menuOverOut(i);
}