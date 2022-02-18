// import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
// import { useCards } from "../components/imgs/useCards"

const Screen = ({ cards }) => {
  // console.log("<Screen> rendered")
  // console.log(cards.card_info.images.fallback.src)
  const infoCard = cards.card_info.images.fallback.src
  // if (!showScreen) {
  //   return <div></div>
  // }

  // if (showScreen) {
  // console.log(`<Screen> Card height: ${cardHeight} Card width: ${cardWidth}`)

  return (
    <div>
      {/* <GatsbyImage
        image={cards.card_info}
        alt="Try a Sample by Selecting a Truffle"
        id="cardOne"
      /> */}
      <img src={infoCard} alt="Info Card" className="screenImage" />
    </div>
  )
  // }
}

export default Screen
