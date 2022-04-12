import React, { useEffect, useState } from 'react';
import CardStack from './CardStack';
import ExternalWebpage from './ExternalWebpage';
import MediaPlayer from './MediaPlayer';
import { usePrevious } from './utils';

const fakeVideo = { embeddedUrl: '' };

const Screen = ({
  cards,
  videos,
  currentClickId,
  arrowClickedStack,
  infoBtnClicked,
}) => {
  const [showCards, setShowCards] = useState(false);
  const [fadeoutCards, setFadeoutCards] = useState(false);
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
  ];

  const directionBtns = ['leftArrow', 'rightArrow'];

  useEffect(() => {
    setTimeout(() => {
      setShowCards(true);
    }, 4000);
  }, []);

  useEffect(() => {
    if (showCardBtns.includes(currentClickId)) {
      console.log(currentClickId);
      if (currentClickId === 'infoBtn') {
        if (infoBtnClicked) {
          setShowCards(true);
        } else {
          setFadeoutCards(true);
        }
      } else {
        setShowCards(true);
      }
    }

    // clicking outside hides card stack
    if (
      showCards &&
      !showCardBtns.includes(currentClickId) &&
      !directionBtns.includes(currentClickId)
    ) {
      console.log(currentClickId);
      setFadeoutCards(true);
    }

    // // for 'toggling' the card stack if you click the info buttons while on info card (doesnt work)
  }, [currentClickId, infoBtnClicked]);

  // show button 8 webpage
  useEffect(() => {
    if (currentClickId === 'btn8') {
      setShowWebpage(true);
      setFadeoutCards(false);
    } else {
      setShowWebpage(false);
    }
  }, [currentClickId]);

  console.log(showCards, fadeoutCards);

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

  // handle video details when clicking truffles
  useEffect(() => {
    if (currentClickId && currentClickId in videos) {
      setFadeoutCards(true);
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
        if (showCards) {
          setFadeoutCards(true);
        } else {
          setFadeoutCards(false);
        }
      }
    }
  });

  function showBlackScreen() {
    const blackScreen = document.querySelector('.black-screen');

    if (playVideo) {
      setTimeout(() => {
        return blackScreen.classList.add('black-screen_visible');
      }, 500);
    }
  }

  const cardStack = showCards ? (
    <CardStack
      cards={cards.reverse()}
      showCards={showCards}
      setShowCards={setShowCards}
      currentClickId={currentClickId}
      fadeoutCards={fadeoutCards}
      setFadeoutCards={setFadeoutCards}
      hideCardBtns={hideCardBtns}
      prevClickId={prevClickId}
      cardBackup={cards}
    />
  ) : null;

  function determineScreenContent() {
    if (showCards) {
      return cardStack;
    } else if (playVideo) {
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
      return <ExternalWebpage />;
    }
  }

  return (
    <>
      {determineScreenContent()}
      <div
        className={`black-screen ${
          playVideo || showWebpage ? 'black-screen_visible' : ''
        }`}
      ></div>
    </>
  );
};

export default Screen;
