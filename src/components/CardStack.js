import React, { useEffect, useRef } from "react"
// import { Carousel } from "3d-react-carousal"

const CardStack = ({ cards, showCards, currentClickId }) => {
  const imageUrls = cards.map(card => card.file.url)
  const infoCard = cards[0]
  const contactCard = cards.length - 1

  let slides = [
    <img
      className="card"
      src="https://images.ctfassets.net/jotoby554kx0/4bhIAoUyQeYysPWgIe5SCK/4c223a881085f01d75dd5c440bf6fde1/CARD01.jpg"
      alt="1"
    />,
    <img
      className="card"
      src="https://images.ctfassets.net/jotoby554kx0/3wzwAUSG70EhPvHVphmKJw/e161255869e20cc89e8dd2aba42d1206/CARD02.jpg"
      alt="2"
    />,
    <img
      className="card"
      src="https://images.ctfassets.net/jotoby554kx0/4CPyxfldz8iqMERcrakx4u/59e8d7786dac2ed2677a5d3c98a5a818/CARD_03.jpg"
      alt="3"
    />,
    <img
      className="card"
      src="https://images.ctfassets.net/jotoby554kx0/4SWFGjRIXZwtcB1GgF3sk6/b0a3dcf52e8512c975c63fef3728b4ba/CARD_04.jpg"
      alt="4"
    />,
    <img
      className="card"
      src="https://images.ctfassets.net/jotoby554kx0/4GExflYYHixT6c0bgnu4OI/23d950c158ec15d0a2f49e660b8ed51b/CARD_05.jpg"
      alt="5"
    />,
  ]

  return (
    <img
      className="card"
      src="https://images.ctfassets.net/jotoby554kx0/4bhIAoUyQeYysPWgIe5SCK/4c223a881085f01d75dd5c440bf6fde1/CARD01.jpg"
      alt="1"
    />
    //   <Carousel slides={slides} autoplay={false} />
  )
}

export default CardStack
