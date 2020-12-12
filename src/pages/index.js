import React from "react"
import Layout from "../components/layout"
import SliderComponent from "../components/slider"
const HomePage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  return (
    <Layout location='' title={siteTitle}>
        <main>
          <SliderComponent></SliderComponent>
            {/* <h1>{data.allMarkdownRemark.edges[0].node.frontmatter.title}</h1> */}
                {/* <img src={data.allMarkdownRemark.edges[0].node.frontmatter.sliderimage1} alt="" />
                <img src={data.allMarkdownRemark.edges[0].node.frontmatter.sliderimage2} alt="" /> */}
            
            {/* <div dangerouslySetInnerHTML={{ __html: data.allMarkdownRemark.edges[0].node.html}} /> */}
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
            title,
            sliderimage1,
            sliderimage2
          },
          html
        }
      }
    }
    
  }
`