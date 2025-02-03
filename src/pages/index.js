import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Intro from '../components/home/intro'
import Primary from '../components/home/primary'
import Secondary from '../components/home/secondary'
import Banner from '../components/banner'

import marketing from '../../content/home/marketing.yaml'

const Index = ({ data }) => (
  <Layout>
    <SEO />
    {/* <Banner /> */}
    <Intro data={[data, marketing.featured]} />
    <Primary data={marketing.primary} />
    <Secondary data={marketing.secondary} />
  </Layout>
)

export default Index

export const query = graphql`
  {
    hysds: allMarkdownRemark(filter: { frontmatter: { id: { eq: "hysds-overview" } } }) {
      edges {
        node {
          frontmatter {
            title
          }
          excerpt(pruneLength: 239)
        }
      }
    }
    about: allMarkdownRemark(filter: { frontmatter: { id: { eq: "about-hysds" } } }) {
      edges {
        node {
          frontmatter {
            title
          }
          excerpt(pruneLength: 300)
        }
      }
    }
    metadata: site {
      siteMetadata {
        title
        description
      }
    }
  }
`
