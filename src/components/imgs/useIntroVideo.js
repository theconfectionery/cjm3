import { useStaticQuery, graphql } from 'gatsby';

export const useIntroVideo = () => {
  const { allContentfulAsset } = useStaticQuery(graphql`
    query {
      allContentfulAsset(
        filter: { contentful_id: { eq: "2xHce2OAu3XfhehPTrZtZv" } }
      ) {
        nodes {
          contentful_id
          file {
            url
          }
        }
      }
    }
  `);
  const introVideo = allContentfulAsset.nodes.map(object => {
    return object.file.url;
  });

  return introVideo.pop();
};
