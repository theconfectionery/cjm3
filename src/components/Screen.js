import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"

const Screen = ({ cardHeight, cardWidth, showScreen, cards }) => {
  // console.log("<Screen> rendered")
  // console.log(cards)

  if (!showScreen) {
    return <div></div>
  }

  if (showScreen) {
    // console.log(
    //   `<Screen> Card height: ${cardHeight} Card width: ${cardWidth}`
    // )

    return (
      <div>
        <GatsbyImage
          image={cards.card_info}
          alt="Try a Sample by Selecting a Truffle"
          id="cardOne"
          height={cardHeight}
          width={cardWidth}
        />
        {/* <img
          id="cardOne"
          src={cards.card_info.url}
          height={cardHeight}
          width={cardWidth}
          alt="Try a Sample by Selecting a Truffle"
        /> */}
      </div>
    )
  }
}

export default Screen
