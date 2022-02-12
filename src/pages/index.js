import React, { useState, useEffect } from "react"
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
  const [screenCoords, setScreenCoords] = useState("")

  const getScreenCoords = () => {
    // console.log("getting screen coords: " + screenCoords)
    setScreenCoords(document.getElementById("videoPlayerArea").coords)
    // console.log("set screen coords: " + screenCoords)
  }

  useEffect(() => {
    // window.addEventListener("resize", getScreenCoords)
    getScreenCoords()
    window.removeEventListener("resize", getScreenCoords)
  }, [])

  const handleClick = () => {
    toggleLights()
  }

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
              onresize={() => {
                console.log(document.getElementById("videoPlayerArea").coords)
              }}
              onLoad={() => {
                ImageMap("img[usemap]")
                console.log(document.getElementById("videoPlayerArea").coords)
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
                console.log(document.getElementById("videoPlayerArea").coords)
              }}
            />
          )}
          <TruffleImageMap
            className="truffleImageMap"
            setLastClicked={setLastClicked}
            setCurrentClick={setCurrentClick}
            setScreenCoords={setScreenCoords}
            onClick={handleClick()}
          />
        </div>
      </main>
    </>
  )
}
