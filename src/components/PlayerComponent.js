import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';

export default function PlayerComponent({
  video,
  i,
  currentVideoIndex,
  getNextVideo,
}) {
  const [showThumbnail, setShowThumbnail] = useState(false);
  const [play, setPlay] = useState(false);
  useEffect(() => {
    if (i === currentVideoIndex) {
      setShowThumbnail(true);
    }

    setPlay(false);
  }, [currentVideoIndex]);

  return (
    <ReactPlayer
      className="react-player"
      url={video.embeddedUrl}
      height="100%"
      width="100%"
      controls={true}
      playing={play}
      onEnded={getNextVideo}
      playsinline={true}
      onPlay={() => {
        setShowThumbnail(false);
        setPlay(true);
      }}
      // muted={true}
    />
  );
}
