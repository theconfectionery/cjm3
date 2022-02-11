import React, { useState } from "react"
import { Helmet } from "react-helmet"
import ImageMap from "image-map/dist/image-map"
import BackgroundLightsOnA from "../assets/images/BKG-A-landing.jpg"
// import BackgroundLightsOffB from "../assets/images/BKG-A-lightbox.jpg"
// import LinkGrid from "../components/linkGrid"

import "normalize.css"
import "../assets/imageMap.css"
// import "../assets/main.css"

export default function Home() {
  const [lightsOn, setLightsOn] = useState(true)

  return (
    <>
      <Helmet>
        <script src="//code.jquery.com/jquery-3.1.1.slim.min.js"></script>
        <script src="https://unpkg.com/image-map/dist/image-map.js"></script>
        <script src="https://unpkg.com/jquery/dist/jquery.js"></script>
        <script src="https://unpkg.com/image-map/dist/image-map.jquery.js"></script>
      </Helmet>
      <div
        className="imageContainer"
        onLoad={() => {
          console.log("imageContainer loaded")
          ImageMap("img[usemap]")
          console.log("ImageMap Done?")
        }}
      >
        <img
          src={BackgroundLightsOnA}
          height="3453"
          width="5148"
          useMap="#imgMap"
          alt="Open Truffle Box on a Film Set"
          // className="backgroundImage"
        />
        <map name="imgMap">
          <area
            shape="rect"
            coords="1742,1706,2019,1874"
            href=""
            alt="Info Button"
            // onClick={() => setLightsOn(!lightsOn) }
            onClick={e => {
              alert("Info Button Clicked")
              e.preventDefault()
            }}
          ></area>
        </map>
      </div>

      {/* <main className="imageContainer">
        <div
          className={lightsOn ? "bgImage lightsOn" : "bgImage lightsOff"}
        ></div>
        <div className="linkContainer" onClick={() => setLightsOn(!lightsOn)}>
          <LinkGrid />
        </div>
      </main> */}
    </>
  )
}
