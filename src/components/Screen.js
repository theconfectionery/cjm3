import React, { useEffect, useState } from "react"
import CardStack from "./CardStack"
import MediaPlayer from "./MediaPlayer"
// import CardStackCarousel from "./CardStackCarousel"
import ReactPlayer from "react-player"
import { buttonMapping } from "./imgs/static"
import { usePrevious } from "./utils"

// import { GatsbyImage } from "gatsby-plugin-image"

const fakeVideo = { embeddedUrl: "" }

const Screen = ({
  cards,
  videos,
  currentClickId,
  currentClickType,
  arrowClickedStack,
}) => {
  const [showCards, setShowCards] = useState(false)

  const getVideoArray = currentClickId => {
    // console.log(
    //   "getting vidoe array: ",
    //   currentClickId,
    //   "buttonMapping[currentClickId]: ",
    //   buttonMapping[currentClickId]
    // )
    return videos[buttonMapping[currentClickId]] || fakeVideo
  }
  const [videoDetails, setVideoDetails] = useState({
    playVideo: false,
    videoIndex: 0,
    currentVideoArray: getVideoArray(currentClickId),
  })
  const prevClickId = usePrevious(currentClickId)
  const { playVideo } = videoDetails
  console.log("<Screen> Rendered")
  console.log("Video Details: ", videoDetails)

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
  useEffect(() => {
    if (currentClickId && currentClickId in buttonMapping) {
      if (!playVideo) {
        setVideoDetails({
          videoIndex: 0,
          currentVideoArray: getVideoArray(currentClickId),
          playVideo: true,
        })
      } else {
        if (currentClickId !== prevClickId) {
          setVideoDetails({
            ...videoDetails,
            videoIndex: 0,
            currentVideoArray: getVideoArray(currentClickId),
          })
        }
      }
    } else if (currentClickId === "rightArrow") {
      // console.log("Setting Click Count")
    } else if (currentClickId === "leftArrow") {
      // console.log("Setting Click Count")
    } else {
      if (playVideo) {
        setVideoDetails({
          playVideo: false,
          currentVideoArray: getVideoArray(currentClickId),
          videoIndex: 0,
        })
      }
    }
  })
  // handleStateChanges()

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
          <div className="screenImage">
            {
              <MediaPlayer
                currentVideoDetails={videoDetails}
                currentClick={{ currentClickId: currentClickId }}
                arrowClickedStack={arrowClickedStack}
              />
            }
          </div>
        ) : (
          <div>{cardStack}</div>
        )}
      </div>
    </div>
  )
}

export default Screen
