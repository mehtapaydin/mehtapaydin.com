
module.exports = {

  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-relative-images`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 750,
              linkImagesToOriginal: false
            },
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
            
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          'Jost',
          `Jost\:100,200,300,400,500,600, 700`,
          'Poppins',
          `Poppins\:100,200,300,400,500,600, 700`,
          // `Open Sans`,
          // `Open Sans\:300,400,600,700`,
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

    
  ]
 }
