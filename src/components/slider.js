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
                  sliderimage2,
                  sliderimage3,
                  sliderimage4,
                  sliderimage5,
                  sliderimage6,
                  sliderimage7,
                  sliderimage8,
                  sliderimage9,
                  sliderimage10,
                  sliderimage11,
                  sliderimage12
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
        <div>
          <img 
            key={3} 
            className="slick-slide-image"
            src={data.allMarkdownRemark.edges[0].node.frontmatter.sliderimage3} 
            alt=""
          />
        </div>
        <div>
          <img 
            key={4} 
            className="slick-slide-image"
            src={data.allMarkdownRemark.edges[0].node.frontmatter.sliderimage4} 
            alt=""
          />
        </div>
        <div>
          <img 
            key={5} 
            className="slick-slide-image"
            src={data.allMarkdownRemark.edges[0].node.frontmatter.sliderimage5}
            alt=""
          />
        </div>
        <div>
          <img 
            key={6} 
            className="slick-slide-image"
            src={data.allMarkdownRemark.edges[0].node.frontmatter.sliderimage6} 
            alt=""
          />
        </div>
        <div>
          <img 
            key={7} 
            className="slick-slide-image"
            src={data.allMarkdownRemark.edges[0].node.frontmatter.sliderimage7} 
            alt=""
          />
        </div>
        <div>
          <img 
            key={8} 
            className="slick-slide-image"
            src={data.allMarkdownRemark.edges[0].node.frontmatter.sliderimage8} 
            alt=""
          />
        </div>
        <div>
          <img 
            key={9} 
            className="slick-slide-image"
            src={data.allMarkdownRemark.edges[0].node.frontmatter.sliderimage9} 
            alt=""
          />
        </div>
        <div>
          <img 
            key={10} 
            className="slick-slide-image"
            src={data.allMarkdownRemark.edges[0].node.frontmatter.sliderimage10} 
            alt=""
          />
        </div>
        <div>
          <img 
            key={11} 
            className="slick-slide-image"
            src={data.allMarkdownRemark.edges[0].node.frontmatter.sliderimage11} 
            alt=""
          />
        </div>
        <div>
          <img 
            key={12} 
            className="slick-slide-image"
            src={data.allMarkdownRemark.edges[0].node.frontmatter.sliderimage12} 
            alt=""
          />
        </div>
      </Slider>
        
    )
}

export default SliderComponent
