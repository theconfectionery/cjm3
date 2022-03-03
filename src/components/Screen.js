import React, { useEffect, useState } from "react"
import CardStack from "./CardStack"
import MediaPlayer from "./MediaPlayer"
import { usePrevious } from "./utils"

const fakeVideo = { embeddedUrl: "" }

const Screen = ({ cards, videos, currentClickId, arrowClickedStack }) => {
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

  const showCardBtns = ["infoBtn", "contactBtn"]
  const hideCardBtns = [
    "btn1",
    "btn2",
    "btn3",
    "btn4",
    "btn5",
    "btn6",
    "btn7",
    "btn8",
    "btn9",
    "btn11",
    "btn12",
    "btn13",
    "bgAreaLeft",
    "bgAreaRight",
  ]

  useEffect(() => {
    if (showCardBtns.includes(currentClickId)) {
      setShowCards(true)
      console.log("<Screen> useEffect triggered: setShowCards(true)")
    }

    if (showCards) {
      if (hideCardBtns.includes(currentClickId)) {
        setShowCards(false)
        console.log("<Screen> useEffect triggered: setShowCards(false)")
      }
    }
  }, [currentClickId])

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
        <CardStack
          cards={cards}
          showCards={showCards}
          currentClickId={currentClickId}
        />
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
