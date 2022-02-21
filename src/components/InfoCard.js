import React from "react"

const InfoCard = ({ cards }) => {
  const infoCard = cards[0].images.fallback.src
  return (
    <div className="cardContainer">
      <img
        id="displayCard"
        className="topCard"
        src={infoCard}
        alt="Try a sample by selecting a truffle"
      />
      <div className="middleCard"></div>
      <div className="bottomCard"></div>
    </div>
  )
}

export default InfoCard
