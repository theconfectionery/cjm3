import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"

const Screen = ({ cardHeight, cardWidth, showScreen, imagesObject }) => {
  // console.log("<Screen> rendered")
  // console.log(imagesObject)

  if (!showScreen) {
    return <div></div>
  }

  const query = graphql`
    query {
      allContentfulAsset {
        nodes {
          contentful_id
          description
          title
          file {
            details {
              image {
                width
                height
              }
            }
            url
            contentType
          }
          gatsbyImageData
        }
      }
    }
  `

  if (showScreen) {
    // console.log(
    //   `<Screen> Card height: ${cardHeight} Card width: ${cardWidth}`
    // )
    return (
      <div>
        <GatsbyImage
          image={imagesObject.card_info}
          alt="Try a Sample by Selecting a Truffle"
          id="cardOne"
          height={cardHeight}
          width={cardWidth}
        />
        {/* <img
          id="cardOne"
          src={imagesObject.card_info.url}
          height={cardHeight}
          width={cardWidth}
          alt="Try a Sample by Selecting a Truffle"
        /> */}
      </div>
    )
  }
}
export default Screen
