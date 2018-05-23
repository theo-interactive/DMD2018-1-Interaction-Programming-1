var galleyEl = document.getElementById('gallery');

var viewclassEl = document.getElementsByClassName("view")[0];
var viewItemclassEl = document.getElementsByClassName('gallery_view');

var listEl = gallerlyEl.getElementsByClassName('list')[0];
var listitemEl = listEl.getElementsByTagName('li');
var listitemAEl = listEl.getElementsByTagName('a');

var _Culd = 0;
var _Exld = _Culd;

function btnlist(id) {
    for (var i = 0; i < listitemAEl.length; i++) {
        listitemAEl[id].addEventListener('click', function (event) {
            event.preventDefault();
            console.log('click', id);
            _Culd = id;
        })
    }
}

function changimg() {
    viewItemclassEl[_Exld].classList.remove('selected');
    viewItemclassEl[_Culd].classList.add('selected');
    listitemEl[_Exld].classList.remove('selected');
    listitemEl[_Culd].classList.add('selected');
    _Exld = _Culd;
}
for (var i = 0; i < listItEl_A.length; i++) {
    btnlist(i);
}
