import React from "react"
import CardStack from "./CardStack"
// import { GatsbyImage } from "gatsby-plugin-image"

const Screen = ({ cards, currentClickId, currentClickType }) => {
  return (
    <div id="screenContainer">
      <div>
        <div>
          {currentClickId === "btnContact" || currentClickId === "btnInfo" ? (
            <CardStack
              key={Math.random()}
              cards={cards}
              currentClickId={currentClickId}
              currentClickType={currentClickType}
            />
          ) : null}
        </div>
      </div>
      {/* <GatsbyImage
        image={cards.card_info}
        alt="Try a Sample by Selecting a Truffle"
        id="cardOne"
      /> */}
    </div>
  )
  // }
}

export default Screen
