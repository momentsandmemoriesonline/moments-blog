import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderComponent = () => {

    const data = useStaticQuery(graphql`
    query NonPageQuery {
        allMarkdownRemark(filter:{frontmatter:{templateKey:{eq:"home-page"}}}) {
            edges {
              node {
                id,
                frontmatter{
                  sliderimage1,
                  sliderimage2
                }
              }
            }
          }
      }
    `);
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      autoplay: true,
    };
    return (
      <Slider {...settings}>
        <div>
          <img 
            key={1} 
            className="slick-slide-image"
            src={data.allMarkdownRemark.edges[0].node.frontmatter.sliderimage1} 
            alt=""
          />
        </div>
        <div>
          <img 
            key={2} 
            className="slick-slide-image"
            src={data.allMarkdownRemark.edges[0].node.frontmatter.sliderimage2} 
            alt=""
          />
        </div>
      </Slider>
        
    )
}

export default SliderComponent
