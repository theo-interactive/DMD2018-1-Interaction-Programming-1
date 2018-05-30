var $tabMenu = document.getElementById('tab-menu');
var $tabContainer = document.querySelector('.tab-container');

var $tabMenuEl = $tabMenu.querySelectorAll('a');
var $tabContent = $tabContainer.querySelectorAll('.tab-content');

var _cuId = 0;
var _exId = _cuId;

// 클릭 이벤트 바인딩.(클로저)
function tabMenuClick(id){
    // 클릭 이벤트 콜백 함수.
    function onClickTabMenu(){
        console.log(id);
        var $el = this;
        if(!$el.classList.contains('selected')){//el안에 selected 클래스가 !(없으면)
            _cuId = id;
            //////////////////////
            $tabMenuEl[_exId].classList.remove('selected');
            $el.classList.add('selected'); // 아래와 동일 구문
            $tabContent[_exId].classList.remove('selected');
            $tabContent[_cuId].classList.add('selected');
            //this.classList.add('selected');
            //////////////////////
            _exId = _cuId;
            
            console.log('없음');
        }else{
            console.log("있음");
        }
    }

    // 클릭 이벤트 바인딩.
    $tabMenuEl[id].addEventListener('click',onClickTabMenu);
}







function init(){
console.log('init 실행!')
// 클릭 이벤트 바인딩.
for(var i =0; i < $tabMenuEl.length; i++){
    tabMenuClick(i);
}
}
init();



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
     height: '600',
     width: '898',
     videoId: '8I-vAzzn4Q8',
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