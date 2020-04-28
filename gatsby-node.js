const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

function getEditUrl(repo, filepath) {
  return `https://github.com/${repo.user}/${repo.project}/edit/develop/${filepath}`
}

exports.createPages = async ({ graphql, actions }) => {
  const repo = { user: 'hysds', project: 'hysds.github.io' }
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fileAbsolutePath
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    const rootAbsolutePath = path.resolve(process.cwd(), '.')
    const fileRelativePath = path.relative(rootAbsolutePath, node.fileAbsolutePath)
    const editUrl = getEditUrl(repo, fileRelativePath)

    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/docs.js`),
      context: {
        slug: node.fields.slug,
        editUrl,
      },
    })
  })
}

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}
