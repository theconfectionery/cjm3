import React, { useState, useEffect } from 'react';
import { useBgALightsOnOff } from './imgs/useBgLights';

const TruffleImageMap = ({
  setMapLoaded,
  lightsOn,
  setCurrentClick,
  arrowClickedStack,
  setClickEvent,
}) => {
  const lights = useBgALightsOnOff();
  const bgImageLightsOn = lights.bg_a_lightsOn.file.url;
  const bgImageLightsOff = lights.bg_a_lightsOff.file.url;

  const handleClick = e => {
    setCurrentClick([e.target.id]);
    if (e.target.id === 'leftArrow' || e.target.id === 'rightArrow') {
      arrowClickedStack.push(e.target.id);
    }
      setClickEvent(e);
  };

  useEffect(() => {
    setMapLoaded(true);
  }, []);

  return (
    <div className="wrapper">
      <svg
        viewBox="0 0 4096 2747"
        id="svg-image"
        preserveAspectRatio="xMidYMid slice"
        onClick={e => handleClick(e)}
      >
        <image
          href={bgImageLightsOn}
          id="bgLightsOn"
          x="0"
          y="0"
          height="2747"
          width="4096"
        />
        <image
          href={bgImageLightsOff}
          className={lightsOn ? 'lights-off_hidden' : ''}
          id="bgLightsOff"
          x="0"
          y="0"
          height="2747"
          width="4096"
        />
        <path
          id="infoBtn"
          className="infoBtn"
          d="M1392.5 1367.5H1593.5V1479.5H1392.5z"
        />
        <path
          id="contactBtn"
          className="contactBtn"
          d="M2140.5 1367.5H2359.5V1479.5H2140.5z"
        />
        <path id="btn13" d="M1972.5 1367.5H2139.5V1479.5H1972.5z" />
        <path id="btn12" d="M1783.5 1367.5H1971.5V1479.5H1783.5z" />
        <path id="btn11" d="M1594.5 1367.5H1782.5V1479.5H1594.5z" />
        <path id="btn10" d="M2153.5 1481.5H2342.5V1596.5H2153.5z" />
        <path id="btn9" d="M1963.5 1481.5H2152.5V1596.5H1963.5z" />
        <path id="btn8" d="M1773.5 1481.5H1962.5V1596.5H1773.5z" />
        <path id="btn7" d="M1590.5 1480.5H1772.5V1595.5H1590.5z" />
        <path id="btn6" d="M1399.5 1481.5H1589.5V1596.5H1399.5z" />
        <path id="btn5" d="M2153.5 1598.5H2342.5V1725.5H2153.5z" />
        <path id="btn4" d="M1963.5 1598.5H2152.5V1725.5H1963.5z" />
        <path id="btn3" d="M1773.5 1598.5H1962.5V1725.5H1773.5z" />
        <path id="btn2" d="M1583.5 1598.5H1772.5V1725.5H1583.5z" />
        <path id="btn1" d="M1393.5 1598.5H1582.5V1725.5H1393.5z" />
        <foreignObject
          className="screenArea"
          id="screenArea"
          x="1323"
          y="645"
          width="1097"
          height="582"
        ></foreignObject>
        {/* <path id="screenLeft" d="M1324.5 657.5H1807.5V1211.5H1324.5z" />
        <path id="screenRight" d="M1935.5 657.5H2418.5V1211.5H1935.5z" /> */}
        <path
          id="leftArrow"
          d="M2419.5 1360.5H2639.5V1486.5H2419.5z"
        />
        <path
          id="rightArrow"
          d="M2451.5 1487.5H2671.5V1613.5H2451.5z"
        />
        <path
          id="bgAreaLeft"
          d="M1858 8H6V2741H1858V1830H1292L1248 1812L1230 1784L1314 1308V1274L1292 1224V610L1314 572H1858V8Z"
        />
        <path
          id="bgAreaRight"
          d="M1864 572V6H4089V2741H1863V1830L2459 1836L2492 1823L2501 1797L2477 1657H2718L2738 1634V1598L2675 1334L2653 1317H2436V664L2431 613L2409 586L2382 572H1864Z"
        />
      </svg>
    </div>
  );
};

export default TruffleImageMap;
