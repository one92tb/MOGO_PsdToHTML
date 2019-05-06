import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Header from "./Header/header"
import Jumbotron from "./Jumbotron/jumbotron"
import Slider from "./Slider/slider"

const Wrapper = styled.div`
  background:  linear-gradient(to bottom, rgba(243, 138, 129, 0.8), rgba(251, 227, 137, 0.8)), url("/static/a5f7f9d3943a491ac59317e7bb4582ec/ec873/vulture2.png");
  background-size: cover;
  background-repeat: no-repeat;
  height: 52.083333vw;
 }
`

const Inner = styled.div`
  padding: 0 18.645833vw 0 18.8541667vw;
`

const Intro = () => (
  <StaticQuery
    query={graphql`
      query {
        vultureImage: file(relativePath: { eq: "vulture2.png" }) {
          childImageSharp {
            fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => {
      return (
        <Wrapper>
          <Inner>
            <Header />
            <Jumbotron />
            <Slider />
          </Inner>
        </Wrapper>
      )
    }}
  />
)

export default Intro
