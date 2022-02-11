import React, { useState } from "react"
import { Helmet } from "react-helmet"
import ImageMap from "image-map/dist/image-map"
import TruffleImageMap from "../components/TruffleImageMap"
import BackgroundLightsOnA from "../assets/images/BKG-A-landing.jpg"
import BackgroundLightsOffA from "../assets/images/BKG-A-lightbox.jpg"
import "normalize.css"
import "../assets/main.css"

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
      <main className="body">
        <div className="imageContainer">
          <div className="cardStack">
            <area
              target=""
              alt="screen"
              title="screen"
              href=""
              coords="1686,737,1744,737,2945,744,3017,759,3039,809,3039,874,3039,1560,3010,1604,2959,1618,1737,1618,1686,1604,1650,1560,1650,824,1665,766"
              shape="poly"
              onClick={e => {
                alert("Screen Clicked")
                e.preventDefault()
              }}
            />
            <div className="topCard"></div>
            <div className="middleCard"></div>
            <div className="bottomCard"></div>
          </div>
          {/* <img
            src={BackgroundLightsOffA}
            alt="Open Truffle Box on a Film Set with Lights Off"
          /> */}
          <img
            src={BackgroundLightsOnA}
            // height="3453"
            // width="5148"
            useMap="#imgMap"
            alt="Open Truffle Box on a Film Set"
            onLoad={() => {
              ImageMap("img[usemap]")
            }}
          />
          <TruffleImageMap />
        </div>
      </main>
    </>
  )
}
