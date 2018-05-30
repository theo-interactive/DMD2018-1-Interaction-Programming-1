var $tabM = document.getElementById ('tab-menu');
var $tabC = document.querySelector ('.tab-container');

var $tabME = $tabM.querySelectorAll ('a');
var $tabCT =$tabC.querySelectorAll ('.tab-content');

var _cuNum = 0;
var _exNum = _cuNum;

function tabMClick(id) {
    function onClickTabM () {
        console.log (id);

        var $el = this;

        if (!this.classList.contains ('selected')) {
            _cuNum = id;

            $tabME[_exNum].classList.remove ('selected');
            this.classList.add ('selected');
            $tabCT[_exNum].classList.remove ('selected');
            $tabCT[_cuNum].classList.add ('selected');

            _exNum = _cuNum
        }
    };
    $tabME[id].addEventListener('click',onClickTabM);
};


function init() {
    for (var i = 0; i < $tabME.length; i++) {
        tabMClick(i);
    }
};
init();