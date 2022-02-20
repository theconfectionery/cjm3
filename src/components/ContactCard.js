import React from "react"

const ContactCard = ({ cards }) => {
  const contactCard = cards.card_contact.images.fallback.src
  return (
    <div className="cardContainer">
      <img
        id="contactCard"
        className="screenImage"
        src={contactCard}
        alt="Let's make magic together! Email: mail@trufflery.com Phone: 323-546-7870"
      />
    </div>
  )
}

export default ContactCard
