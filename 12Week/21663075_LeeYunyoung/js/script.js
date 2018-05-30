console.log("load")

var $tabMenu = document.getElementById ('tab-menu');
var $tabContainer = document.querySelector ('.tab-container');

var $tabMenuEl = $tabMenu.querySelectorAll ('a');
var $tabContent = $tabContainer.querySelectorAll ('.tab-content');



var _current = 0;
var _exchange = _current;



function tabMenuClick (id) {


   function onClickTabMenu() {

      console.log (id);

      var $el = this;

      if (!$el.classList.contains('selected')) {
         _current = id;

         $tabMenuEl[_exchange].classList.remove('selected');
         $el.classList.add('selected');
         $tabContent[_exchange].classList.remove('selected');
         $tabContent[_current].classList.add('selected');

         _exchange = _current;
      }
   }

   $tabMenuEl[id].addEventListener('click',onClickTabMenu);

}




function init () {

   console.log ('init');

   for (var i = 0; i < $tabMenuEl.length; i++) {
      tabMenuClick(i);
   }
}

init();