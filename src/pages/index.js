import React from 'react';
import { Helmet } from 'react-helmet';
import App from '../components/App';

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
