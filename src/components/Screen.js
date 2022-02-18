import React, { useEffect } from "react"
// import { GatsbyImage } from "gatsby-plugin-image"

const Screen = ({ cards, currentClickId, currentClickType }) => {
  // console.log("<Screen> rendered")
  const infoCard = cards.card_info.images.fallback.src
  const contactCard = cards.card_contact.images.fallback.src

  return (
    <div id="screenContainer">
      {/* <GatsbyImage
        image={cards.card_info}
        alt="Try a Sample by Selecting a Truffle"
        id="cardOne"
      /> */}
      <img src={contactCard} alt="Info Card" className="screenImage" />
    </div>
  )
  // }
}

export default Screen
