import React, { useEffect, useRef, useState } from 'react';

const CardStack = ({ cards, showCards, currentClickId }) => {
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

  // slide up intro event
  useEffect(() => {
    setTimeout(() => {
      const container = document.querySelector('.slider-container');
      container.style.transform = 'translateY(0)';
    }, 500);
  }, [showCards]);

  // Carousel JS
  useEffect(() => {
    const noArrows = false;
    const screenArea = document.querySelector('.screenArea');
    var slide = document.querySelectorAll('.slider-single');
    var slideTotal = slide.length - 1;
    var slideCurrent = -1;

    function initArrows() {
      // if arrow DOM nodes exist, assign event listeners to them; if arrow DOM nodes do not exist, create the elements and assign event listeners to them, append to screenArea
      if (!!document.getElementsByClassName('slider-left').length) {
        const leftArrow = document.querySelector('.slider-left');
        const rightArrow = document.querySelector('.slider-right');
        leftArrow.addEventListener('click', () => {
          slideLeft();
        });
        rightArrow.addEventListener('click', () => {
          slideRight();
        });
      } else {
        const leftArrow = document.createElement('a');
        leftArrow.classList.add('slider-left');
        const rightArrow = document.createElement('a');
        leftArrow.addEventListener('click', () => {
          slideLeft();
        });
        rightArrow.classList.add('slider-right');
        rightArrow.addEventListener('click', () => {
          slideRight();
        });
        screenArea.appendChild(leftArrow);
        screenArea.appendChild(rightArrow);
      }
    }

    function slideInitial() {
      console.log(currentClickId);

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

/* // slide up intro event
  useEffect(() => {
    setTimeout(() => {
      const container = document.querySelector('.slider-container');
      container.style.transform = 'translateY(0)';
    }, 500);
  }, [showCards]);

  function slideRight() {
    if (slideCurrent < slideTotal) {
      slideCurrent++;
    } else {
      slideCurrent = 0;
    }

    if (slideCurrent > 0) {
      let preactiveSlide = slide[slideCurrent - 1];
    } else {
      let preactiveSlide = slide[slideTotal];
    }
    let activeSlide = slide[slideCurrent];
    if (slideCurrent < slideTotal) {
      let proactiveSlide = slide[slideCurrent + 1];
    } else {
      let proactiveSlide = slide[0];
    }

    slide.forEach(elem => {
      let thisSlide = elem;
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
      let proactiveSlide = slide[slideCurrent + 1];
    } else {
      let proactiveSlide = slide[0];
    }
    let activeSlide = slide[slideCurrent];
    if (slideCurrent > 0) {
      let preactiveSlide = slide[slideCurrent - 1];
    } else {
      let preactiveSlide = slide[slideTotal];
    }
    slide.forEach(elem => {
      let thisSlide = elem;
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

  // Carousel JS

  const noArrows = false;
  const screenArea = document.querySelector('.screenArea');
  let slide = document.querySelectorAll('.slider-single');
  let slideTotal = slide.length - 1;
  let slideCurrent = -1;

  // function initArrows() {
  //   if (noArrows) {
  //     return;
  //   }
  //   const leftArrow = document.createElement('a');
  //   leftArrow.classList.add('slider-left');
  //   leftArrow.addEventListener('click', () => {
  //     slideLeft();
  //   });
  //   const rightArrow = document.createElement('a');
  //   rightArrow.classList.add('slider-right');
  //   rightArrow.addEventListener('click', () => {
  //     slideRight();
  //   });
  //   screenArea.appendChild(leftArrow);
  //   screenArea.appendChild(rightArrow);
  // }

  function slideInitial() {
    console.log(currentClickId);

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
    // initArrows();
    // rightArrow.addEventListener('click', () => {
    //   slideRight();
    // });

    if (currentClickId === 'contactBtn') {
      goToIndexSlide(slideTotal);
    } else if (currentClickId === 'infoBtn') {
      goToIndexSlide(0);
    } else {
      slideRight();
    }
  }

  function goToIndexSlide(index) {
    const sliding =
      slideCurrent > index ? () => slideRight() : () => slideLeft();
    while (slideCurrent !== index) {
      sliding();
    }
  }

  useEffect(() => {
    slideInitial();
  }, [currentClickId]);

  return (
    <>
      <a
        className="slider-left"
        onClick={() => {
          slideLeft();
        }}
      ></a>
      <a
        className="slider-right"
        onClick={() => {
          slideRight();
        }}
      ></a>
      ;
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
*/
