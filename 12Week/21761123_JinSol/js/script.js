var $tabMenu = document.getElementById("tab-menu");
var $tabContainer = document.querySelector(".tab-container");

var $tabMenuEl = $tabMenu.querySelectorAll("a");
var $tabContent = $tabContainer.querySelectorAll(".tab-content")

var _cuId = 0;
var _exId = _cuId;

function tabMenuClick (id)
{
    function onClickTabMenu ()
    {
        var $el = this;
        if (!$el.classList.contains("selected"))
        {
            $tabMenuEl[_exId].classList.remove("selected");
            
            _cuId = id;

            $el.classList.add("selected");
            $tabContent[_exId].classList.remove("selected");
            $tabContent[_cuId].classList.add("selected");
        
            _exId = _cuId;
        }

    }

    $tabMenuEl[id].addEventListener("click", onClickTabMenu)
}


function init ()
{
    for (var i = 0; i < $tabMenuEl.length; i++)
    {
        tabMenuClick (i);
    }
}

init();