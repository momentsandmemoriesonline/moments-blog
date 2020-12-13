import React from "react"
import Layout from "../components/layout"

const ServicesPage = ({ data, location }) => 
{
    const siteTitle = data.site.siteMetadata?.title || `Title`

    return (
        <Layout location={location} title={siteTitle}>
            <main>
                <h2>Services</h2>
                <div dangerouslySetInnerHTML={{ __html: data.allMarkdownRemark.edges[0].node.html}} />

                
            </main>
        </Layout>
    )
}

export default ServicesPage

export const servicesPageQuery = graphql`
  query ServicesPage {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(filter:{frontmatter:{templateKey:{eq:"services-page"}}}) {
      edges {
      
        node {
          id,
          frontmatter{
            templateKey,
            title
          }
          html
        }
      }
    }
    
  }
`