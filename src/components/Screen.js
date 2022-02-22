import React, { useEffect, useState } from "react"
import CardStack from "./CardStack"
import ReactPlayer from "react-player"
import { buttonMapping } from "./imgs/static"
import { usePrevious } from "./utils"

// import { GatsbyImage } from "gatsby-plugin-image"

const fakeVideo = { embeddedUrl: "" }

const Screen = ({ cards, videos, currentClickId, currentClickType }) => {
  const [playVideo, setPlayVideo] = useState(false)
  const [currentVideoArray, setCurrentVideoArray] = useState([fakeVideo])
  const [videoIndex, setVideoIndex] = useState(0)
  const prevClickId = usePrevious(currentClickId)

  const getVideoArray = currentClickId => {
    return videos[buttonMapping[currentClickId]]
  }

  useEffect(() => {
    /**
     * Conditionally sets state based on button click if the prevClick is different
     * than the current click.
     */
    if (prevClickId !== currentClickId) {
      if (currentClickId in buttonMapping) {
        setCurrentVideoArray(getVideoArray(currentClickId))
        setVideoIndex(0)
      } else {
        setVideoIndex(0)
        setCurrentVideoArray([fakeVideo])
      }
    }
  })

  const handleStateChanges = () => {
    if (currentClickId && currentClickId in buttonMapping) {
      if (!playVideo) {
        setPlayVideo(true)
        console.log("rerendering")
        console.log("Setting video array ")
      }
    } else {
      if (playVideo) {
        setPlayVideo(false)
        setCurrentVideoArray([fakeVideo])
      }
    }
  }

  console.log("Videos: ", videos)
  console.log("CurrentVideoArray: ", currentVideoArray)
  handleStateChanges()

  const getNextVideo = () => {
    if (videoIndex < currentVideoArray.length) {
      setVideoIndex(videoIndex + 1)
    } else {
      setPlayVideo(false)
      setVideoIndex(0)
      setCurrentVideoArray([fakeVideo])
    }
  }

  const mediaPlayer = (
    <ReactPlayer
      className="react-player"
      url={currentVideoArray[videoIndex].embeddedUrl}
      height="100%"
      width="100%"
      // playing  // Sets autoplay on click
      controls={false}
      onEnded={getNextVideo}
    />
  )

  const cardStack = (
    <div>
      {currentClickId === "btnContact" || currentClickId === "btnInfo" ? (
        <CardStack
          key={Math.random()}
          cards={cards}
          currentClickId={currentClickId}
        />
      ) : null}
    </div>
  )

  return (
    <div id="screenContainer">
      <div>
        {playVideo ? (
          <div className="screenImage">{mediaPlayer}</div>
        ) : (
          <div>{cardStack}</div>
        )}
      </div>
    </div>
  )
}

export default Screen
