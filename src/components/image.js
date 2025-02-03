import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const Image = ({ name }) => (
  <StaticQuery
    query={graphql`
      {
        images: allFile(filter: { extension: { regex: "/(jpg)|(png)|(jpeg)/" }, relativeDirectory: { eq: "images" } }) {
          edges {
            node {
              base
              childImageSharp {
                fluid(maxWidth: 1000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      const image = data.images.edges.find(i => i.node.base.includes(name))
      return image ? <Img alt={name} fluid={image.node.childImageSharp.fluid} /> : null
    }}
  />
)

export default Image
