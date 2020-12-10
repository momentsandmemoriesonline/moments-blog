import React from "react"
import Layout from "../components/layout"

const AboutPage = ({ data, location }) => 
{
    const siteTitle = data.site.siteMetadata?.title || `Title`

    return (
        <Layout location={location} title={siteTitle}>
            <main>
                <h2>{data.allMarkdownRemark.edges[0].node.frontmatter.title}</h2>
                <div dangerouslySetInnerHTML={{ __html: data.allMarkdownRemark.edges[0].node.html}} />

                <div>
                    <div>
                        <h3>Donna</h3>
                        <img src="images/donna.jpg" ></img> 
                    </div>
                    <div>
                        <h3>fi</h3>
                        <img src="images/fiona.jpg"></img>
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
            title
          }
          html
        }
      }
    }
    
  }
`