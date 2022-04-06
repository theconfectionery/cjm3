import React, { useEffect, useState } from 'react';

export default function VimeoPlayer({ url, currentVideoIndex }) {
  const [info, setInfo] = useState('');
  const [play, setPlay] = useState(false);
  useEffect(() => {
    setPlay(false);
    fetch('https://vimeo.com/api/oembed.json?url=' + url + '&playsinline=true')
      .then(res => res.json())
      .then(res => {
        console.log(res);
        setInfo(res.html);
      });
  }, [url]);

  return (
    <>
      <div
        className="react-player"
        dangerouslySetInnerHTML={{ __html: info }}
      ></div>
    </>
  );
}
