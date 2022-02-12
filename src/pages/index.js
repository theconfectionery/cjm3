import React, { useState } from "react"
import { Helmet } from "react-helmet"
import ImageMap from "image-map/dist/image-map"
import TruffleImageMap from "../components/TruffleImageMap"
import BackgroundLightsOnA from "../assets/images/BKG-A-landing.jpg"
import BackgroundLightsOffA from "../assets/images/BKG-A-lightbox.jpg"
import Card1 from "../assets/images/CARD01.jpg"
import "normalize.css"
import "../assets/main.css"

export default function Home() {
  const [lightsOn, setLightsOn] = useState(true)
  const [lastClicked, setLastClicked] = useState("")
  const [currentClick, setCurrentClick] = useState("")

  const toggleLights = () => {
    if (!lightsOn && (lastClicked === "contact" || lastClicked === "info")) {
      setLightsOn(true)
    } else if (lightsOn && lastClicked === "truffle") {
      setLightsOn(false)
    }
  }

  const handleClick = () => {
    console.log("last clicked: " + lastClicked)
    console.log("current click: " + currentClick)
    toggleLights()
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
        <div className="imageContainer">
          <div className="cardStack"></div>
          {lightsOn ? (
            <img
              src={BackgroundLightsOnA}
              alt="Open Truffle Box on a Film Set"
              className="fadeIn"
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
              className="fadeOut"
              height="3453"
              width="5148"
              useMap="#imgMap"
              onLoad={() => {
                ImageMap("img[usemap]")
              }}
            />
          )}
          <TruffleImageMap
            className="truffleImageMap"
            setLastClicked={setLastClicked}
            setCurrentClick={setCurrentClick}
            onClick={handleClick()}
          />
        </div>
      </main>
    </>
  )
}
