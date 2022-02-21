import { useStaticQuery, graphql } from "gatsby"

const imageListToObject = edges => {
  const imagesObject = new Object()

  edges.forEach(edge => {
    const { node } = edge
    const image = node
    imagesObject[image.title] = image
  })
  return imagesObject
}

export const useBgALightsOnOff = () => {
  const { allContentfulAsset } = useStaticQuery(graphql`
    query {
      allContentfulAsset(filter: { title: { glob: "bg_a_lights*" } }) {
        edges {
          node {
            id
            gatsbyImageData
            contentful_id
            title
            file {
              url
            }
          }
        }
      }
    }
  `)
  const { edges } = allContentfulAsset

  return imageListToObject(edges)
}
