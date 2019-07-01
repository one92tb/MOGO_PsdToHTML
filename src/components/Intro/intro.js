import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Header from "./Header/header"
import Jumbotron from "./Jumbotron/jumbotron"
import Slider from "./Slider/slider"

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  background: linear-gradient(to bottom, rgba(230,129,130, 0.8), rgba(251, 227, 137, 0.8));
}
`

const Inner = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
`

const Image = styled.img`
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0.15;

  @media all and (max-width: 980px) {
    display: none;
  }
`

const Intro = props => (
  <StaticQuery
    query={graphql`
      query {
        allContentfulIntroImg {
          edges {
            node {
              order
              name
              image {
                title
                fixed(quality: 100) {
                  width
                  height
                  src
                  srcSet
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      const { edges } = data.allContentfulIntroImg
      const { setRef } = props
      return (
        <Wrapper ref={setRef} name="intro">
          <Image
            data-src={edges[0].node.image.fixed.src}
            className="lazyload"
          />
          <Inner>
            <Header references={props.references} />
            <Jumbotron references={props.references} />
            <Slider />
          </Inner>
        </Wrapper>
      )
    }}
  />
)

export default Intro
//<Image src={edges[0].node.image.fixed.src} />
