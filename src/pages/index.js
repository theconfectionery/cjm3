// EXTERNAL
import { Helmet } from "react-helmet"
import React, { useState, useEffect } from "react"
import { useElementSize, useResizeObserver } from "@mantine/hooks"
import { ImageMap } from "image-map/dist/image-map.js"

import { GatsbyImage } from "gatsby-plugin-image"
// COMPONENTS
import TruffleImageMap from "../components/TruffleImageMap"
import Screen from "../components/Screen"
// ASSETS
import { useCards } from "../components/imgs/useCards"
import { useBgALightsOnOff } from "../components/imgs/useBgLights"
// STYLING
import "normalize.css"
import "../assets/main.css"

export default function Home() {
  const { ref, width, height } = useElementSize()
  // const [ref, rect] = useResizeObserver()
  const cards = useCards()
  const lights = useBgALightsOnOff()
  const [lightsOn, setLightsOn] = useState(true)
  const [showScreen, setShowScreen] = useState(false)
  const [lastClicked, setLastClicked] = useState("")
  const [currentClick, setCurrentClick] = useState("")
  const [screenCoords, setScreenCoords] = useState("")
  const [cardWidth, setCardWidth] = useState(0)
  const [cardHeight, setCardHeight] = useState(0)

  // console.log("<Home> rendered")

  useEffect(() => {
    console.log("imageList received from useCards()")
    console.log(cards)
  }, [])

  const toggleLights = () => {
    if (!lightsOn && (lastClicked === "contact" || lastClicked === "info")) {
      setLightsOn(true)
    } else if (lightsOn && lastClicked === "truffle") {
      setLightsOn(false)
    } else if (!lightsOn && lastClicked === "bg") {
      setLightsOn(true)
    }
  }

  useEffect(() => {
    // console.log("<Home> useEffect triggered")
    convertCoordsToDimensions()
    firstScreenRender()
    // return console.log("<HOME> CLEAN UP")
  })

  const firstScreenRender = () => {
    // console.log("<Home> firstScreenRender()")
    if (cardHeight > 0 && cardWidth > 0) {
      if (!showScreen && cardWidth < 1274) {
        // console.log("firstScreenRender(): setShowScreen changed to true")
        setShowScreen(true)
      }
    }
  }

  const convertCoordsToDimensions = () => {
    // console.log("convertCoordsToDimensions() triggered (by <Home> useEffect)")
    let coordArray = screenCoords.split(",")
    // console.log(`convertCoordsToDimensions() new coordArray ${coordArray}`)
    setCardWidth(Math.floor(coordArray[2]) - Math.floor(coordArray[0]))
    setCardHeight(Math.floor(coordArray[3]) - Math.floor(coordArray[1]))
  }

  return (
    <>
      <Helmet>
        {/* <link rel="stylesheet" href="../assets/main.css" /> */}
        <script src="//code.jquery.com/jquery-3.1.1.slim.min.js"></script>
        <script src="https://unpkg.com/image-map/dist/image-map.js"></script>
        <script src="https://unpkg.com/jquery/dist/jquery.js"></script>
        <script src="https://unpkg.com/image-map/dist/image-map.jquery.js"></script>
      </Helmet>
      <main className="body">
        <div>
          <div className="imageContainer" ref={ref}>
            <div className="block">
              <GatsbyImage
                image={lightsOn ? lights.bg_a_lightsOn : lights.bg_a_lightsOff}
                alt="Open Truffle Box on a Film Set, Lid of Truffle Box is Display Screen"
                className={lightsOn ? "transitionIn" : "transitionOut"}
                id="bgImage"
                useMap="#imgMap"
                onLoad={() => {
                  ImageMap("img[usemap]")
                  convertCoordsToDimensions()
                }}
              />
              {/* <img
                src={
                  lightsOn
                    ? imagesObject.bg_a_lightsOn.url
                    : imagesObject.bg_a_lightsOff.url
                }
                alt="Open Truffle Box on a Film Set, Lid of Truffle Box is Display Screen"
                className={lightsOn ? "transitionIn" : "transitionOut"}
                id="bgImage"
                height="3453"
                width="5148"
                useMap="#imgMap"
                onLoad={() => {
                  ImageMap("img[usemap]")
                  convertCoordsToDimensions()
                }}
              /> */}
            </div>
            <div id="cardTest" className="block">
              <Screen
                cardHeight={cardHeight}
                cardWidth={cardWidth}
                showScreen={showScreen}
                cards={cards}
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
