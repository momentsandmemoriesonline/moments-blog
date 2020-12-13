import React from "react"
import Layout from "../components/layout"
import { graphql } from 'gatsby'

const ContactPage = ({ data, location }) => {
    const siteTitle = data.site.siteMetadata?.title || `Title`

    return (
        
        <Layout location={location} title={siteTitle}>
            <main>
                <h2>{data.allMarkdownRemark.edges[0].node.frontmatter.title}</h2>
                <div>
                  <div dangerouslySetInnerHTML={{ __html: data.allMarkdownRemark.edges[0].node.html}} />
                  <img 
                  alt="map"
                  style={{border:"6px solid #570430", borderRadius: "20px", objectFit: "scale-down", width: "100%"}}
                  src={data.allMarkdownRemark.edges[0].node.frontmatter.map}></img>
                </div>
            </main>
        </Layout>

    )
}
export default ContactPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(filter:{frontmatter:{templateKey:{eq:"contact-page"}}}) {
      edges {
      
        node {
          id,
          frontmatter{
            templateKey,
            title,
            map
          }
          html
        }
      }
    }
  }
`