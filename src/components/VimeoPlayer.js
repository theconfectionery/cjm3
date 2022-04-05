import React, { useEffect, useState } from 'react';

export default function VimeoPlayer({ url }) {
  const [info, setInfo] = useState('');
  useEffect(() => {
    fetch('https://vimeo.com/api/oembed.json?url=' + url)
      .then(res => res.json())
      .then(res => {
        console.log(res);
        setInfo(res.html);
      });
  }, [url]);

  return (
    <div className="vr-player" dangerouslySetInnerHTML={{ __html: info }}></div>
  );
}
