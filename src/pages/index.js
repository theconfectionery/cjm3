import React from 'react';
import { Helmet } from 'react-helmet';
import App from '../components/App';
import favicon from '../assets/images/favicon.ico';

export default function Home() {
  const arrowClickedStack = [];

  return (
    <>
      <Helmet>
        <script src="//code.jquery.com/jquery-3.1.1.slim.min.js"></script>
        <script src="https://unpkg.com/image-map/dist/image-map.js"></script>
        <script src="https://unpkg.com/jquery/dist/jquery.js"></script>
        <script src="https://unpkg.com/image-map/dist/image-map.jquery.js"></script>
        <title>The Confectionery</title>
<<<<<<< HEAD
        <link rel="shortcut icon" type="image/png" href={favicon} />
=======
   <!--     link={[{ rel: 'shortcut icon', type: 'image/png', href: `${favicon}` }]} -->
>>>>>>> 072003a (Update index.js)
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
