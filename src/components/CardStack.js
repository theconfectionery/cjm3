import React, { useEffect, useRef, useState } from 'react';

const CardStack = ({
  cards,
  showCards,
  setShowCards,
  currentClickId,
  fadeoutCards,
  setFadeoutCards,
  hideCardBtns,
}) => {
  const imageUrls = cards.map(card => card.file.url);

  // fade in animation when opening cardstaack
  useEffect(() => {
    setTimeout(() => {
      const container = document.querySelector('.slider-container');
      if (container) {
        container.style.opacity = '1';
      }
    }, 500);
  }, [showCards]);

  // fade out animation when closing cardstack
  useEffect(() => {
    if (fadeoutCards) {
      setFadeoutCards(false);
      const container = document.querySelector('.slider-container');
      container.style.opacity = '0';
      setTimeout(() => {
        setShowCards(false);
      }, 700);
    }
  }, [fadeoutCards]);

  // Carousel JS
  useEffect(() => {
    // const noArrows = false;
    const screenArea = document.querySelector('.screenArea');
    var slide = document.querySelectorAll('.slider-single');
    var slideTotal = slide.length - 1;
    var slideCurrent = -1;

    // functions for swiping the card carousel
    let touchstartX = {
      value: 0,
      className: '',
    };
    let touchendX = 0;

    function handleGesture() {
      if (touchendX < touchstartX.value) {
        slideRight();
      }
      if (touchendX > touchstartX.value) {
        slideLeft();
      }
      touchstartX.value = 0;
      touchstartX.className = '';
      touchendX = 0;
    }
    function addTouchstartPosition(e) {
      if (
        e.target.className.includes('slider-left') ||
        e.target.className.includes('slider-right')
      ) {
        touchstartX.value = e.changedTouches[0].screenX;
        touchstartX.className = e.target.className;
      }
    }

    function addTouchendPosition(e) {
      if (
        touchstartX.className === 'slider-left' ||
        touchstartX.className === 'slider-right'
      ) {
        touchendX = e.changedTouches[0].screenX;
        handleGesture();
      }
    }

    // creating arrow nodes and making them clickable/swipeable
    function initArrows() {
      // if arrow DOM nodes exist, assign event listeners to them; if arrow DOM nodes do not exist, create the elements and assign event listeners to them, append to screenArea
      if (!!document.getElementsByClassName('slider-left').length) {
        const leftArrow = document.querySelector('.slider-left');
        const rightArrow = document.querySelector('.slider-right');
        leftArrow.addEventListener('click', slideLeft);
        rightArrow.addEventListener('click', slideRight);
        screenArea.addEventListener('touchstart', addTouchstartPosition);
        screenArea.addEventListener('touchend', addTouchendPosition);
        return () => {
          document.removeEventListener('click', slideLeft);
          document.removeEventListener('click', slideRight);
          screenArea.removeEventListener('touchstart', addTouchstartPosition);
          screenArea.removeEventListener('touchend', addTouchendPosition);
        };
      } else {
        const leftArrow = document.createElement('a');
        const rightArrow = document.createElement('a');
        leftArrow.classList.add('slider-left');
        rightArrow.classList.add('slider-right');
        leftArrow.addEventListener('click', slideLeft);
        rightArrow.addEventListener('click', slideRight);
        screenArea.addEventListener('touchstart', addTouchstartPosition);
        screenArea.addEventListener('touchend', addTouchendPosition);
        screenArea.appendChild(leftArrow);
        screenArea.appendChild(rightArrow);
        return () => {
          document.removeEventListener('click', slideLeft);
          document.removeEventListener('click', slideRight);
          screenArea.removeEventListener('touchstart', addTouchstartPosition);
          screenArea.removeEventListener('touchend', addTouchendPosition);
        };
      }
    }

    function slideInitial() {
      // two event listeners below necessary for listening to info/contact button clicks while card stack is already open (not covered by the below if-statement buttons)
      const contactButton = document.querySelector('#contactBtn');
      const infoButton = document.querySelector('#infoBtn');
      contactButton.addEventListener('click', () => {
        goToIndexSlide(slideTotal);
      });
      infoButton.addEventListener('click', () => {
        goToIndexSlide(0);
      });

      // initial clicks related to cardstack, also for clicking back and forth between buttons (not covered by above event listeners)
      initArrows();
      if (currentClickId === 'contactBtn') {
        goToIndexSlide(slideTotal);
      } else if (currentClickId === 'infoBtn') {
        goToIndexSlide(0);
      } else if (hideCardBtns.includes(currentClickId)) {
        return;
      } else {
        slideRight();
      }
    }

    function slideRight() {
      if (slideCurrent < slideTotal) {
        slideCurrent++;
      } else {
        slideCurrent = 0;
      }

      if (slideCurrent > 0) {
        var preactiveSlide = slide[slideCurrent - 1];
      } else {
        var preactiveSlide = slide[slideTotal];
      }
      var activeSlide = slide[slideCurrent];
      if (slideCurrent < slideTotal) {
        var proactiveSlide = slide[slideCurrent + 1];
      } else {
        var proactiveSlide = slide[0];
      }

      slide.forEach(elem => {
        var thisSlide = elem;
        if (thisSlide.classList.contains('preactivede')) {
          thisSlide.classList.remove('preactivede');
          thisSlide.classList.remove('preactive');
          thisSlide.classList.remove('active');
          thisSlide.classList.remove('proactive');
          thisSlide.classList.add('proactivede');
        }
        if (thisSlide.classList.contains('preactive')) {
          thisSlide.classList.remove('preactive');
          thisSlide.classList.remove('active');
          thisSlide.classList.remove('proactive');
          thisSlide.classList.remove('proactivede');
          thisSlide.classList.add('preactivede');
        }
      });
      preactiveSlide.classList.remove('preactivede');
      preactiveSlide.classList.remove('active');
      preactiveSlide.classList.remove('proactive');
      preactiveSlide.classList.remove('proactivede');
      preactiveSlide.classList.add('preactive');

      activeSlide.classList.remove('preactivede');
      activeSlide.classList.remove('preactive');
      activeSlide.classList.remove('proactive');
      activeSlide.classList.remove('proactivede');
      activeSlide.classList.add('active');

      proactiveSlide.classList.remove('preactivede');
      proactiveSlide.classList.remove('preactive');
      proactiveSlide.classList.remove('active');
      proactiveSlide.classList.remove('proactivede');
      proactiveSlide.classList.add('proactive');
    }

    function slideLeft() {
      if (slideCurrent > 0) {
        slideCurrent--;
      } else {
        slideCurrent = slideTotal;
      }

      if (slideCurrent < slideTotal) {
        var proactiveSlide = slide[slideCurrent + 1];
      } else {
        var proactiveSlide = slide[0];
      }
      var activeSlide = slide[slideCurrent];
      if (slideCurrent > 0) {
        var preactiveSlide = slide[slideCurrent - 1];
      } else {
        var preactiveSlide = slide[slideTotal];
      }
      slide.forEach(elem => {
        var thisSlide = elem;
        if (thisSlide.classList.contains('proactive')) {
          thisSlide.classList.remove('preactivede');
          thisSlide.classList.remove('preactive');
          thisSlide.classList.remove('active');
          thisSlide.classList.remove('proactive');
          thisSlide.classList.add('proactivede');
        }
        if (thisSlide.classList.contains('proactivede')) {
          thisSlide.classList.remove('preactive');
          thisSlide.classList.remove('active');
          thisSlide.classList.remove('proactive');
          thisSlide.classList.remove('proactivede');
          thisSlide.classList.add('preactivede');
        }
      });

      preactiveSlide.classList.remove('preactivede');
      preactiveSlide.classList.remove('active');
      preactiveSlide.classList.remove('proactive');
      preactiveSlide.classList.remove('proactivede');
      preactiveSlide.classList.add('preactive');

      activeSlide.classList.remove('preactivede');
      activeSlide.classList.remove('preactive');
      activeSlide.classList.remove('proactive');
      activeSlide.classList.remove('proactivede');
      activeSlide.classList.add('active');

      proactiveSlide.classList.remove('preactivede');
      proactiveSlide.classList.remove('preactive');
      proactiveSlide.classList.remove('active');
      proactiveSlide.classList.remove('proactivede');
      proactiveSlide.classList.add('proactive');
    }

    function goToIndexSlide(index) {
      const sliding =
        slideCurrent > index ? () => slideRight() : () => slideLeft();
      while (slideCurrent !== index) {
        sliding();
      }
    }

    slideInitial();
  }, [currentClickId]);

  return (
    <>
      <div className="slider-container slider-container_intro">
        <div className="slider-content">
          {imageUrls.map((slide, i) => {
            return (
              <div className="slider-single" key={i}>
                <img className="slider-single-image" src={slide} alt="hi" />
              </div>
            );
          })}
        </div>
        ;
      </div>
      ;
    </>
  );
};

export default CardStack;
