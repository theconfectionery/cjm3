import { useStaticQuery, graphql } from 'gatsby';
import { videosExample } from './static';

const contentfulFactory = (
  sortKey,
  uniqueVideoId,
  embeddedUrl,
  redirectUrl
) => {
  return { sortKey, uniqueVideoId, embeddedUrl, redirectUrl };
};

const makeVideoArray = edges => {
  const result = Object();
  edges.forEach(({ node }) => {
    result[node.buttonId] = node.videos;
  });
  return result;
};

const makeExampleVideoArrayFromStatic = () => {
  const result = Object();
  Object.keys(videosExample).map(key => {
    const urlList = videosExample[key];
    result[key] = urlList
      .map((url, i) => {
        return contentfulFactory(
          i,
          key,
          url.replace('watch?v=', 'embed/'),
          url
        );
      })
      .sort((a, b) => {
        return a.sortKey < b.sortKey;
      });
  });
  return result;
};

export const useVideos = () => {
  const { allContentfulVideoList } = useStaticQuery(graphql`
    query {
      allContentfulVideoList {
        edges {
          node {
            id
            videos {
              embeddedUrl
              redirectUrl
              videoName
              sortKey
              is360
            }
            buttonId
          }
        }
      }
    }
  `);
  const { edges } = allContentfulVideoList;
  const videos = makeVideoArray(edges);
  // console.log(videos)
  return videos;
};
