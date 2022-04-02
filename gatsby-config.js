/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

require('dotenv').config({
  path: `.env`,
});

/**
 * The currently active environment.
 * This is used to set the corresponding Tag Manager environment config.
 */
const activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || 'development';
console.log(`Using environment config: '${activeEnv}'`);

// The Tag Manager Container ID.
const gtmContainerId = 'GTM-MC7WV3M';

/**
 * Tag Manager Environment values to configure gatsby-plugin-google-tagmanager.
 * null values will cause the default (live/production) snippet to load.
 */
const gtmEnv = {
  // If tag manager plugin is configured with includeInDevelopment set to
  // true then you should create a corresponding Development environment in
  // Tag Manager and replace the null values with the container environment
  // auth and preview values. Otherwise the production snippet will load.
  development: {
    gtmAuth: null,
    gtmPreview: null,
  },

  staging: {
    gtmAuth: 'Cg319kjsWc6vaqZmLPIw3w',
    gtmPreview: 'env-3',
  },

  // According to GTM docs you should use standard tag for prod so we'll set to null.
  production: {
    gtmAuth: null,
    gtmPreview: null,
  },
};

// .${process.env.NODE_ENV}

module.exports = {
  siteMetadata: {
    title: `Confectionery`,
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'GTM-MC7WV3M',
        includeInDevelopment: false,
        // Defaults to false
        enableWebVitalsTracking: true,
        // Defaults to https://www.googletagmanager.com
        selfHostedOrigin: 'YOUR_SELF_HOSTED_ORIGIN',
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    {
      resolve: 'gatsby-plugin-material-ui',
      options: { stylesProvider: { injectFirst: true } },
    },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `image-map`,
    //     path: `${__dirname}/src/images/image-map/`,
    //   },
    // },
    `gatsby-plugin-react-image-map`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        enableTags: true,
        downloadLocal: true,
      },
    },
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        headers: {}, // option to add more headers. `Link` headers are transformed by the below criteria
        allPageHeaders: [], // option to add headers for all pages. `Link` headers are transformed by the below criteria
        mergeSecurityHeaders: true, // boolean to turn off the default security headers
        mergeLinkHeaders: true, // boolean to turn off the default gatsby js headers
        mergeCachingHeaders: true, // boolean to turn off the default caching headers
        transformHeaders: (headers, path) => headers, // optional transform for manipulating headers under each path (e.g.sorting), etc.
        generateMatchPathRewrites: true, // boolean to turn off automatic creation of redirect rules for client only paths
      },
    },
    // {
    //   resolve: 'gatsby-plugin-google-tagmanager',
    //   options: {
    //     id: gtmContainerId,
    //     includeInDevelopment: false,

    //     // GTM environment details.
    //     gtmAuth: gtmEnv[activeEnv].gtmAuth,
    //     gtmPreview: gtmEnv[activeEnv].gtmPreview,
    //   },
    // },
  ],
};
