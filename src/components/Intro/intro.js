import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Header from "./Header/header"
import Jumbotron from "./Jumbotron/jumbotron"
import Slider from "./Slider/slider"

const Wrapper = styled.div`
  width: 100%;
  background: linear-gradient(to bottom, rgba(243, 138, 129, 0.7), rgba(251, 227, 137, 0.7)), url(${props =>
    props.bg});
  background-size: cover;
  background-repeat: no-repeat;

  @media all and (max-width: 980px) {
    background: linear-gradient(to bottom, rgba(243, 138, 129, 0.8), rgba(251, 227, 137, 0.8));
  }
}
`

const Inner = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
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
      console.log(data)
      const { edges } = data.allContentfulIntroImg
      const { setRef } = props
      return (
        <Wrapper bg={edges[0].node.image.fixed.src} ref={setRef} name="intro">
          <Inner>
            <Header references={props.references} />
            <Jumbotron />
            <Slider />
          </Inner>
        </Wrapper>
      )
    }}
  />
)

export default Intro
