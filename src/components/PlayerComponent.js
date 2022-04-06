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
    setPlay(false);
  }, [currentVideoIndex, i, video]);

  return (
    <ReactPlayer
      className="react-player"
      url={video.embeddedUrl}
      height="100%"
      width="100%"
      playing={play}
      controls={true}
      onClickPreview={() => setPlay(true)}
      onEnded={getNextVideo}
      playsinline={true}
      light={currentVideoIndex === i}
      onPlay={() => setPlay(true)}
      onPause={() => setPlay(false)}
      // muted={true}
    />
  );
}
