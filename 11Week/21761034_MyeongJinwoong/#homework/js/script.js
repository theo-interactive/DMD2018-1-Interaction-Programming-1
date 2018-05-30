
var galleryEl = document.getElementById('gallery');
// var viewElement = galleryElement.children()[0];
// var listElement = galleryElement.children()[1];
var viewEl = galleryEl.getElementsByClassName('view')[0];
var viewItemEl = viewEl.getElementsByClassName('view-item');
var listEl = galleryEl.getElementsByClassName('list')[0];
var listItemEl = listEl.getElementsByTagName('li');
var listItemAEl = listEl.getElementsByTagName('a');
var circleEl = document.getElementsByClassName('circle');


var _cuId = 0;
var _exId = _cuId;
var idValue = ["CHBFLG9aYz4","RSTa8qhyNvw","lCPsMawKJLQ","65OvRb9cKhY"];

// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player1;
var player2;
var player3;
var player4;

function onYouTubeIframeAPIReady() {
  player1 = new YT.Player('player1', {
    height: '1280',
    width: '720',
    videoId: idValue[0],
    playerVars:{
        autoplay:0,
        controls:0,
        rel:0,
        fs:0,
        modestbranding:0,
        showinfo:0
    }
    
  //   events: {
  //     'onReady': onPlayerReady,
  //     'onStateChange': onPlayerStateChange
  //   }
  });

  player2 = new YT.Player('player2', {
    height: '1280',
    width: '720',
    videoId: idValue[1],
    playerVars:{
        autoplay:0,
        controls:0,
        rel:0,
        fs:0,
        modestbranding:0,
        showinfo:0
    }
    
  //   events: {
  //     'onReady': onPlayerReady,
  //     'onStateChange': onPlayerStateChange
  //   }
  });

  player3 = new YT.Player('player3', {
    height: '1280',
    width: '720',
    videoId: idValue[2],
    playerVars:{
        autoplay:0,
        controls:0,
        rel:0,
        fs:0,
        modestbranding:0,
        showinfo:0
    }
    
  //   events: {
  //     'onReady': onPlayerReady,
  //     'onStateChange': onPlayerStateChange
  //   }
  });

  player4 = new YT.Player('player4', {
    height: '1280',
    width: '720',
    videoId: idValue[3],
    playerVars:{
        autoplay:0,
        controls:0,
        rel:0,
        fs:0,
        modestbranding:0,
        showinfo:0
    }
    
  //   events: {
  //     'onReady': onPlayerReady,
  //     'onStateChange': onPlayerStateChange
  //   }
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

function btnListClick(id){
  listItemAEl[id].addEventListener('click',function(event){
    event.preventDefault(); // 기본 tag 기능 사용 방지
    console.log('click',id);
    _cuId = id;
    changeImage();
  });


}
function changeImage(){
  viewItemEl[_exId].classList.remove('selected');
  viewItemEl[_cuId].classList.add('selected');
  circleEl[_exId].classList.remove('selected');
  circleEl[_cuId].classList.add('selected');
  _exId = _cuId;
  // _cuId
  // viewItemEl[]
}

for(var i = 0; i < listItemAEl.length; i++){
  btnListClick(i);
  // listItemAEl[i].addEventListener('click',function(event){
  //   event.preventDefault(); // 기본 tag 기능 사용 방지
  //   console.log(i);
  //   console.log('click');
}

//  교수님 질문 있습니다.! 
//  리스트버튼을 클릭해 영상 이동시 전에 플레이 중이던 영상을 정지 시키고 싶은데, 
//  stopVideo()가 작동되지 않는 것 같아 방법이 있는지 여쭤보고 싶습니다!