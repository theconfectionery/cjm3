import React, { useState } from "react"

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
        <div className="linkGrid">
          <div className="link linkA"></div>
          <div className="link linkB"></div>
          <div className="link linkC"></div>
          <div className="link linkD"></div>
          <div className="link linkE"></div>
          <div className="link linkF"></div>
          <div className="link linkG"></div>
          <div className="link linkH"></div>
          <div className="link linkI"></div>
          <div className="link linkJ"></div>
          <div className="link linkK"></div>
          <div className="link linkL"></div>
          <div className="link linkM"></div>
          <div className="link linkN"></div>
          <div className="link linkO"></div>
        </div>
      </div>
    </main>
  )
}
