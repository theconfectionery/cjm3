import { useStaticQuery, graphql } from "gatsby"

const imageListToObject = images => {
  // console.log(images)
  const imagesObject = new Object()

  images.forEach(image => {
    imagesObject[image.title] = image.gatsbyImageData
  })
  return imagesObject
}

export const useImagesQuery = () => {
  // console.log("getImagesQuery triggered")
  const { allContentfulAsset } = useStaticQuery(graphql`
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
  `)
  const { nodes } = allContentfulAsset

  return imageListToObject(nodes)
}
