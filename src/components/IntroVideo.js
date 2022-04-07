import React, { useRef, useEffect } from 'react';
import IntroVideoSource from '../assets/intro-video.mp4';

export default function IntroVideo() {
  const videoRef = useRef(undefined);
  useEffect(() => {
    videoRef.current.defaultMuted = true;
  });
  return (
    <div className="intro-video-container">
      <video
        className="intro-video"
        ref={videoRef}
        loop
        autoPlay
        muted
        playsInline
      >
        <source src={IntroVideoSource} type="video/mp4" />
      </video>
    </div>
  );
}

{
  /* <div className="intro-video-container">
        <video className="intro-video" muted autoPlay playsInline>
          <source src={IntroVideo} type="video/mp4" />
        </video>
      </div> */
}
