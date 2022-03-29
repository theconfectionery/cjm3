import React, { useEffect, useState } from 'react';
import CardStack from './CardStack';
import MediaPlayer from './MediaPlayer';
import { usePrevious } from './utils';

const fakeVideo = { embeddedUrl: '' };

const Screen = ({
  cards,
  videos,
  currentClickId,
  arrowClickedStack,
}) => {
  const [showCards, setShowCards] = useState(false);
  const [showWebpage, setShowWebpage] = useState(false);
  const getVideoArray = currentClickId => {
    return videos[currentClickId] || [fakeVideo];
  };
  const [videoDetails, setVideoDetails] = useState({
    playVideo: false,
    videoIndex: 0,
    currentVideoArray: getVideoArray(currentClickId),
  });
  const prevClickId = usePrevious(currentClickId);
  const { playVideo } = videoDetails;

  const showCardBtns = ['infoBtn', 'contactBtn', 'screenArea'];
  const hideCardBtns = [
    'btn1',
    'btn2',
    'btn3',
    'btn4',
    'btn5',
    'btn6',
    'btn7',
    'btn8',
    'btn9',
    'btn11',
    'btn12',
    'btn13',
    'bgImageLight',
    'bgImageDark',
    // 'bgAreaLeft',
    // 'bgAreaRight',
  ];

  useEffect(() => {
    if (showCardBtns.includes(currentClickId)) {
      setShowCards(true);
    }

    // clicking outside hides card stack
    if (showCards && !showCardBtns.includes(currentClickId)) {
      setShowCards(false);
    }

    // // for 'toggling' the card stack if you click the info buttons while on info card
    // if (
    //   showCards &&
    //   ((currentClickId === 'infoBtn' && infoBtnClicked))
    // ) {
    //   setShowCards(false);
    //   setInfoBtnClicked(false);
    //   setContactBtnClicked(false);
    // }
  }, [currentClickId]);

  useEffect(() => {
    if (currentClickId === 'btn8') {
      setShowWebpage(true);
    } else {
      setShowWebpage(false);
    }
  }, [currentClickId]);

  // hide appended DOM node arrows (created in CardStack) when CardStack is unmounted
  useEffect(() => {
    const cardSliderLeft = document.querySelector('.slider-left');
    const cardSliderRight = document.querySelector('.slider-right');
    if (!showCards && document.querySelector('.slider-left')) {
      cardSliderLeft.classList.add('slider_hidden');
      cardSliderRight.classList.add('slider_hidden');
    } else if (showCards && document.querySelector('.slider-left')) {
      cardSliderLeft.classList.remove('slider_hidden');
      cardSliderRight.classList.remove('slider_hidden');
    }
  }, [showCards]);

  useEffect(() => {
    if (currentClickId && currentClickId in videos) {
      if (!playVideo) {
        setVideoDetails({
          videoIndex: 0,
          currentVideoArray: getVideoArray(currentClickId),
          playVideo: true,
        });
      } else {
        if (currentClickId !== prevClickId) {
          setVideoDetails({
            ...videoDetails,
            videoIndex: 0,
            currentVideoArray: getVideoArray(currentClickId),
          });
        }
      }
    } else if (currentClickId === 'rightArrow') {
      // console.log("Setting Click Count")
    } else if (currentClickId === 'leftArrow') {
      // console.log("Setting Click Count")
    } else {
      if (
        playVideo &&
        (hideCardBtns.includes(currentClickId) ||
          showCardBtns.includes(currentClickId))
      ) {
        setVideoDetails({
          playVideo: false,
          currentVideoArray: getVideoArray(currentClickId),
          videoIndex: 0,
        });
      }
    }
  });

  const cardStack = showCards ? (
    <CardStack
      cards={cards}
      showCards={showCards}
      currentClickId={currentClickId}
    />
  ) : null;

  function determineScreenContent() {
    if (playVideo) {
      return (
        <MediaPlayer
          currentVideoDetails={videoDetails}
          currentClickId={currentClickId}
          arrowClickedStack={arrowClickedStack}
          setCurrentVideoDetails={setVideoDetails}
          getVideoArray={getVideoArray}
        />
      );
    } else if (showWebpage) {
      return (
        <object
          type="text/html"
          data="https://www.cine.doctor/"
          className="external-webpage"
        ></object>
      );
    } else {
      return cardStack;
    }
  }

  return (
    <>
      {determineScreenContent()}
      <div
        className={`black-screen ${playVideo ? 'black-screen_visible' : ''}`}
      ></div>
    </>
  );
};

export default Screen;
