// console.log("js connected");
var galleryElement = document.getElementById('gallery');
//이미지가 보여지는 영역의 element를 제어하기위해
var viewElement = galleryElement.getElementsByClassName('view')[0];
var viewItemElement = viewElement.getElementsByClassName('view-item');

//썸네일을 제어하기위해
var listElement = galleryElement.getElementsByClassName('list')[0];
var listItemElement = listElement.getElementsByTagName('li');
//a태그 element (이미지 지체)
var listItemAElement = listElement.getElementsByTagName('a');

//현재 아이디의 값을 나타내는 변수선언
var _cuId = 0;
//이전 아이디의 값을 나타내는 변수선언
var _exId = _cuId;

//반복문을 통해 btnListClick의 parameter안에 대입가능한 배열의 index 모두 구하기
for(var i = 0; i < listItemAElement.length; i++){
    btnListClick(i);
}

function chageImage(){
    // classList 마지막에 selected를 붙여 선택된 클래스가 구분될 수 있도록 하기.
    viewItemElement[_exId].classList.remove('selected');
    viewItemElement[_cuId].classList.add('selected');
    //현재 이미지의 Id값을 이전 이미지 Id값에 저장하기
    _exId = _cuId;
}

//버튼 클릭시
function btnListClick(id){
    //a태그 (이미지)를 클릭했을때.
    listItemAElement[id].addEventListener('click', function(event){
        //태그의 기본기능 막기
        event.preventDefault();
        // console.log('click');
        _cuId = id;
        chageImage();
    })
}

 // 2. This code loads the IFrame Player API code asynchronously.
 var tag = document.createElement('script');

 tag.src = "https://www.youtube.com/iframe_api";
 var firstScriptTag = document.getElementsByTagName('script')[0];
 firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

 // 3. This function creates an <iframe> (and YouTube player)
 //    after the API code downloads.
 var player;
 function onYouTubeIframeAPIReady() {
   player = new YT.Player('player', {
     height: '768px',
     width: '480px',
     //URL의 v다음이 아이디임.
     videoId: 'Xmq_FJd1oUQ',
     playerVars: {
       autoplay : 1,
       controls : 0,
       rel : 0,
       fs : 0,
       modestbranding : 0,
       showinfo : 0
     }
     // events: {
     //   'onReady': onPlayerReady,
     //   'onStateChange': onPlayerStateChange
     // }
   });
 }

 // 4. The API will call this function when the video player is ready.
 function onPlayerReady(event) {
   event.target.playVideo();
 }

 // 5. The API calls this function when the player's state changes.
 //    The function indicates that when playing a video (state=1),
 //    the player should play for six seconds and then stop.
 var done = false;
 function onPlayerStateChange(event) {
   if (event.data == YT.PlayerState.PLAYING && !done) {
     setTimeout(stopVideo, 6000);
     done = true;
   }
 }
 function stopVideo() {
   player.stopVideo();
 }