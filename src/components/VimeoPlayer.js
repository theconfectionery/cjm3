import React, { useEffect, useState, useRef } from 'react';
let prevRect = {};
let loading = false;

export default function VimeoPlayer({ url, currentVideoIndex }) {
  const [info, setInfo] = useState('');
  const [rect, setRect] = useState({});
  const ref = useRef(null);

  useEffect(() => {
    handleSize();

    function handleSize() {
      const refRect = ref.current.getBoundingClientRect();
      if (
        prevRect.width !== refRect.width ||
        prevRect.height !== refRect.height
      ) {
        setRect({ width: refRect.width, height: refRect.height });
        prevRect = { width: refRect.width, height: refRect.height };
      }
    }

    window.addEventListener('resize', handleSize);

    return () => {
      window.removeEventListener('resize', handleSize);
    };
  }, []);

  useEffect(() => {
    if (rect.width && rect.height)
      fetch(
        'https://vimeo.com/api/oembed.json?url=' +
          url +
          '&playsinline=true&xhtml=true' +
          `&width=${rect.width}&height=${rect.height}`
      )
        .then(res => res.json())
        .then(res => {
          setInfo(res.html);
        });
    else {
      const refRect = ref.current.getBoundingClientRect();
      fetch(
        'https://vimeo.com/api/oembed.json?url=' +
          url +
          '&playsinline=true&xhtml=true' +
          `&width=${refRect.width}&height=${refRect.height}`
      )
        .then(res => res.json())
        .then(res => {
          setInfo(res.html);
        });
    }
  }, [url, rect]);

  return (
    <>
      <div
        ref={ref}
        className="react-player"
        style={{ width: '100%', height: '100%' }}
        dangerouslySetInnerHTML={{ __html: info }}
      ></div>
    </>
  );
}
