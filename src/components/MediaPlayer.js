import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';

const MediaPlayer = ({
  currentClick,
  currentVideoDetails,
  arrowClickedStack,
  setVideoDetails,
  getVideoArray,
}) => {
  const { currentClickId } = currentClick;
  const { playVideo, currentVideoArray, videoIndex } = currentVideoDetails;
  const [currentVideoIndex, setCurrentVideoIndex] = useState(videoIndex);

  const getNextVideo = () => {
    if (playVideo && currentVideoIndex < currentVideoArray.length - 1) {
      setCurrentVideoIndex(currentVideoIndex + 1);
    } else {
      setCurrentVideoIndex(0);
      setVideoDetails({
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
    if (playVideo && currentVideoIndex > 0) {
      setCurrentVideoIndex(currentVideoIndex - 1);
    } else {
      setCurrentVideoIndex(0);
      setVideoDetails({
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

  const mediaPlayer = (
    <ReactPlayer
      className="react-player"
      url={currentVideoArray[currentVideoIndex].embeddedUrl}
      height="95%"
      width="95%"
      playing // Sets autoplay on click
      controls={false}
      onEnded={getNextVideo}
    />
  );

  return mediaPlayer;
};

export default MediaPlayer;
