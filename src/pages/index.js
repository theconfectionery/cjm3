import React from 'react';
import { Helmet } from 'react-helmet';
import 'swiper/css/bundle';
import 'swiper/css';
import 'swiper/css/effect-cards';
import App from '../components/App';

export default function Home() {
  // console.log("<<<<RENDERING HOME>>>>>")
  const arrowClickedStack = [];

  return (
    <>
      <Helmet>
        <script src="//code.jquery.com/jquery-3.1.1.slim.min.js"></script>
        <script src="https://unpkg.com/image-map/dist/image-map.js"></script>
        <script src="https://unpkg.com/jquery/dist/jquery.js"></script>
        <script src="https://unpkg.com/image-map/dist/image-map.jquery.js"></script>
        {/* <script src="web-animations.min.js"></script> */}
        {/* <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        /> */}
      </Helmet>
      <main className="main">
        <App arrowClickedStack={arrowClickedStack} />
        <div className="bug-footer">
          <a
            className="bug-footer__text"
            href="http://bug.theconfectionery.tv/"
            target="_blank"
          >
            BETA RELEASE 54.73 Click here to report a bug
          </a>
        </div>
      </main>
    </>
  );
}
