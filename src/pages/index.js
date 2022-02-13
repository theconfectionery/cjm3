import React, { useState, useEffect } from "react"
import { Helmet } from "react-helmet"
import { useResizeObserver } from "@mantine/hooks"
import ImageMap from "image-map/dist/image-map"
import TruffleImageMap from "../components/TruffleImageMap"
import BackgroundLightsOnA from "../assets/images/BKG-A-landing.jpg"
import BackgroundLightsOffA from "../assets/images/BKG-A-lightbox.jpg"

import "normalize.css"
import "../assets/main.css"
import reactDom from "react-dom"

export default function Home() {
  const [lightsOn, setLightsOn] = useState(true)
  const [lastClicked, setLastClicked] = useState("")
  const [currentClick, setCurrentClick] = useState("")
  const [screenCoords, setScreenCoords] = useState()
  // const [currentWidth, setCurrentWidth] = useState("")
  // const [currentHeight, setCurrentHeight] = useState("")

  const [ref, rect] = useResizeObserver()

  let cardTest = document.getElementById("cardTest")

  let cardWidth = 0
  let cardHeight = 0

  //dimensions measured in pixels
  const convertCoordsToDimensions = () => {
    // console.log("convertCoordsToDimensions triggered")
    if (screenCoords) {
      let coordArray = screenCoords.split(",")
      cardWidth = Math.floor(coordArray[2]) - Math.floor(coordArray[0])
      cardHeight = Math.floor(coordArray[3]) - Math.floor(coordArray[1])
      // console.log("new width: " + cardWidth + " and height: " + cardHeight)
      document.getElementById("cardTest").setAttribute("height", cardHeight)
      document.getElementById("cardTest").setAttribute("width", cardWidth)
    }
  }

  // console.log("About to Get Dimensions")
  // convertCoordsToDimensions()

  useEffect(() => {
    // console.log("useEffect(Home) triggered")
    convertCoordsToDimensions()
  })

  const toggleLights = () => {
    if (!lightsOn && (lastClicked === "contact" || lastClicked === "info")) {
      // console.log("toggleLights triggered: A")
      setLightsOn(true)
    } else if (lightsOn && lastClicked === "truffle") {
      // console.log("toggleLights triggered: B")
      setLightsOn(false)
    } else if (!lightsOn && lastClicked === "bg") {
      // console.log("toggleLights triggered: C")
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
                className="fadeIn"
                height="3453"
                width="5148"
                useMap="#imgMap"
                onLoad={() => {
                  ImageMap("img[usemap]")
                  // console.log("lights on img loaded")
                  convertCoordsToDimensions()
                }}
              />
            ) : (
              <img
                src={BackgroundLightsOffA}
                alt="Open Truffle Box on a Film Set with Lights Off"
                height="3453"
                width="5148"
                useMap="#imgMap"
                onLoad={() => {
                  ImageMap("img[usemap]")
                  // console.log("lights off img loaded")
                  convertCoordsToDimensions()
                }}
              />
            )}
            <div id="cardTest"></div>
          </div>
          <TruffleImageMap
            id="truffleImageMap"
            setLastClicked={setLastClicked}
            setCurrentClick={setCurrentClick}
            setScreenCoords={setScreenCoords}
            cardHeight={cardHeight}
            cardWidth={cardWidth}
            onClick={toggleLights()}
          />
        </div>
      </main>
    </>
  )
}
