import React from "react"
import CardOne from "../assets/images/CARD01.jpg"

const Screen = ({ cardHeight, cardWidth, showScreen }) => {
  console.log("<Screen> rendered")

  let updatedHeight = cardHeight
  let updatedWidth = cardWidth

  if (!showScreen) {
    return <div></div>
  }

  if (showScreen) {
    console.log(
      "<Screen> Card height: " + cardHeight + " Card width: " + cardWidth
    )
    return (
      <div>
        <img
          id="cardOne"
          src={CardOne}
          height={cardHeight}
          width={cardWidth}
          alt="Try a Sample by Selecting a Truffle"
        />
      </div>
    )
  }
}
export default Screen
