// EXTERNAL
import { Helmet } from "react-helmet"
import React, { useState, useEffect } from "react"
import { useElementSize, useResizeObserver } from "@mantine/hooks"
import ImageMap from "image-map/dist/image-map"
import { graphql } from "gatsby"
import { GatsbyImage, getItem } from "gatsby-plugin-image"
// COMPONENTS
import TruffleImageMap from "../components/TruffleImageMap"
import Screen from "../components/Screen"
// ASSETS
import BackgroundLightsOnA from "../assets/images/BKG-A-landing.jpg"
import BackgroundLightsOffA from "../assets/images/BKG-A-lightbox.jpg"
import CardOne from "../assets/images/CARD01.jpg"
// STYLING
import "normalize.css"
import "../assets/main.css"

export default function Home() {
  const [lightsOn, setLightsOn] = useState(true)
  const [showScreen, setShowScreen] = useState(false)
  const [lastClicked, setLastClicked] = useState("")
  const [currentClick, setCurrentClick] = useState("")
  const [screenCoords, setScreenCoords] = useState("")
  const { ref, width, height } = useElementSize()

  const [cardWidth, setCardWidth] = useState(0)
  const [cardHeight, setCardHeight] = useState(0)

  console.log("<Home> rendered")

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
    console.log("<Home> useEffect triggered")
    convertCoordsToDimensions()
    firstScreenRender()
    return console.log("<HOME> CLEAN UP")
  })

  const firstScreenRender = () => {
    console.log("<Home> firstScreenRender()")
    if (cardHeight > 0 && cardWidth > 0) {
      if (!showScreen && cardWidth < 1274) {
        console.log("firstScreenRender(): setShowScreen changed to true")
        setShowScreen(true)
      }
    }
  }

  const convertCoordsToDimensions = () => {
    console.log("convertCoordsToDimensions() triggered (by <Home> useEffect)")
    let coordArray = screenCoords.split(",")
    console.log("convertCoordsToDimensions() new coordArray " + coordArray)
    setCardWidth(Math.floor(coordArray[2]) - Math.floor(coordArray[0]))
    setCardHeight(Math.floor(coordArray[3]) - Math.floor(coordArray[1]))
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
          <div className="imageContainer">
            {lightsOn ? (
              <img
                src={BackgroundLightsOnA}
                alt="Open Truffle Box on a Film Set"
                className="block fadeIn"
                height="3453"
                width="5148"
                useMap="#imgMap"
                ref={ref}
                onLoad={() => {
                  ImageMap("img[usemap]")
                  convertCoordsToDimensions()
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
                ref={ref}
                onLoad={() => {
                  ImageMap("img[usemap]")
                  convertCoordsToDimensions()
                }}
              />
            )}
            <div id="cardTest" className="block">
              <Screen
                cardHeight={cardHeight}
                cardWidth={cardWidth}
                showScreen={showScreen}
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

export const imageQuery = graphql`
  query {
    allContentfulAsset {
      nodes {
        contentful_id
        description
        title
        file {
          details {
            image {
              width
              height
            }
          }
          url
          contentType
        }
      }
    }
  }
`
