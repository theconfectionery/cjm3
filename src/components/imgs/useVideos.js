import { useStaticQuery, graphql } from "gatsby"
import { videosExample } from "./samples"

const contentfulFactory = (
  sortKey,
  uniqueVideoId,
  embeddedUrl,
  redirectUrl
) => {
  return { sortKey, uniqueVideoId, embeddedUrl, redirectUrl }
}

export const buttonMapping = {
  btn11: "PBS",
  btn12: "AMEX",
  btn13: "Dogg",
  btn6: "Tiffany",
  btn7: "Airplane",
  btn8: "Cinedoctor",
  btn9: "PlateFork",
  btn10: "Macys",
  btn1: "RunningMan",
  btn2: "IBM",
  btn3: "DailyShow",
  btn4: "LandRover",
  btn5: "Theatre",
}

export const directionalButtons = {
  leftArrow: "topWheel",
  rightArrow: "bottomWheel",
}

const makeExampleVideoArray = () => {
  const result = Object()
  Object.keys(videosExample).map(key => {
    const urlList = videosExample[key]
    result[key] = urlList
      .map((url, i) => {
        return contentfulFactory(i, key, url.replace("watch?v=", "embed/"), url)
      })
      .sort((a, b) => {
        return a.sortKey > b.sortKey
      })
  })
  return result
}

export const useVideos = () => {
  console.log(
    "Results of GraphQL video Assets: ",
    useStaticQuery(
      graphql`
        query MyQuery {
          contentfulVideo {
            uniqueVideoId
            embeddedUrl
            redirectUrl
            sortKey
          }
        }
      `
    )
  )

  return makeExampleVideoArray()
}
