import React, { useState } from "react"
import LinkGrid from "../components/linkGrid"

import "normalize.css"
import "../assets/main.css"

export default function Home() {
  const [lightsOn, setLightsOn] = useState(true)

  return (
    <main className="imageContainer">
      <div
        className={lightsOn ? "bgImage lightsOn" : "bgImage lightsOff"}
      ></div>
      <div className="linkContainer" onClick={() => setLightsOn(!lightsOn)}>
        <LinkGrid />
      </div>
    </main>
  )
}
