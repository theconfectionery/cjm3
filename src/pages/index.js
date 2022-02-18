import { Helmet } from "react-helmet"
import React, { useState, useEffect } from "react"
import { useElementSize, useResizeObserver } from "@mantine/hooks"
import ImageMap from "image-map"
import { GatsbyImage } from "gatsby-plugin-image"
import TruffleImageMap from "../components/TruffleImageMap"
import Screen from "../components/Screen"
import { useCards } from "../components/imgs/useCards"
import { useBgALightsOnOff } from "../components/imgs/useBgLights"
import "normalize.css"
import "../styling/main.css"

export default function Home() {
  const { ref, width, height } = useElementSize()
  // const [ref, rect] = useResizeObserver()
  const cards = useCards()
  const lights = useBgALightsOnOff()
  const [lightsOn, setLightsOn] = useState(true)
  const [showScreen, setShowScreen] = useState(true)
  const [lastClicked, setLastClicked] = useState("")
  const [currentClick, setCurrentClick] = useState("")
  const [screenCoords, setScreenCoords] = useState("")
  const [cardWidth, setCardWidth] = useState(0)
  const [cardHeight, setCardHeight] = useState(0)

  // console.log("<Home> rendered")

  useEffect(() => {
    // ImageMap("img[usemap]")
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
    firstScreenRender()
    // console.log(`width: ${width} height: ${height}`)
  }, [width, height])

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
    const width = Math.floor(coordArray[2]) - Math.floor(coordArray[0])
    const height = Math.floor(coordArray[3]) - Math.floor(coordArray[1])
    // console.log(coordArray)
    if (width > 0 && height > 0) {
      setCardWidth(Math.floor(coordArray[2]) - Math.floor(coordArray[0]))
      setCardHeight(Math.floor(coordArray[3]) - Math.floor(coordArray[1]))
      console.log(cardWidth)
      console.log(cardHeight)
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
                }}
              />
            </div>
            <div
              id="cardTest"
              className="block"
              style={{
                height: `${height / 4}px`,
                width: `${width / 4}px`,
                top: `${height / 4.8}px`,
                left: `${width / 3}px`,
              }}
            >
              <Screen
                cardHeight={cardHeight}
                cardWidth={cardWidth}
                showScreen={showScreen}
                cards={cards}
                width={width}
                height={height}
              />
            </div>
          </div>
          <TruffleImageMap
            id="truffleImageMap"
            setLastClicked={setLastClicked}
            setCurrentClick={setCurrentClick}
            setScreenCoords={setScreenCoords}
            width={width}
            height={height}
            onClick={toggleLights()}
          />
        </div>
      </main>
    </>
  )
}
