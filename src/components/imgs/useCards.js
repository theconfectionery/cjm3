import { useStaticQuery, graphql } from "gatsby"

const imageListToObject = edges => {
  const imagesObject = {}

  edges.forEach(edge => {
    const { node } = edge
    const image = node
    imagesObject[image.title] = image.gatsbyImageData
  })
  return imagesObject
}

const sortImageObjects = objectOfImages => {
  const sorted_images = Object.keys(objectOfImages).map(key => {
    const mapping = { contact: Infinity, info: -Infinity }
    const _key = key.split("_")[1]
    const sortKey = Number(mapping[_key] || Number(_key))
    return { key, sortKey, ...objectOfImages[key] }
  })
  return sorted_images.sort((a, b) => {
    return a.sortKey < b.sortKey ? -1 : 1
  })
}

export const useCards = () => {
  const { allContentfulAsset } = useStaticQuery(graphql`
    query {
      allContentfulAsset(filter: { title: { glob: "card_*" } }) {
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

  const objectOfImages = imageListToObject(edges)
  const sortedListOfObjects = sortImageObjects(objectOfImages)

  return sortedListOfObjects
}
