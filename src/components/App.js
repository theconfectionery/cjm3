import React, { useState, useEffect } from "react"
import reactDom from "react-dom"

import Screen from "../components/Screen"
import { useCards } from "../components/imgs/useCards"
import "normalize.css"
import "../styling/main.css"

import loadable from "@loadable/component"
import { useVideos } from "../components/imgs/useVideos"

const TruffleImageMap = loadable(() => import("../components/TruffleImageMap"))

export default function App({ arrowClickedStack }) {
  console.log("<<<<RENDERING APP>>>>>")
  const [mapLoaded, setMapLoaded] = useState(false)
  const [lightsOn, setLightsOn] = useState(true)
  const [currentClick, setCurrentClick] = useState([""])
  const [currentClickType, setCurrentClickType] = useState("")
  const cards = useCards()
  const videos = useVideos()
  const currentClickId = currentClick[0]

  const toggleLights = () => {
    // console.log("toggleLights()")
    if (lightsOn && currentClickType === "btn") {
      setLightsOn(false)
    }
    if (!lightsOn && currentClickType === "bgArea") {
      setLightsOn(true)
    }
    if (!lightsOn && currentClickType === "contact") {
      setLightsOn(true)
    }
    if (!lightsOn && currentClickType === "info") {
      setLightsOn(true)
    }
  }

  useEffect(() => {
    toggleLights()
  }, [currentClickType])

  useEffect(() => {
    if (mapLoaded) {
      var screenArea = document.getElementById("screenArea")
      const screen = (
        <Screen
          cards={cards}
          videos={videos}
          currentClickId={currentClickId}
          currentClickType={currentClickType}
          arrowClickedStack={arrowClickedStack}
        />
      )
      reactDom.render(screen, screenArea)
    }
  })

  return (
    <div id="mapContainer">
      <TruffleImageMap
        id="truffleImageMap"
        setMapLoaded={setMapLoaded}
        lightsOn={lightsOn}
        setCurrentClick={setCurrentClick}
        setCurrentClickType={setCurrentClickType}
        arrowClickedStack={arrowClickedStack}
      />
    </div>
  )
}
