var $menu = document.getElementById('accordion-menu');
var $menuItems = $menu.querySelectorAll('.menu-item');
var $menuItemsEl = $menu.querySelectorAll('a');
var _itemW = 0.4; //40%
//100 - 1.0
//40% - 0.4. 20% - 0.2
function menuOverOut(id){
    function onOverMenu(e){
        e.preventDefault();
        //console.log('over', id);
        for(var i = 0; i < $menuItems.length; i++){
            if(i === id){
                $menuItems[i].style.width = 800 * _itemW + 'px';
                //800px - 40%
            }else{
                $menuItems[i].style.width = 800 * ((1 - _itemW) / ($menuItems.length - 1))  + 'px';
                //(1 - _itemW) / ($menuItems.length - 1)
                //over 이외의 요소들의 width.
                //(1 - _itemW) / ($menuItems.length - 1)
                //(1.0 - 0.4) / (4 - 1)
                //0.6 / 3
                //----800 * 0.2 = 20%

            }
        }
    }
    function onOutMenu(e){
        e.preventDefault();
        console.log('out', id);
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
for(var i = 0; i < $menuItemsEl.length; i++){
    menuOverOut(i);
}