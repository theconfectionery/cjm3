import React, { useEffect } from 'react';
import Player from '@vimeo/player';

export default function VrPlayer({ video, currentVideoArray }) {
  useEffect(() => {
    const options = {
      url: video.embeddedUrl,
      loop: true,
    };
    const vrDiv = document.querySelector('.vr-div');
    const player = new Player(vrDiv, options);

    player.on('play', function () {
      console.log('played the video!');
    });
  }, [currentVideoArray]);

  return <div className="vr-div"></div>;
}
