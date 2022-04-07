import React, { useState, useEffect } from 'react';
import 'normalize.css';
import '../styling/main.css';
import Screen from '../components/Screen';
import { useCards } from '../components/imgs/useCards';
import 'normalize.css';
import backgroundImageOn from '../assets/images/background-lights-on.jpg';
import backgroundImageOff from '../assets/images/background-lights-off.jpg';
import IntroVideo from '../assets/intro-video.mp4';
import { ScreenContainer } from '../styling/styledApp';

import { useVideos } from '../components/imgs/useVideos';

export default function App({ arrowClickedStack }) {
  const [lightsOn, setLightsOn] = useState(true);
  const [currentClick, setCurrentClick] = useState(['']);
  const currentClickId = currentClick[0];
  const cards = useCards();
  const videos = useVideos();

  const lightsOffAreas = [
    'btn1',
    'btn2',
    'btn3',
    'btn4',
    'btn5',
    'btn6',
    'btn7',
    'btn8',
    'btn9',
    'btn10',
    'btn11',
    'btn12',
    'btn13',
  ];

  const lightsOnAreas = [
    'infoBtn',
    'contactBtn',
    'bgImageLight',
    'bgImageDark',
  ];

  const toggleLights = () => {
    if (lightsOffAreas.includes(currentClickId)) {
      setLightsOn(false);
    }
    if (lightsOnAreas.includes(currentClickId)) {
      setLightsOn(true);
    }
  };

  // play intro video on load
  useEffect(() => {
    const introVideo = document.querySelector('.intro-video');
    const introVideoContainer = document.querySelector(
      '.intro-video-container'
    );
    introVideo.play();
    setTimeout(() => {
      introVideoContainer.classList.add('intro-video-container_hidden');
    }, 2000);
    setTimeout(() => {
      introVideoContainer.style.display = 'none';
    }, 3000);
  }, []);

  useEffect(() => {
    if (currentClickId) {
      toggleLights();
    }
  }, [currentClick]);

  const handleClick = e => {
    setCurrentClick([e.target.id]);
    console.log(e.target.id);
    if (e.target.id === 'leftArrow' || e.target.id === 'rightArrow') {
      arrowClickedStack.push(e.target.id);
    }

    return false;
  };

  return (
    <ScreenContainer className="screen-container">
      <div className="screenArea" id="screenArea">
        <Screen
          cards={cards}
          videos={videos}
          currentClickId={currentClickId}
          arrowClickedStack={arrowClickedStack}
        />
      </div>
      <div
        className="button-container_type_truffle"
        onClick={e => handleClick(e)}
      >
        <button className="truffle-button truffle-button_1" id="btn1"></button>
        <button className="truffle-button truffle-button_2" id="btn2"></button>
        <button className="truffle-button truffle-button_3" id="btn3"></button>
        <button className="truffle-button truffle-button_4" id="btn4"></button>
        <button className="truffle-button truffle-button_5" id="btn5"></button>
        <button className="truffle-button truffle-button_6" id="btn6"></button>
        <button className="truffle-button truffle-button_7" id="btn7"></button>
        <button className="truffle-button truffle-button_8" id="btn8"></button>
        <button className="truffle-button truffle-button_9" id="btn9"></button>
        <button
          className="truffle-button truffle-button_10"
          id="btn10"
        ></button>
        <button
          className="truffle-button truffle-button_11"
          id="btn11"
        ></button>
        <button
          className="truffle-button truffle-button_12"
          id="btn12"
        ></button>
        <button
          className="truffle-button truffle-button_13"
          id="btn13"
        ></button>
        <button
          className="truffle-button truffle-button_info"
          id="infoBtn"
        ></button>
        <button
          className="truffle-button truffle-button_contact"
          id="contactBtn"
        ></button>
      </div>
      <div className="button-container_type_direction">
        <button
          className="direction-button direction-button_left"
          id="leftArrow"
          onClick={e => handleClick(e)}
        ></button>
        <button
          className="direction-button direction-button_right"
          id="rightArrow"
          onClick={e => handleClick(e)}
        ></button>
      </div>
      <div className="intro-video-container">
        <video className="intro-video" muted autoplay playsInline>
          <source src={IntroVideo} type="video/mp4" />
        </video>
      </div>
      <img
        className={`background-image ${
          lightsOn ? '' : 'background-image_hidden'
        }`}
        id="bgImageLight"
        src={backgroundImageOn}
        onClick={e => handleClick(e)}
      />
      <img
        className="background-image background-image-off"
        id="bgImageDark"
        src={backgroundImageOff}
        onClick={e => handleClick(e)}
      />
    </ScreenContainer>
  );
}
