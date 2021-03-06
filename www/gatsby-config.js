const path = require('path')

module.exports = {
  siteMetadata: {
    title: 'React-Bootstrap Documentation',
    author: 'Jason Quense',
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: path.resolve(__dirname, '../src'),
        name: 'source',
      },
    },
    'gatsby-transformer-react-docgen',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: ['gatsby-remark-prismjs'],
      },
    },
    'gatsby-plugin-catch-links',
    'gatsby-plugin-less',
  ],
}
