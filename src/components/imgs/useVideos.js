import { useStaticQuery, graphql } from "gatsby"
import { videosExample } from "./static"

const contentfulFactory = (
  sortKey,
  uniqueVideoId,
  embeddedUrl,
  redirectUrl
) => {
  return { sortKey, uniqueVideoId, embeddedUrl, redirectUrl }
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
        return a.sortKey < b.sortKey
      })
  })
  return result
}

export const useVideos = () => {
  // const { data } = useStaticQuery(graphql`
  //   query {
  //     contentfulVideo {
  //       uniqueVideoId
  //       embeddedUrl
  //       redirectUrl
  //       sortKey
  //     }
  //   }
  // `)
  // console.log(data)
  return makeExampleVideoArray()
}
