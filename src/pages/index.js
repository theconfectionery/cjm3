import React, { useState, useEffect } from "react"
import reactDom from "react-dom"
import { Helmet } from "react-helmet"

import Screen from "../components/Screen"
import { useCards } from "../components/imgs/useCards"
import "normalize.css"
import "../styling/main.css"

import loadable from "@loadable/component"
import { useVideos } from "../components/imgs/useVideos"
import App from "../components/App"

const TruffleImageMap = loadable(() => import("../components/TruffleImageMap"))

export default function Home() {
  console.log("<<<<RENDERING HOME>>>>>")
  const arrowClickedStack = []

  return (
    <>
      <Helmet>
        <script src="//code.jquery.com/jquery-3.1.1.slim.min.js"></script>
        <script src="https://unpkg.com/image-map/dist/image-map.js"></script>
        <script src="https://unpkg.com/jquery/dist/jquery.js"></script>
        <script src="https://unpkg.com/image-map/dist/image-map.jquery.js"></script>
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Helmet>
      <main className="body">
        <App arrowClickedStack={arrowClickedStack} />
      </main>
    </>
  )
}
