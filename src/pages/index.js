import React, { useState, useEffect } from "react"
import { Helmet } from "react-helmet"
import { useResizeObserver } from "@mantine/hooks"
import ImageMap from "image-map/dist/image-map"
import TruffleImageMap from "../components/TruffleImageMap"
import BackgroundLightsOnA from "../assets/images/BKG-A-landing.jpg"
import BackgroundLightsOffA from "../assets/images/BKG-A-lightbox.jpg"
import CardOne from "../assets/images/CARD01.jpg"

import "normalize.css"
import "../assets/main.css"
import reactDom from "react-dom"

export default function Home() {
  const [lightsOn, setLightsOn] = useState(true)
  const [lastClicked, setLastClicked] = useState("")
  const [currentClick, setCurrentClick] = useState("")
  const [screenCoords, setScreenCoords] = useState()

  const [ref, rect] = useResizeObserver()

  let cardWidth = 0
  let cardHeight = 0

  const setCardDimensions = () => {
    let cardHeightPx = cardHeight + "px"
    let cardWidthPx = cardWidth + "px"
    document.getElementById("cardOne").setAttribute("height", cardHeightPx)
    document.getElementById("cardOne").setAttribute("width", cardWidthPx)
  }

  //dimensions measured in pixels
  const convertCoordsToDimensions = () => {
    if (screenCoords) {
      let coordArray = screenCoords.split(",")
      cardWidth = Math.floor(coordArray[2]) - Math.floor(coordArray[0])
      cardHeight = Math.floor(coordArray[3]) - Math.floor(coordArray[1])
    }
  }

  useEffect(() => {
    convertCoordsToDimensions()
    if (lastClicked) {
      setCardDimensions()
    }
  })

  const toggleLights = () => {
    if (!lightsOn && (lastClicked === "contact" || lastClicked === "info")) {
      setLightsOn(true)
    } else if (lightsOn && lastClicked === "truffle") {
      setLightsOn(false)
    } else if (!lightsOn && lastClicked === "bg") {
      setLightsOn(true)
    }
  }

  return (
    <>
      <Helmet>
        <script src="//code.jquery.com/jquery-3.1.1.slim.min.js"></script>
        <script src="https://unpkg.com/image-map/dist/image-map.js"></script>
        <script src="https://unpkg.com/jquery/dist/jquery.js"></script>
        <script src="https://unpkg.com/image-map/dist/image-map.jquery.js"></script>
      </Helmet>
      <main className="body">
        <div>
          <div ref={ref} className="imageContainer">
            {lightsOn ? (
              <img
                src={BackgroundLightsOnA}
                alt="Open Truffle Box on a Film Set"
                className="block fadeIn"
                height="3453"
                width="5148"
                useMap="#imgMap"
                onLoad={() => {
                  ImageMap("img[usemap]")
                }}
              />
            ) : (
              <img
                src={BackgroundLightsOffA}
                alt="Open Truffle Box on a Film Set with Lights Off"
                className="block fadeIn"
                height="3453"
                width="5148"
                useMap="#imgMap"
                onLoad={() => {
                  ImageMap("img[usemap]")
                }}
              />
            )}
            <div id="cardTest" className="block">
              <img
                id="cardOne"
                src={CardOne}
                height={cardHeight}
                width={cardWidth}
                alt=""
              />
            </div>
          </div>
          <TruffleImageMap
            id="truffleImageMap"
            setLastClicked={setLastClicked}
            setCurrentClick={setCurrentClick}
            setScreenCoords={setScreenCoords}
            onClick={toggleLights()}
          />
        </div>
      </main>
    </>
  )
}
