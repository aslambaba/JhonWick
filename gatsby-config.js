const dotenv = require('dotenv');
dotenv.config();
module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-load-script',
      options: {
        src: '/2Checkout.js', // Change to the script filename
      },
    },
    {
      resolve: `gatsby-source-stripe`,
      options: {
        objects: ['Price'],
        secretKey: process.env.STRIPE_SECRET_KEY,
        downloadFiles: true,
      }
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Limelight`,
          `Source Sans Pro`,
          `Andika New Basic`,
        ],
        display: 'swap'
      }
    }
  ],
}
