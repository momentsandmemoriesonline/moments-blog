import React from "react"
import Layout from "../components/layout"
import SliderComponent from "../components/slider"
const HomePage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  return (
    <Layout location='' title={siteTitle}>
        <main>
          <SliderComponent></SliderComponent>
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