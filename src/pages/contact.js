import React from "react"
import Layout from "../components/layout"
import { graphql } from 'gatsby'

const ContactPage = ({ data, location }) => {
    const siteTitle = data.site.siteMetadata?.title || `Title`

    return (
        
        <Layout location={location} title={siteTitle}>
            <main>
                <h1>contact</h1>
                <p>Welcome to my Gatsby site.</p>
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
  }
`