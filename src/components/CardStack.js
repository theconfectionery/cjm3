import React, { useEffect, useRef, useState } from 'react';

const CardStack = ({ cards, showCards, currentClickId, contactBtnClicked }) => {
  const imageUrls = cards.map(card => card.file.url);
  const infoCard = cards[0];
  const contactCard = cards.length - 1;
  const [imageIndex, setImageIndex] = useState(0);
  const nextArea = document.querySelector('#screenRight');
  const prevArea = document.querySelector('#screenLeft');

  let slides = [
    'https://images.ctfassets.net/jotoby554kx0/4bhIAoUyQeYysPWgIe5SCK/4c223a881085f01d75dd5c440bf6fde1/CARD01.jpg',
    'https://images.ctfassets.net/jotoby554kx0/3wzwAUSG70EhPvHVphmKJw/e161255869e20cc89e8dd2aba42d1206/CARD02.jpg',
    'https://images.ctfassets.net/jotoby554kx0/4CPyxfldz8iqMERcrakx4u/59e8d7786dac2ed2677a5d3c98a5a818/CARD_03.jpg',
    'https://images.ctfassets.net/jotoby554kx0/4SWFGjRIXZwtcB1GgF3sk6/b0a3dcf52e8512c975c63fef3728b4ba/CARD_04.jpg',
    'https://images.ctfassets.net/jotoby554kx0/4GExflYYHixT6c0bgnu4OI/23d950c158ec15d0a2f49e660b8ed51b/CARD_05.jpg',
  ];

  useEffect(() => {
    setTimeout(() => {
      const container = document.querySelector('.slider-container');
      container.style.transform = 'translateY(0)';
    }, 500);
  }, [showCards]);

  // Carousel JS
  useEffect(() => {
    const repeat = false;
    const noArrows = false;
    const noBullets = false;

    const screenArea = document.querySelector('.screenArea');
    var slide = document.querySelectorAll('.slider-single');
    var slideTotal = slide.length - 1;
    var slideCurrent = -1;

    function initArrows() {
      if (noArrows) {
        return;
      }
      const leftArrow = document.createElement('a');
      // const iLeft = document.createElement('i');
      // iLeft.classList.add('fa');
      // iLeft.classList.add('fa-arrow-left');
      leftArrow.classList.add('slider-left');
      // leftArrow.appendChild(iLeft);
      leftArrow.addEventListener('click', () => {
        slideLeft();
      });
      const rightArrow = document.createElement('a');
      // const iRight = document.createElement('i');
      // iRight.classList.add('fa');
      // iRight.classList.add('fa-arrow-right');
      rightArrow.classList.add('slider-right');
      // rightArrow.appendChild(iRight);
      rightArrow.addEventListener('click', () => {
        slideRight();
      });
      screenArea.appendChild(leftArrow);
      screenArea.appendChild(rightArrow);
    }

    function slideInitial() {
      initArrows();
      setTimeout(function () {
        slideRight();
      }, 500);
    }

    function checkRepeat() {
      if (!repeat) {
        if (slideCurrent === slide.length - 1) {
          slide[0].classList.add('not-visible');
          slide[slide.length - 1].classList.remove('not-visible');
          if (!noArrows) {
            document
              .querySelector('.slider-right')
              .classList.add('not-visible');
            document
              .querySelector('.slider-left')
              .classList.remove('not-visible');
          }
        } else if (slideCurrent === 0) {
          slide[slide.length - 1].classList.add('not-visible');
          slide[0].classList.remove('not-visible');
          if (!noArrows) {
            document.querySelector('.slider-left').classList.add('not-visible');
            document
              .querySelector('.slider-right')
              .classList.remove('not-visible');
          }
        } else {
          slide[slide.length - 1].classList.remove('not-visible');
          slide[0].classList.remove('not-visible');
          if (!noArrows) {
            document
              .querySelector('.slider-left')
              .classList.remove('not-visible');
            document
              .querySelector('.slider-right')
              .classList.remove('not-visible');
          }
        }
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
      console.log('hello');
      const sliding =
        slideCurrent > index ? () => slideRight() : () => slideLeft();
      while (slideCurrent !== index) {
        sliding();
      }
    }

    if (contactBtnClicked) {
      console.log(contactCard);
      console.log(slideCurrent);
    }

    slideInitial();
  }, [currentClickId, contactBtnClicked]);

  return (
    <>
      <div className="slider-container slider-container_intro">
        <div className="slider-content">
          {slides.map((slide, i) => {
            return (
              <div className="slider-single" key={i}>
                <img className="slider-single-image" src={slide} alt="hi" />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default CardStack;
