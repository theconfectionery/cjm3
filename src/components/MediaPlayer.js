import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import ReactPlayer from 'react-player';
import 'bootstrap/dist/css/bootstrap.css';

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
    // console.log(`The stack has ${arrowClickedStack.length} elements`)
    if (currentClickId === 'leftArrow' || currentClickId === 'rightArrow') {
      if (playVideo && arrowClickedStack.length > 0) {
        const arrow = arrowClickedStack.pop();
        arrow === 'rightArrow' ? getNextVideo() : getPrevVideo();
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

  // useEffect(
  //   i => {
  //     if (i === currentVideoIndex) {
  //       // setIsVideoPlaying(true);
  //     } else {
  //       // setIsVideoPlaying(false);
  //     }
  //   },
  //   [currentVideoIndex]
  // );

  const mediaPlayer = (
    // <body className="media-body" xmlns="http://www.w3.org/1999/xhtml">
      <Carousel
        xmlns="http://www.w3.org/1999/xhtml"
        touch={true}
        interval={null}
        controls={false}
        activeIndex={currentVideoIndex}
      >
        {currentVideoArray.map((video, i) => {
          return (
            <Carousel.Item key={i}>
              <ReactPlayer
                className="react-player"
                url={video.embeddedUrl}
                height="95%"
                width="95%"
                controls={true}
                playing={i === currentVideoIndex ? true : false}
                // playing={false}
                onEnded={getNextVideo}
                muted={true}
              />
            </Carousel.Item>
          );
        })}
      </Carousel>
    // </body>
  );

  return mediaPlayer;
};

export default MediaPlayer;
