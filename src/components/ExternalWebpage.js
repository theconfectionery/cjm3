import React, { useEffect } from 'react';

export default function ExternalWebpage() {

  useEffect(() => {
    const webpage = document.querySelector('.external-webpage');
    setTimeout(() => {
      webpage.style.opacity = '1';
    }, 1000)
  }, [])

  return (
    <iframe
      type="text/html"
      src="https://www.cine.doctor/"
      className="external-webpage"
    ></iframe>
  );
}
