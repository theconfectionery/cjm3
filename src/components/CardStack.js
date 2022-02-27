import React, { useRef } from "react"
import { Slide } from "react-slideshow-image"
import { useSwipeable } from "react-swipeable"

const CardStack = ({ cards, currentClickId }) => {
  const sliderRef = useRef()
  const imageUrls = cards.map(card => card.file.url)
  const contactCardIndex = cards.length - 1

  console.log("CardStack")
  const props = {
    arrows: false,
    autoplay: false,
    easing: "ease-in",
    transitionDuration: 500,
    canSwipe: true,
  }
  console.log("<CardStack> sliderRef.current:", sliderRef.current)

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => {
      sliderRef.current.goBack()
    },
    onSwipedRight: () => {
      sliderRef.current.goNext()
    },
  })

  const handleClick = () => {
    if (sliderRef.current) {
      if (currentClickId === "screenLeft") {
        sliderRef.current.goBack()
      }

      if (currentClickId === "screenRight") {
        sliderRef.current.goNext()
      }

      if (currentClickId === "btnContact") {
        sliderRef.current.goTo(contactCardIndex)
      }

      if (currentClickId === "btnInfo") {
        sliderRef.current.goTo(0)
      }
    }
  }

  return (
    <div className="cardContainer" {...swipeHandlers}>
      <Slide
        ref={sliderRef}
        {...props}
        id="displayCard"
        className="topCard"
        // onLoad={sliderRef.current.goTo(contactCardIndex)}
        onClick={() => handleClick()}
      >
        {imageUrls.map((each, index) => (
          <img key={index} src={each} alt="" />
        ))}
      </Slide>
      <div className="middleCard"></div>
      <div className="bottomCard"></div>
    </div>
  )
}

export default CardStack
