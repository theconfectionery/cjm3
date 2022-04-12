import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { EffectCards, Controller } from 'swiper';

const CardStack = ({
  cards,
  showCards,
  setShowCards,
  currentClickId,
  fadeoutCards,
  setFadeoutCards,
  hideCardBtns,
  prevClickId,
}) => {
  const imageUrls = cards.map(card => card.file.url);
  const [swiper, setSwiper] = useState(null);
  const [initial, setInitial] = useState(0);
  const directionBtns = ['leftArrow', 'rightArrow'];

  // fade in animation when opening cardstaack
  useEffect(() => {
    
    setTimeout(() => {
      const container = document.querySelector('.slider-container');
      if (container) {
        container.style.opacity = '1';
      }
    }, 500);
  }, [showCards]);

  useEffect(() => {
    if (fadeoutCards) {
      setFadeoutCards(false);
      const container = document.querySelector('.slider-container');
      container.style.opacity = '0';
      setTimeout(() => {
        setShowCards(false);
      }, 1000);
    }
  }, [fadeoutCards]);

  // fade out animation when closing cardstack
  useEffect(() => {
    if (fadeoutCards) {
      setFadeoutCards(false);
      const container = document.querySelector('.slider-container');
      container.style.opacity = '0';
      setShowCards(false);
    }
  }, [fadeoutCards]);

  // Carousel JS
  useEffect(() => {
    // const noArrows = false;
    if (swiper) {
      var slide = document.querySelectorAll('.swiper-slide');
      var slideTotal = imageUrls.length;
      var slideCurrent = swiper.activeIndex;

      // functions for swiping the card carousel

      function slideInitial() {
        // two event listeners below necessary for listening to info/contact button clicks while card stack is already open (not covered by the below if-statement buttons)
        const contactButton = document.querySelector('#contactBtn');
        //const infoButton = document.querySelector('#infoBtn');
        contactButton.addEventListener('click', () => {
          goToIndexSlide(slideTotal);
        });

        if (currentClickId === 'contactBtn') {
          goToIndexSlide(slideTotal);
        } else if (currentClickId === 'infoBtn') {
          goToIndexSlide(1);
        } else if (
          hideCardBtns.includes(currentClickId) ||
          directionBtns.includes(currentClickId)
        ) {
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

        var activeSlide = slide[slideCurrent];
        slide.forEach(elem => {
          var thisSlide = elem;
          if (thisSlide.classList.contains('swiper-slide-visible')) {
            thisSlide.classList.remove('swiper-slide-visible');
            thisSlide.classList.remove('swiper-slide-active');
          }
          if (thisSlide.classList.contains('swiper-slide-next')) {
            thisSlide.classList.remove('swiper-slide-next');
          }
          if (thisSlide.classList.contains('swiper-slide-prev')) {
            thisSlide.classList.remove('swiper-slide-prev');
          }
        });

        activeSlide.classList.add('swiper-slide-visible');
        activeSlide.classList.add('swiper-slide-active');

        if (slideCurrent > 0) {
          slide[slideCurrent - 1].classList.add('swiper-slide-prev');
        }

        if (slideCurrent < slideTotal) {
          slide[slideCurrent + 1].classList.add('swiper-slide-next');
        }
      }

      function slideLeft() {
        if (slideCurrent > 0) {
          slideCurrent--;
        } else {
          slideCurrent = slideTotal;
        }

        var activeSlide = slide[slideCurrent];
        slide.forEach(elem => {
          var thisSlide = elem;
          if (thisSlide.classList.contains('swiper-slide-visible')) {
            thisSlide.classList.remove('swiper-slide-visible');
            thisSlide.classList.remove('swiper-slide-active');
          }
          if (thisSlide.classList.contains('swiper-slide-next')) {
            thisSlide.classList.remove('swiper-slide-next');
          }
          if (thisSlide.classList.contains('swiper-slide-prev')) {
            thisSlide.classList.remove('swiper-slide-prev');
          }
        });

        activeSlide.classList.add('swiper-slide-visible');
        activeSlide.classList.add('swiper-slide-active');

        if (slideCurrent > 0) {
          slide[slideCurrent - 1].classList.add('swiper-slide-prev');
        }

        if (slideCurrent < slideTotal) {
          slide[slideCurrent + 1].classList.add('swiper-slide-next');
        }
      }

      function goToIndexSlide(index) {
        console.log('slideCurrent', index);
        swiper.slideTo(index);
      }

      slideInitial();
    }
  }, [currentClickId, imageUrls, swiper]);

  console.log(initial);

  return (
    <>
      <div className="slider-container slider-container_intro">
        <div className="slider-content">
          <Swiper
            effect="cards"
            grabCursor={true}
            modules={[EffectCards, Controller]}
            className="cardContainer"
            loop
            onSwiper={setSwiper}
            controller={{ control: swiper }}
          >
            {imageUrls.map((slide, i) => {
              return (
                <SwiperSlide
                  key={i.toString()}
                  className={`card ${
                    i !== imageUrls.length - 1 &&
                    (i % 2 === 1 ? 'rot-left' : 'rot-right')
                  }`}
                  style={{
                    cursor: 'pointer',
                    backgroundImage: 'url(' + slide + ')',
                  }}
                  onClick={() => swiper.slideNext()}
                ></SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        ;
      </div>
      ;
    </>
  );
};

export default CardStack;
