import React, { useState, useEffect } from "react"
import reactDom from "react-dom"
import { Helmet } from "react-helmet"
// import { GatsbyImage } from "gatsby-plugin-image"
import Screen from "../components/Screen"
import { useCards } from "../components/imgs/useCards"
import { useBgALightsOnOff } from "../components/imgs/useBgLights"
import "normalize.css"
import "../styling/main.css"

import loadable from "@loadable/component"

const TruffleImageMap = loadable(() => import("../components/TruffleImageMap"))

export default function Home() {
  const [mapLoaded, setMapLoaded] = useState(false)
  const [showScreen, setShowScreen] = useState(true)
  const [lightsOn, setLightsOn] = useState(true)
  const [currentClickId, setCurrentClickId] = useState("")
  const [currentClickType, setCurrentClickType] = useState("")

  const cards = useCards()
  console.log(cards)
  // console.log("<Home> rendered")
  console.log("Current click ID:", currentClickId, "Type:", currentClickType)

  const toggleLights = () => {
    console.log("toggleLights()")
    if (lightsOn && currentClickType === ("btn" || "contact" || "info")) {
      setLightsOn(false)
    }
    if (!lightsOn && currentClickType === "bgArea") {
      setLightsOn(true)
    }
  }

  useEffect(() => {
    toggleLights()
  }, [currentClickType])

  // useEffect(() => {
  //   console.log("<Home> useEffect()")
  //   console.log("Lights On? ", lightsOn)
  // }, [lightsOn])

  useEffect(() => {
    if (mapLoaded) {
      var screenArea = document.getElementById("screenArea")
      if (showScreen) {
        reactDom.render(
          //! This cards object is different now. It's a list of objects, rather than an object of objects
          <Screen
            cards={cards}
            currentClickId={currentClickId}
            currentClickType={currentClickType}
          />,
          screenArea
        )
      }
    }
  })

  return (
    <>
      <Helmet>
        <script src="//code.jquery.com/jquery-3.1.1.slim.min.js"></script>
        <script src="https://unpkg.com/image-map/dist/image-map.js"></script>
        <script src="https://unpkg.com/jquery/dist/jquery.js"></script>
        <script src="https://unpkg.com/image-map/dist/image-map.jquery.js"></script>
      </Helmet>
      <main className="body">
        <div id="mapContainer">
          <TruffleImageMap
            id="truffleImageMap"
            setMapLoaded={setMapLoaded}
            lightsOn={lightsOn}
            setCurrentClickId={setCurrentClickId}
            setCurrentClickType={setCurrentClickType}
          />
        </div>
      </main>
    </>
  )
}
