import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Header from "./Header/header"
import Jumbotron from "./Jumbotron/jumbotron"
import Slider from "./Slider/slider"

const Wrapper = styled.div`
  width: 100%;
  background: linear-gradient(to bottom, rgba(243, 138, 129, 0.8), rgba(251, 227, 137, 0.8)), url(${props =>
    props.bg});
  background-size: cover;
  background-repeat: no-repeat;
}
`

const Inner = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`

const Intro = () => (
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
                fixed {
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
      return (
        <Wrapper bg={edges[2].node.image.fixed.src}>
          <Inner>
            <Header
              searchIconSrc={edges[0].node.image.fixed.src}
              shopIconSrc={edges[1].node.image.fixed.src}
            />
            <Jumbotron />
            <Slider />
          </Inner>
        </Wrapper>
      )
    }}
  />
)

export default Intro
