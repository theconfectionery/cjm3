import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import ReactPlayer from 'react-player';
import 'bootstrap/dist/css/bootstrap.css';
import { VrVideo } from './VrVideo';
import 'videojs-youtube';
import Player from '@vimeo/player';
import VrTestVideo from '../vr-test.mp4';

const MediaPlayer = ({
  currentClickId,
  currentVideoDetails,
  arrowClickedStack,
  setCurrentVideoDetails,
  getVideoArray,
}) => {
  const { playVideo, currentVideoArray, videoIndex } = currentVideoDetails;
  const [currentVideoIndex, setCurrentVideoIndex] = useState(videoIndex);

  const getNextVideo = () => {
    // increase index
    if (playVideo && currentVideoIndex < currentVideoArray.length - 1) {
      setCurrentVideoIndex(currentVideoIndex + 1);
    }
    // if at last video in array, go to zero index
    else if (playVideo && currentVideoIndex === currentVideoArray.length - 1) {
      setCurrentVideoIndex(0);
    } else {
      setCurrentVideoIndex(0);
      setCurrentVideoDetails({
        videoIndex: 0,
        currentVideoArray: getVideoArray(currentClickId),
        playVideo: true,
        controls: true,
        playsinline: true,
        file: {
          forceVideo: true,
        },
      });
    }
  };

  const getPrevVideo = () => {
    // decrease index
    if (playVideo && currentVideoIndex > 0) {
      setCurrentVideoIndex(currentVideoIndex - 1);
    }
    // if at 0, go to last video in array
    else if (playVideo && currentVideoIndex === 0) {
      setCurrentVideoIndex(currentVideoArray.length - 1);
    } else {
      setCurrentVideoIndex(0);
      setCurrentVideoDetails({
        videoIndex: 0,
        currentVideoArray: getVideoArray(currentClickId),
        playVideo: true,
        controls: true,
        playsinline: true,
        file: {
          forceVideo: true,
        },
      });
    }
  };

  useEffect(() => {
    let touchstartX = {
      value: 0,
      id: '',
    };
    let touchendX = 0;

    const screenArea = document.querySelector('.screenArea');
    function handleGesture() {
      if (touchendX < touchstartX.value) {
        getNextVideo();
      }
      if (touchendX > touchstartX.value) {
        getPrevVideo();
      }
    }
    function addTouchstartPosition(e) {
      if (
        e.target.id.includes('video-swipe-left') ||
        e.target.id.includes('video-swipe-right')
      ) {
        touchstartX.value = e.changedTouches[0].screenX;
        touchstartX.id = e.target.id;
      }
    }

    function addTouchendPosition(e) {
      if (
        touchstartX.id === 'video-swipe-right' ||
        touchstartX.id === 'video-swipe-left'
      ) {
        touchendX = e.changedTouches[0].screenX;
        handleGesture();
      }
    }

    screenArea.addEventListener('touchstart', addTouchstartPosition);
    screenArea.addEventListener('touchend', addTouchendPosition);

    return () => {
      screenArea.removeEventListener('touchstart', addTouchstartPosition);
      screenArea.removeEventListener('touchend', addTouchendPosition);
    };
  });

  useEffect(() => {
    const windowWidth = window.matchMedia('(min-width: 900px)');

    if (windowWidth.matches) {
      if (currentClickId === 'leftArrow' || currentClickId === 'rightArrow') {
        if (playVideo && arrowClickedStack.length > 0) {
          const arrow = arrowClickedStack.pop();
          arrow === 'rightArrow' ? getNextVideo() : getPrevVideo();
        }
      }
    }
  });

  useEffect(() => {
    const carouselIndicators = document.querySelector('.carousel-indicators');
    const carouselButtons = carouselIndicators.querySelectorAll(
      'button[type="button"]'
    );
    carouselButtons.forEach((button, i) => {
      button.addEventListener('click', () => {
        setCurrentVideoIndex(i);
      });
    });
  });

  // const playerRef = React.useRef(null);

  // const handlePlayerReady = player => {
  //   playerRef.current = player;

  //   // you can handle player events here
  //   player.on('waiting', () => {
  //     console.log('player is waiting');
  //   });

  //   player.on('dispose', () => {
  //     console.log('player will dispose');
  //   });
  // };

  // useEffect(() => {
  //   const options = {
  //     url: 'https://vimeo.com/690111491/51eded40c3',
  //     loop: true,
  //   };
  //   const vrDiv = document.querySelector('.vr-div');
  //   const player = new Player(vrDiv, options);
  //   console.log(currentVideoArray);

  //   player.on('play', function () {
  //     console.log('played the video!');
  //   });
  // }, [currentVideoArray]);

  console.log(currentVideoArray);
  
  function runVrPlayer(video) {
    const options = {
      url: video.embeddedUrl,
      loop: true,
    };
    const vrDiv = document.querySelector('.vr-div');
    const player = new Player(vrDiv, options);

    player.on('play', function () {
      console.log('played the video!');
    });
  }

  const mediaPlayer = (
    <>
      <div
        className="video-swipe video-swipe_right"
        id="video-swipe-right"
      ></div>
      <div className="video-swipe video-swipe_left" id="video-swipe-left"></div>
      <Carousel
        interval={null}
        controls={false}
        activeIndex={currentVideoIndex}
      >
        {currentVideoArray.map((video, i) => {
          return (
            <Carousel.Item key={i}>
              {video.is360 ? (
                <div className="vr-div">{() => runVrPlayer(video)}</div>
              ) : (
                <ReactPlayer
                  className="react-player"
                  url={video.embeddedUrl}
                  height="100%"
                  width="100%"
                  controls={true}
                  playing={i === currentVideoIndex ? true : false}
                  onEnded={getNextVideo}
                  playsinline={true}
                  muted={true}
                />
              )}
            </Carousel.Item>
          );
        })}
      </Carousel>
    </>
  );

  return mediaPlayer;
};

export default MediaPlayer;
