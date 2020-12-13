import React from "react"
import Layout from "../components/layout"
import { graphql } from 'gatsby'

const AboutPage = ({ data, location }) => 
{
    const siteTitle = data.site.siteMetadata?.title || `Title`

    return (
        <Layout location={location} title={siteTitle}>
            <main>
                <h2>{data.allMarkdownRemark.edges[0].node.frontmatter.title}</h2>
                <div dangerouslySetInnerHTML={{ __html: data.allMarkdownRemark.edges[0].node.html}} />

                <div style={{display:"flex", justifyContent: "space-evenly"}}> 
                    <div>
                        <h3 style={{textAlign: "center"}}>Donna</h3>
                        <img 
                        style={{border: "4px solid #570430", borderRadius:"50%"}}
                        src={data.allMarkdownRemark.edges[0].node.frontmatter.donna} 
                        alt="donna"></img> 
                    </div>
                    <div>
                        <h3 style={{textAlign: "center"}}>fi</h3>
                        <img 
                        style={{border: "4px solid #570430", borderRadius:"50%"}}
                        src={data.allMarkdownRemark.edges[0].node.frontmatter.fiona} alt="fi"></img>
                    </div>
                </div>
            </main>
        </Layout>
    )
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(filter:{frontmatter:{templateKey:{eq:"about-page"}}}) {
      edges {
      
        node {
          id,
          frontmatter{
            templateKey,
            title,
            donna,
            fiona
          }
          html
        }
      }
    }
    
  }
`