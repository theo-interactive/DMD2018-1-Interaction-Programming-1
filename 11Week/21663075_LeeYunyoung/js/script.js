console.log("load");

var galleryEl = document.getElementById("gallery");

var viewEl = galleryEl.getElementsByClassName("view")[0];
var viewItemEl = viewEl.getElementsByClassName("view-item");

var listEl = galleryEl.getElementsByClassName("list")[0];
var listIemEl = listEl.getElementsByTagName("li");
var listItemAEl = listEl.getElementsByTagName("a");

var _cuId = 0;
var _exId = _cuId;

function btnListiClick(id) 
{ 
	listItemAEl[id].addEventListener("click", function(event)
	{
        event.preventDefault();
        // console.log("click", id);
        _cuId = id;
        changeImage();
    });
}

function changeImage() 
{
	viewItemEl[_exId].classList.remove("selected");
	viewItemEl[_cuId].classList.add("selected");
      
	_exId = _cuId;
}

for (var i=0; i<listItemAEl.length; i++) 
{
	btnListiClick(i);
}