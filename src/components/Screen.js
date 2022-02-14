import React from "react"
import CardOne from "../assets/images/CARD01.jpg"

const Screen = ({ showScreen, cardHeightPx, cardWidthPx }) => {
  console.log("<Screen> Rendered")

  // if (!showScreen) {
  //   console.log("<Screen> 'hidden'")
  //   return <div></div>
  // }

  // if (showScreen) {
  //   console.log("<Screen> shown")
  return (
    <div>
      <img
        id="cardOne"
        src={CardOne}
        height={cardHeightPx}
        width={cardWidthPx}
        alt="Try a Sample by Selecting a Truffle"
        // onLoad={console.log("cardone rerendered")}
      />
    </div>
  )
}

//   return <div></div>
// }

export default Screen
