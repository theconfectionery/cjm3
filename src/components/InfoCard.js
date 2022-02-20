import React from "react"

const InfoCard = ({ cards }) => {
  const infoCard = cards.card_info.images.fallback.src
  return (
    <div className="cardContainer">
      <img
        id="infoCard"
        className="screenImage"
        src={infoCard}
        alt="Try a sample by selecting a truffle"
      />
    </div>
  )
}

export default InfoCard
