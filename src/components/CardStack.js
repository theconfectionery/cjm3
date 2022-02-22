import React, { useEffect, useState } from "react"
import InfoCard from "./InfoCard"
import ContactCard from "./ContactCard"

const CardStack = ({ cards, currentClickId }) => {
  const [displayCardIndex, setDisplayCardIndex] = useState(0)
  // let cardArray = [<InfoCard cards={cards} />, <ContactCard cards={cards} />]

  useEffect(() => {}, [currentClickId])
  console.log(cards)

  return (
    <div className="cardContainer">
      <img
        id="displayCard"
        className="topCard"
        src={cards[displayCardIndex].images.fallback.src}
        alt="Let's make magic together! Email: mail@trufflery.com Phone: 323-546-7870"
      />
      <div className="middleCard"></div>
      <div className="bottomCard"></div>
    </div>
  )
}

export default CardStack
