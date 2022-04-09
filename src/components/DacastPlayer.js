import React, { useRef } from 'react';
import { usePlayer } from 'use-player';

export default function DacastPlayer({ url }) {
  let playerRef = React.useRef(null);
  let playerOptions = {
    autoplay: false, // default
    provider: 'universe', // default
  };

  usePlayer(playerRef, url.split('/').pop(), playerOptions);

  return <div className="react-player" ref={playerRef}></div>;
}
