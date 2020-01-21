/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {

  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,

            
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          'Sulphur Point',
          `Open Sans`,
          `Space Mono`,
          `Open Sans\:300,400,600,700`,
          `Sulphur Point\:300,400,700`,
          `Space Mono\:regular 400, regular 400 italic, bold 700, bold 700 italic`// you can also specify font weights and styles
        ],
        display: 'swap'
      }
    },
    // {
    //   resolve: `gatsby-plugin-typography`,
    //    options: {
    //      pathToConfigModule: `src/utils/typography`,
    //   },
    // },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
  ],

 }