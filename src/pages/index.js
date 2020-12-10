import React from "react"
import Layout from "../components/layout"

const HomePage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  return (
    <Layout location='' title={siteTitle}>
        <main>
            <h1>{data.allMarkdownRemark.edges[0].node.frontmatter.title}</h1>
            {data.allMarkdownRemark.edges[0].node.frontmatter.body}
        </main>
    </Layout>
  )
}

export default HomePage

export const homePageQuery = graphql`
  query HomePage {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(filter:{frontmatter:{templateKey:{eq:"home-page"}}}) {
      edges {
      
        node {
          id,
          frontmatter{
            templateKey,
            title
          }
        }
      }
    }
    
  }
`