import React from "react"
import InfoCard from "./InfoCard"
import ContactCard from "./ContactCard"

const CardStack = () => {
  let cardArray = [<InfoCard />, <ContactCard />]
  return (
    <div>
      <div>{cardArray[0]}</div>
      <div>{cardArray[1]}</div>
    </div>
  )
}

export default CardStack
