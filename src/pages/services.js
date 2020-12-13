import React from "react"
import Layout from "../components/layout"

const ServicesPage = ({ data, location }) => 
{
    const siteTitle = data.site.siteMetadata?.title || `Title`

    return (
        <Layout location={location} title={siteTitle}>
            <main>
                <h2>{data.allMarkdownRemark.edges[0].node.frontmatter.title}</h2>
                <div dangerouslySetInnerHTML={{ __html: data.allMarkdownRemark.edges[0].node.html}} />
                <img style={{width: "100%"}} src={data.allMarkdownRemark.edges[0].node.frontmatter.package1} alt="package1"></img>
                <br />
                <img style={{width: "100%"}} src={data.allMarkdownRemark.edges[0].node.frontmatter.package2} alt="package2"></img>
                <br />
                <img style={{width: "100%"}} src={data.allMarkdownRemark.edges[0].node.frontmatter.package3} alt="package3"></img>
                <br />
                <img style={{width: "100%"}} src={data.allMarkdownRemark.edges[0].node.frontmatter.package4} alt="package4"></img>
                
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
            title,
            package1,
            package2,
            package3,
            package4
          }
          html
        }
      }
    }
    
  }
`