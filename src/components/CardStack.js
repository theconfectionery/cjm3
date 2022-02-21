import React from "react"
import InfoCard from "./InfoCard"
import ContactCard from "./ContactCard"

const CardStack = ({ cards }) => {
  let cardArray = [<InfoCard cards={cards} />, <ContactCard cards={cards} />]
  let num = 0

  return (
    <div className="cardContainer">
      {cardArray[num]}
      <div className="middleCard"></div>
      <div className="bottomCard"></div>
    </div>
  )
}

export default CardStack
