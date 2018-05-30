// JavaScript source code
//tap meun
var $tabMenu = document.getElementById('tab-menu');
var $tabContainer = document.querySelector('.tab-container');

var $tadMenuEl = $tabMenu.querySelectorAll('a');
var $tabContrnt = $tabContainer.querySelectorAll('.tab-content');


var _cuid = 0;
var _exid = _cuid;
function TabMenuClick(id)
{
    //클릭 이벤트 함수
    function onClickTabMenu()
    {
        console.log(id);
        var $el = this;
        if (!$el.classList.contains('selected'))
        
            _cuid = id;
        $tadMenuEl[_exid].classList.remove('selected');
        $el.classList.add('selected');
        $tabContrnt[_exid].classList.remove('selected');
        $tabContrnt[_cuid].classList.add('selected');
            _exid = _cuid;
    }
    $tadMenuEl[id].addEventListener('click', onClickTabMenu);//밖에선 안의 안 함수는 호출불가

 }
    //클릭 이벤트 바인딩.


function init()
{
    console.log('init');
    for (var i = 0; i < $tadMenuEl.length; i++)
    {
        TabMenuClick(i);
    }
}
init();
