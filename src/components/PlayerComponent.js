import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';

export default function PlayerComponent({
  video,
  i,
  currentVideoIndex,
  getNextVideo,
}) {
  const [showThumbnail, setShowThumbnail] = useState(false);

  useEffect(() => {
    if (i === currentVideoIndex) {
      setShowThumbnail(true);
    } else {
      setTimeout(() => {
        setShowThumbnail(false);
      }, 500);
    }
  }, [currentVideoIndex]);

  return (
    <ReactPlayer
      className="react-player"
      url={video.embeddedUrl}
      height="100%"
      width="100%"
      controls={true}
      playing={i === currentVideoIndex ? true : false}
      onEnded={getNextVideo}
      playsinline={true}
      // muted={true}
      light={showThumbnail ? true : false}
    />
  );
}
