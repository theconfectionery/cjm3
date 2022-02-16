import { useStaticQuery, graphql } from "gatsby"

const imageListToObject = images => {
  const imagesObject = new Object()

  images.forEach(image => {
    imagesObject[image.title] = image.file
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
        }
      }
    }
  `)
  const { nodes } = allContentfulAsset

  return imageListToObject(nodes)
}
