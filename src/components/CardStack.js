import React from "react"
import InfoCard from "./InfoCard"
import ContactCard from "./ContactCard"

const CardStack = ({ cards }) => {
  let cardArray = [<InfoCard cards={cards} />, <ContactCard cards={cards} />]
  const contactCard = cards[cards.length - 1].images.fallback.src
  const infoCard = cards[0].images.fallback.src
  let num = 0
  const currentCard = cardArray[num]

  return (
    <div className="cardContainer">
      <img
        id="displayCard"
        className="topCard"
        src={infoCard}
        alt="Let's make magic together! Email: mail@trufflery.com Phone: 323-546-7870"
      />
      <div className="middleCard"></div>
      <div className="bottomCard"></div>
    </div>
  )
}

export default CardStack
