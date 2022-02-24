import React, { useEffect, useState } from "react"
import CardStack from "./CardStack"
// import CardStackCarousel from "./CardStackCarousel"
import ReactPlayer from "react-player"
import { buttonMapping } from "./imgs/static"
import { usePrevious } from "./utils"

// import { GatsbyImage } from "gatsby-plugin-image"

const fakeVideo = { embeddedUrl: "" }

const Screen = ({ cards, videos, currentClickId, currentClickType }) => {
  const [playVideo, setPlayVideo] = useState(false)
  const [showCards, setShowCards] = useState(false)
  const [currentVideoArray, setCurrentVideoArray] = useState([fakeVideo])
  const [videoIndex, setVideoIndex] = useState(0)
  const prevClickId = usePrevious(currentClickId)

  // console.log("CurrentClickId: ", currentClickId)
  console.log("<Screen> Rendered")
  // console.log("cards: ", cards)
  //! why does <Screen> render twice on every load?

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
      } else if (currentClickId === "rightArrow") {
        getNextVideo()
      } else if (currentClickId === "leftArrow") {
        getPrevVideo()
      } else {
        setVideoIndex(0)
        setCurrentVideoArray([fakeVideo])
      }
    }
  })

  useEffect(() => {
    if (!showCards) {
      if (currentClickId === "btnContact" || currentClickId === "btnInfo") {
        setShowCards(true)
      }
    }
    if (showCards) {
      if (currentClickType === "btn" || currentClickType === "bgArea") {
        setShowCards(false)
      }
    }
    console.log("showCards: ", showCards)
  }, [currentClickId, currentClickType])

  //! if lightsOn or !playVideo: rightArrow and leftArrow shouldn't toggleLights
  const handleStateChanges = () => {
    if (currentClickId && currentClickId in buttonMapping) {
      if (!playVideo) {
        setPlayVideo(true)
      }
    } else if (
      currentClickId === "rightArrow" ||
      currentClickId === "leftArrow"
    ) {
    } else {
      if (playVideo) {
        setPlayVideo(false)
        setVideoIndex(0)
        setCurrentVideoArray([fakeVideo])
      }
    }
  }

  handleStateChanges()

  const getNextVideo = () => {
    if (playVideo && videoIndex < currentVideoArray.length - 1) {
      setVideoIndex(videoIndex + 1)
    } else {
      setCurrentVideoArray([fakeVideo])
      setPlayVideo(false)
      setVideoIndex(0)
    }
  }

  const getPrevVideo = () => {
    if (playVideo && videoIndex > 0) {
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
      height="95%"
      width="95%"
      playing // Sets autoplay on click
      controls={false}
      onEnded={getNextVideo}
    />
  )

  const cardStack = (
    <>
      {showCards ? (
        <CardStack cards={cards} currentClickId={currentClickId} />
      ) : null}
    </>
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
