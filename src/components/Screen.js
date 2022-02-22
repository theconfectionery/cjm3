import React, { useEffect, useRef, useState } from "react"
import CardStack from "./CardStack"
import ReactPlayer from "react-player"
import { buttonMapping } from "./imgs/useVideos"
// import { GatsbyImage } from "gatsby-plugin-image"

const fakeVideo = { embeddedUrl: "" }
function usePrevious(value) {
  const ref = useRef()
  useEffect(() => {
    ref.current = value //assign the value of ref to the argument
  }, [value]) //this code will run when the value of 'value' changes
  return ref.current //in the end, return the current ref value.
}

const Screen = ({ cards, videos, currentClickId, currentClickType }) => {
  const [playVideo, setPlayVideo] = useState(false)
  const [currentVideoArray, setCurrentVideoArray] = useState([fakeVideo])
  const [videoIndex, setVideoIndex] = useState(0)
  const prevClickId = usePrevious(currentClickId)

  useEffect(() => {
    if (prevClickId !== currentClickId) {
      if (currentClickId in buttonMapping) {
        setCurrentVideoArray(videos[buttonMapping[currentClickId]])
        setVideoIndex(0)
      } else {
        setCurrentVideoArray([fakeVideo])
      }
    }
  })

  console.log(currentVideoArray)

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
    // console.log(currentVideo)
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
