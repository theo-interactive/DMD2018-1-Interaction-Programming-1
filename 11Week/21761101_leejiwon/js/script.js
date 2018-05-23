    var _cuId = 0;
    var _exId = _cuId;

    var galleryElement = document.getElementById('gallery');
    var viewElement = galleryElement.getElementsByClassName('view')[0]; //view
    var viewItemElement = viewElement.getElementsByClassName('view-item');
    var listElement = galleryElement.getElementsByClassName('list')[0]; //list
    var listItemEl = listElement.getElementsByTagName('li');
    var listItemAEl = listElement.getElementsByTagName('a');
    for(var i = 0; i < listItemAEl.length; i++){
      btnListClick(i);
    }
    function btnListClick(id){
      listItemAEl[id].addEventListener('click', function(event){
        event.preventDefault();
        console.log('click');
        _cuId = id;
        changeImage();
      })
    }

    function changeImage(){
      viewItemElement[_exId].classList.remove('selected');
      viewItemElement[_cuId].classList.add('selected');
      _exId = _cuId;
    }