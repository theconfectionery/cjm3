import React, { useState, useEffect } from 'react';
import reactDom from 'react-dom';
import Screen from '../components/Screen';
import { useCards } from '../components/imgs/useCards';
import 'normalize.css';
import backgroundImageOn from '../background-lights-on.jpg';
import backgroundImageOff from '../background-lights-off.jpg';

import { ScreenContainer } from '../styling/styledApp';

import loadable from '@loadable/component';
import { useVideos } from '../components/imgs/useVideos';

// const TruffleImageMap = loadable(() => import('../components/TruffleImageMap'));

export default function App({ arrowClickedStack }) {
  const [mapLoaded, setMapLoaded] = useState(false);
  const [lightsOn, setLightsOn] = useState(true);
  const [currentClick, setCurrentClick] = useState(['']);
  const [clickEvent, setClickEvent] = useState();
  const cards = useCards();
  const videos = useVideos();
  const currentClickId = currentClick[0];
  const [containerMarginTop, setContainerMarginTop] = useState();

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

  useEffect(() => {
    if (currentClickId) {
      // console.log('<App> useEffect triggered: toggleLights()');
      toggleLights();
    }
  }, [currentClick]);

  const handleClick = e => {
    setCurrentClick([e.target.id]);
    if (e.target.id === 'leftArrow' || e.target.id === 'rightArrow') {
      arrowClickedStack.push(e.target.id);
    }
    setClickEvent(e);
  };

  // because website gets scaled responsively, have to increase video elements so they dont look to small on desktop
  useEffect(() => {
    function getWidth() {
      let bodyStyles = document.body.style;
      bodyStyles.setProperty(
        '--indicator-height',
        `${window.innerWidth * 0.006}px`
      );
      setContainerMarginTop(window.innerWidth * 0.04);
    }
    getWidth();
    window.addEventListener('resize', getWidth);
    return () => window.removeEventListener('resize', getWidth);
  });

  return (
    <ScreenContainer
      className="screen-container"
      containerMarginTop={containerMarginTop}
    >
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
      {/* 
      <div className="bgArea" id="bgAreaLeft"></div>
      <div className="bgArea" id="bgAreaRight"></div> */}
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

/* <div id="mapContainer">
      <TruffleImageMap
        id="truffleImageMap"
        setMapLoaded={setMapLoaded}
        lightsOn={lightsOn}
        setCurrentClick={setCurrentClick}
        arrowClickedStack={arrowClickedStack}
        setClickEvent={setClickEvent}
      />
    </div> */
