import React from "react"
import Layout from "../components/layout"

const AboutPage = ({ data, location }) => 
{
    const siteTitle = data.site.siteMetadata?.title || `Title`

    return (
        <Layout location={location} title={siteTitle}>
            <main>
                <h2>The Photographers</h2>
                <p>Those special times in our lives we want captured with a flash .</p>
                <p>From newborns, first holy communions  family  shoots, weddings  parties .. You name it.. We are the ladies to get those special moments &amp; memories  for you! </p>
                <p>Our reviews speak for us </p>
                <p>find us on FaceBook: <a href="https://www.facebook.com/momentsandmemoriesbyDandF/">https://www.facebook.com/momentsandmemoriesbyDandF/</a></p>
                <p>Fantastic rates and packages available</p>
                <p>We won't be beaten on price or quality. We have 10 Years combined experience in photography with two fun personalities to heighten your day.. Moments&amp;memories are ready to capture your special times</p>    

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

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`