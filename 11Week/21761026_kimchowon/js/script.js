
    var galleryEl = document.getElementById('gallery');
    var viewEl = galleryEl.getElementsByClassName('view')[0];
    var viewItemEl = viewEl.getElementsByClassName('view-item');
    var listEl = galleryEl.getElementsByClassName('list')[0];
    var listItemEl = listEl.getElementsByTagName('li');
    var listItemAEl = listEl.getElementsByTagName('a');
    // var viewElement = galleryElement.children()[0];
    // var listElement = galleryElement.children()[1];
    var _cuId = 0;
    var _exId = _cuId;
    function btnListClick(id){
    //a태그를 클릭하면
      listItemAEl[id].addEventListener('click', function(event){
        //클릭 이벤트 발생
        event.preventDefault();
        //preventDefault 는 기본으로 정의된 이벤트를 작동하지 못하게 하는 메서드
        _cuId = id;
        //변수에 클릭값대입
        changeImage();
        //changeImag 함수실행
      });
    }
    function changeImage(){
      viewItemEl[_exId].classList.remove('selected');
      //이전 이미지 지우기
      viewItemEl[_cuId].classList.add('selected');
      //현재 이미지 더하기
      // viewItemEl[_exId].style.display = 'none';
      // viewItemEl[_cuId].style.display = 'block';
      _exId = _cuId;
    }

    for(var i = 0; i < listItemAEl.length; i++){
      btnListClick(i);
      //a 태그 수에 맞게 클릭 가능
      // listItemAEl[i].addEventListener('click', function(event){
      //   event.preventDefault();
      //   console.log('click');
      // });
    }

    /*YT iframe Player*/

    var tag = document.createElement('script');

    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    // 3. This function creates an <iframe> (and YouTube player)
    //    after the API code downloads.
    var player;
    function onYouTubeIframeAPIReady() {
      player = new YT.Player('player', {
        height: '360',
        width: '640',
        videoId: '2pcShBVoCig',
        playerVars: {
          autoplay : 1,
          controls : 0,
          rel : 0,
          fs : 0,
          modestbranding : 0,
          showinfo : 0
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