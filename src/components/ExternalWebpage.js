import React, { useEffect } from 'react';

export default function ExternalWebpage() {
  // fade in webpage
  useEffect(() => {
    const webpage = document.querySelector('.external-webpage');
    setTimeout(() => {
      webpage.style.opacity = '1';
    }, 1000);
  }, []);

  // black screen before webpage fades in
  useEffect(() => {
    const blackOverlay = document.querySelector('.black-overlay');
    setTimeout(() => {
      blackOverlay.classList.remove('black-overlay_hidden');
    }, 500);
    setTimeout(() => {
      blackOverlay.classList.add('black-overlay_hidden');
    }, 1000);
    setTimeout(() => {
      blackOverlay.style.display = 'none';
      blackOverlay.classList.remove('black-overlay_hidden');
    }, 1200);
  });

  return (
    <>
      <div
        className="black-overlay black-overlay_hidden"
        styles="display: block;"
      ></div>
      <iframe
        type="text/html"
        src="https://www.cine.doctor/"
        className="external-webpage"
      ></iframe>
    </>
  );
}
