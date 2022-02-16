import React from "react"
import CardOne from "../assets/images/CARD01.jpg"

const Screen = ({ cardHeight, cardWidth, showScreen, imagesObject }) => {
  // console.log("<Screen> rendered")
  // console.log(imagesObject)

  if (!showScreen) {
    return <div></div>
  }

  if (showScreen) {
    // console.log(
    //   `<Screen> Card height: ${cardHeight} Card width: ${cardWidth}`
    // )
    return (
      <div>
        <img
          id="cardOne"
          src={imagesObject.card_info.url}
          height={cardHeight}
          width={cardWidth}
          alt="Try a Sample by Selecting a Truffle"
        />
      </div>
    )
  }
}
export default Screen
