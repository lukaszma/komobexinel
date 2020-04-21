const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateWebpackConfig = ({ getConfig, stage }) => {
  const config = getConfig()
  if (stage.startsWith('develop') && config.resolve) {
    config.resolve.alias = {
      ...config.resolve.alias,
      'react-dom': '@hot-loader/react-dom',
    }
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allGalleryJson {
        edges {
          node {
            title
            description
            images_directory
          }
        }
      }
    }
  `)
  result.data.allGalleryJson.edges.forEach(({ node }) => {
    if (node.images_directory) {
      createPage({
        path: `/realizacje/${node.images_directory}`,
        component: path.resolve(`./src/templates/realization.js`),
        context: {
          title: node.title,
          description: node.description,
          images_directory: node.images_directory,
        },
      })
    }
  })
}
