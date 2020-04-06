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
          'Questrial\:regular 400',
          `Space Mono\:regular 400, regular 400 italic, bold 700, bold 700 italic`// you can also specify font weights and styles
        ],
        display: 'swap'
      }
    },

    {
      resolve: 'gatsby-source-filesystem',
      options: {
          name: 'src',
          path: `${__dirname}/src/`
      }
  },
  'gatsby-transformer-remark'

    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `src`,
    //     path: `${__dirname}/src/`
    //   },
    //   options: {
    //     name: `src`,
    //     path: `${__dirname}/src/images`
    //   },
    // },
    // 'gatsby-transformer-remark'
    
  ]
 }
