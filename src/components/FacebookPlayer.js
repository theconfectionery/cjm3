import React, { useEffect, useState, useRef } from 'react';
let prevRect = {};
let loading = false;

export default function VimeoPlayer({ url }) {
  const [info, setInfo] = useState('');
  const [rect, setRect] = useState({ width: 560, height: 280 });
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

  return (
    <>
      <iframe
        ref={ref}
        className="react-player"
        style={{ width: '100%', height: '100%' }}
        dangerouslySetInnerHTML={{ __html: info }}
        src={`https://www.facebook.com/plugins/video.php?width=${rect.width}&height=${rect.height}&show_text=false`}
      ></iframe>
    </>
  );
}
