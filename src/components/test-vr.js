import React, { Component } from 'react';
import './videojs/skins/treso/videojs.css';
import './videojs/skins/videojs.vr.css';
import videojs from 'video.js';
import './videojs/components/nuevo.js';

export default class VideoJs extends Component {
  componentDidMount() {
    // video properties

    const videoJsOptions = {
      controls: true,
      preload: 'auto',
      poster: '//url-to-poster-image.jpg',
      sources: [
        {
          src: '//url-to-vr360-media-file.mp4',
          type: 'video/mp4',
        },
      ],
    };

    // initialize Video.js

    const player = videojs(
      this.videoNode,
      videoJsOptions,
      function onPlayerReady() {
        // Load VR 360 plugin and initialize it

        window.videojs = videojs;
        var script = document.createElement('script');
        script.src = '//www.domain.com/videojs/plugins/videojs.vr.js';
        document.body.appendChild(script);
        script.onload = () => {
          player.vr({ projection: '360' });
        };
      }
    );

    // Nuevo plugin options

    const nuevoOptions = {
      logo: '//url-to-logo-image.png',
      logourl: '//url-to go on logo-click.com',
    };

    //Initialize Nuevo plugin

    this.player = player;

    player.nuevo(nuevoOptions);
  }

  // destroy player on unmount
  componentWillUnmount() {
    if (this.player) {
      this.player.dispose();
    }
  }

  render() {
    return (
      <div data-vjs-player>
        <video
          ref={node => (this.videoNode = node)}
          className="video-js vjs-fluid"
        />
      </div>
    );
  }
}
