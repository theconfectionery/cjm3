import React, { useState, useEffect } from "react"
import reactDom from "react-dom"
import { Helmet } from "react-helmet"
// import { GatsbyImage } from "gatsby-plugin-image"
// import TruffleImageMap from "../components/TruffleImageMap"
import TruffleImageMap2 from "../components/TruffleImageMap2"
import Screen from "../components/Screen"
import { useCards } from "../components/imgs/useCards"
import { useBgALightsOnOff } from "../components/imgs/useBgLights"
import "normalize.css"
import "../styling/main.css"

export default function Home() {
  const [mapLoaded, setMapLoaded] = useState(false)
  const [showScreen, setShowScreen] = useState(false)
  const [currentClick, setCurrentClick] = useState("")

  if (window) {
    const cards = useCards()
  }

  console.log("<Home> rendered")

  useEffect(() => {
    if (mapLoaded) {
      var screenArea = document.getElementById("screenArea")
      if (showScreen) {
        reactDom.render(<Screen cards={cards} />, screenArea)
      }
    }
  }, [mapLoaded])

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
          <TruffleImageMap2 id="truffleImageMap" setMapLoaded={setMapLoaded} />
        </div>
      </main>
    </>
  )
}
