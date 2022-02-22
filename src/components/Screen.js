import React, { useEffect, useState } from "react"
import CardStack from "./CardStack"
import ReactPlayer from "react-player"
import { buttonMapping } from "./imgs/static"
import { usePrevious } from "./utils"

// import { GatsbyImage } from "gatsby-plugin-image"

const fakeVideo = { embeddedUrl: "" }

const Screen = ({ cards, videos, currentClickId, currentClickType }) => {
  console.log("rerendering")
  const [playVideo, setPlayVideo] = useState(false)
  const [currentVideoArray, setCurrentVideoArray] = useState([fakeVideo])
  const [videoIndex, setVideoIndex] = useState(0)
  const prevClickId = usePrevious(currentClickId)

  const getVideoArray = currentClickId => {
    return videos[buttonMapping[currentClickId]]
  }

  // leftArrow
  // rightArrow

  useEffect(() => {
    /**
     * Conditionally sets state based on button click if the prevClick is different
     * than the current click.
     */
    if (prevClickId !== currentClickId) {
      if (currentClickId in buttonMapping) {
        setCurrentVideoArray(getVideoArray(currentClickId))
        setVideoIndex(0)
      } else if (currentClickId === "rightArrow") {
        console.log("Right Arrow Clicked")
        getNextVideo()
      } else if (currentClickId === "leftArrow") {
        console.log("Left Arrow Clicked")
        getPrevVideo()
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
      }
    } else if (
      currentClickId === "rightArrow" ||
      currentClickId === "leftArrow"
    ) {
      console.log("Captured left / right click")
    } else {
      if (playVideo) {
        console.log("Turning off Play video")
        setPlayVideo(false)
        setCurrentVideoArray([fakeVideo])
      }
    }
  }

  console.log("Videos: ", videos)
  console.log("CurrentVideoArray: ", currentVideoArray)
  handleStateChanges()

  const getNextVideo = () => {
    if (playVideo && videoIndex < currentVideoArray.length - 1) {
      console.log("incrementing videoIndex")
      setVideoIndex(videoIndex + 1)
    } else {
      setCurrentVideoArray([fakeVideo])
      setPlayVideo(false)
      setVideoIndex(0)
    }
  }

  const getPrevVideo = () => {
    if (playVideo && videoIndex > 0) {
      console.log("decrementing videoIndex")
      setVideoIndex(videoIndex - 1)
    } else {
      setCurrentVideoArray([fakeVideo])
      setPlayVideo(false)
      setVideoIndex(0)
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
        <CardStack key={Math.random()} cards={cards} />
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
      {/* <GatsbyImage
        image={cards.card_info}
        alt="Try a Sample by Selecting a Truffle"
        id="cardOne"
      /> */}
    </div>
  )
  // }
}

export default Screen
