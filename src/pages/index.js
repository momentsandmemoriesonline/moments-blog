import React from "react"
import Layout from "../components/layout"

export default function Home({ data, location }) {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  return (
    <Layout location='' title={siteTitle}>
        <main>
            {title}
            {body}
        </main>
    </Layout>
  )
}


export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`