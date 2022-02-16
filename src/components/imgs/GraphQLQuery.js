const BackgroundLightsOnA = () => {
  return useStaticQuery(
    graphql`
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
    `
  )
}
