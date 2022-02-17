import { useStaticQuery, graphql } from "gatsby"

const imageListToObject = edges => {
  const imagesObject = new Object()

  edges.forEach(edge => {
    const { node } = edge
    const image = node
    imagesObject[image.title] = image.gatsbyImageData
  })
  return imagesObject
}

export const useCards = () => {
  // console.log("getImagesQuery triggered")
  const { allContentfulAsset } = useStaticQuery(graphql`
    query {
      allContentfulAsset(filter: { title: { glob: "card_*" } }) {
        edges {
          node {
            id
            gatsbyImageData
            contentful_id
            title
          }
        }
      }
    }
  `)
  const { edges } = allContentfulAsset

  return imageListToObject(edges)
}
