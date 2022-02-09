import React, { useState } from "react"

import "normalize.css"
import "../assets/main.css"

export default function Home() {
  const [lightsOn, setLightsOn] = useState(true)

  return (
    <main
      className={lightsOn ? "bgImage lightsOn" : "bgImage lightsOff"}
      onClick={() => setLightsOn(!lightsOn)}
    ></main>
  )
}
