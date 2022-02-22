import React, { useState, useEffect } from "react"
import reactDom from "react-dom"
import { Helmet } from "react-helmet"

import Screen from "../components/Screen"
import { useCards } from "../components/imgs/useCards"
import "normalize.css"
import "../styling/main.css"

import loadable from "@loadable/component"
import { useVideos } from "../components/imgs/useVideos"

const TruffleImageMap = loadable(() => import("../components/TruffleImageMap"))

export default function Home() {
  const [mapLoaded, setMapLoaded] = useState(false)
  const [lightsOn, setLightsOn] = useState(true)
  const [showScreen, setShowScreen] = useState(true)
  const [currentClickId, setCurrentClickId] = useState("")
  const [currentClickType, setCurrentClickType] = useState("")

  const cards = useCards()
  const videos = useVideos()

  console.log("Cards: ", cards)

  console.log("Current click ID:", currentClickId, "Type:", currentClickType)

  const toggleLights = () => {
    console.log("toggleLights()")
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
        />
      )
      if (showScreen) {
        reactDom.render(screen, screenArea)
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
