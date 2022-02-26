import React, { useEffect, useState } from "react"
import CardStack from "./CardStack"
import MediaPlayer from "./MediaPlayer"

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
    return videos[currentClickId] || [fakeVideo]
  }
  const [videoDetails, setVideoDetails] = useState({
    playVideo: false,
    videoIndex: 0,
    currentVideoArray: getVideoArray(currentClickId),
  })
  const prevClickId = usePrevious(currentClickId)
  const { playVideo } = videoDetails

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
  }, [currentClickId, currentClickType])

  useEffect(() => {
    if (currentClickId && currentClickId in videos) {
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

  const cardStack = (
    <>
      {showCards ? (
        <CardStack cards={cards} currentClickId={currentClickId} />
      ) : null}
    </>
  )

  return (
    <div>
      <div>
        {playVideo ? (
          <div className="screenImage">
            {
              <MediaPlayer
                currentVideoDetails={videoDetails}
                currentClick={{ currentClickId: currentClickId }}
                arrowClickedStack={arrowClickedStack}
                setVideoDetails={setVideoDetails}
                getVideoArray={getVideoArray}
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
