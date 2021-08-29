require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `Coin Efficiency`,
    description: `Track coin efficiency. Optimise transfers in the cryptocurrency monetary ecosystem.`,
    author: `@michaelserres`,
    siteUrl: `https://coinefficiency.com`,
  },
  plugins: [
    {
      resolve: "gatsby-source-graphcms",
      options: {
        endpoint: process.env.GATSBY_GRAPHCMS_ENDPOINT,
        // buildMarkdownNodes: true,
        // downloadLocalImages: true,
        stages: ["PUBLISHED"],
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-postcss`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `dominantColor`,
          quality: 50,
          // breakpoints: [750, 1080, 1366, 1920],
          // backgroundColor: `transparent`,
          // tracedSVGOptions: {},
          // blurredOptions: {},
          // jpgOptions: {},
          // pngOptions: {},
          // webpOptions: {},
          // avifOptions: {},
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `coinefficiency.com`,
        short_name: `CoinEfficiency`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `minimal-ui`,
        icon: `src/images/coinefficiency-icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://coinefficiency.com`,
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // `gatsby-plugin-offline`,
  ],
}
