var $tabMenu = document.getElementById('tab-menu');
var $tabContainer = document.querySelector('.tab-container');

var $tabMenuEl = $tabMenu.querySelectorAll('a');
var $tabContent = $tabContainer.querySelectorAll('.tab-content');


var _cuId = 0;
var _exId = _cuId;
// 클릭 이벤트 바인딩.(클로저)
function tabMenuClick(id){
    // 클릭 이벤트 콜백함수.
    function onClickTabMenu(){
        console.log(id);
        var $el = this;
        if(!$el.classList.contains('selected')){ //selected 라는 클래스가 없을 때.
            // console.log('없음');
            _cuId = id;
            ///////////
            $tabMenuEl[_exId].classList.remove('selected');
            $el.classList.add('selected');
            $tabContent[_exId].classList.remove('selected');
            $tabContent[_cuId].classList.add('selected');
            ///////////
            _exId = _cuId
        }
    }
    // 클릭 이벤트 바인딩.
    $tabMenuEl[id].addEventListener('click', onClickTabMenu);
}

function init(){
    console.log('init');
    // 클릭 이벤트 초기화.
    for(var i = 0; i < $tabMenuEl.length; i++){
        tabMenuClick(i);
    }
}
init();


// 영상 삽입 시작
var tag = document.createElement('script');
    
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player1', {
    height: '500',
    width: '800',
    videoId: 'Ek9LHfsDfL4',
    playerVars:{
        autoplay : 0, // 자동재생
        controls : 1, // 컨트롤러 바
        rel : 0, // 관련정보
        fs : 0,
        modestbranding : 0,
        showinfo : 0 // 인포메이션
    }
  });
}

function onPlayerReady(event) {
  event.target.playVideo();
}

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


// 영상 삽입 끝