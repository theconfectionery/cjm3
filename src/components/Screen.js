import React, { useRef } from "react"
import { CSSTransitionGroup } from "react-transition-group"
import ContactCard from "./ContactCard"
import InfoCard from "./InfoCard"
// import { GatsbyImage } from "gatsby-plugin-image"

const Screen = ({ cards, currentClickId, currentClickType }) => {
  return (
    <div id="screenContainer">
      <div>
        <div>
          {currentClickId === "btnContact" ? (
            <ContactCard cards={cards} />
          ) : null}
          {currentClickId === "btnInfo" ? <InfoCard cards={cards} /> : null}
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
