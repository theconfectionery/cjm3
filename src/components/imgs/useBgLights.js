import { useStaticQuery, graphql } from "gatsby"

const imageListToObject = edges => {
  console.log(edges)

  const imagesObject = new Object()

  edges.forEach(edge => {
    const { node } = edge
    const image = node
    imagesObject[image.title] = image.gatsbyImageData
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
          }
        }
      }
    }
  `)
  const { edges } = allContentfulAsset
  console.log(edges)

  return imageListToObject(edges)
}
