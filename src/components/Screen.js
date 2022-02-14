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
    console.log("<Screen> new coords received?????")
    return (
      <div>
        <img
          id="cardOne"
          src={CardOne}
          height={"100px"}
          width={"100px"}
          alt="Try a Sample by Selecting a Truffle"
        />
      </div>
    )
  }
}
export default Screen
