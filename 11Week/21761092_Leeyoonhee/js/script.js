var galleryEl = document.getElementById('gallery');
var viewEl = galleryEl.getElementsByClassName('view')[0];
var viewItemEl = viewEl.getElementsByClassName('view-item');
var listEl = galleryEl.getElementsByClassName('list')[0];
var listItemEl = listEl.getElementsByTagName('li');
var listItemAEl = listEl.getElementsByTagName('a');
// var viewEl = galleryEl.children()[0];
// var listEl = galleryEl.children()[1];
	
var _cuId = 0;
var _exId = _cuId;

function btnListClick(id){
	listItemAEl[id].addEventListener('click', function(event){
		event.preventDefault();
		_cuId = id;
		changeImage();
	});
}

function changeImage(){
	viewItemEl[_exId].classList.remove('selected');
	viewItemEl[_cuId].classList.add('selected');
	listItemEl[_exId].classList.remove('selected');
	listItemEl[_cuId].classList.add('selected');
	// viewItemEl[_exId].style.display = 'none';
	// viewItemEl[_cuId].style.display = 'block';
	_exId = _cuId;
	//_cuId
	//viewItemEl[]
}


for(var i = 0; i < listItemAEl.length; i++){
	btnListClick(i);
	// listItemAEl[i].addEventListener('click', function(event){
	// 	event.preventDefault();
	// 	console.log('click');
	// });
}