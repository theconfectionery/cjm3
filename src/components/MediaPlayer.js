import React, { useEffect, useState } from "react"

import ReactPlayer from "react-player"
import { buttonMapping } from "./imgs/static"
import { usePrevious } from "./utils"

const MediaPlayer = ({
  currentClick,
  currentVideoDetails,
  arrowClickedStack,
}) => {
  const { currentClickId } = currentClick
  const { playVideo, currentVideoArray, videoIndex } = currentVideoDetails
  const [currentVideoIndex, setCurrentVideoIndex] = useState(videoIndex)

  console.log("<Media Player> Rendered")
  console.log(currentVideoArray, currentVideoIndex)

  const getNextVideo = () => {
    if (playVideo && currentVideoIndex < currentVideoArray.length - 1) {
      setCurrentVideoIndex(currentVideoIndex + 1)
    } else {
      setCurrentVideoIndex(0)
    }
  }

  const getPrevVideo = () => {
    if (playVideo && currentVideoIndex > 0) {
      setCurrentVideoIndex(currentVideoIndex - 1)
    } else {
      setCurrentVideoIndex(0)
    }
  }

  useEffect(() => {
    console.log(`The stack has ${arrowClickedStack.length} elements`)

    if (currentClickId === "leftArrow" || currentClickId === "rightArrow") {
      console.log(currentClickId)
      if (playVideo) {
        console.log(playVideo)
        if (arrowClickedStack.length > 0) {
          console.log(arrowClickedStack.length)
          const arrow = arrowClickedStack.pop()
          console.log(arrow)
          arrow === "rightArrow" ? getNextVideo() : getPrevVideo()
        }
      }
    }
  })

  const mediaPlayer = (
    <ReactPlayer
      className="react-player"
      url={currentVideoArray[currentVideoIndex].embeddedUrl}
      height="95%"
      width="95%"
      playing // Sets autoplay on click
      controls={false}
      onEnded={getNextVideo}
    />
  )

  return mediaPlayer
}

export default MediaPlayer
