import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { TitleStyle, HeadlineStyle } from "../../css/style.js"
import styled from "styled-components"

const Wrapper = styled.div`
  width: 100%;

  position: relative;
  display: block;
  height: 852px;

  @media all and (max-width: 1200px) {
    height: auto;
  }

  ::after {
    content: "";
    background: url(${props => props.bgSrc});
    background-size: cover;
    background-repeat: no-repeat;
    opacity: 0.15;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1;
    background-size: cover;
    background-repeat: no-repeat;
  }
`

const Inner = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  height: 100%;
  position: relative;
`

const Title = styled.span`
  ${TitleStyle}

  margin: 0;
  padding: 108.5px 0 17px 0;
`
const Headline = styled.span`
  ::after {
    margin: 34.5px auto 45px auto;
  }
  ${HeadlineStyle}
`
const TabletImg = styled.img`
  position: relative;
  width: 477px;
  height: 582px;
  left: 336px;

  @media all and (max-width: 1200px) {
    margin: 0 auto;
    position: static;
    display: block;
  }

  @media all and (max-width: 768px) {
    width: 305px;
    height: 372px;
  }

  @media all and (max-width: 480px) {
    right: 0;
    width: 167px
    height: 204px;
  }
`
const PhoneImg = styled.img`
  position: absolute;
  left: 698px;
  bottom: -90px;
  width: 274px;
  height: 476px;

  @media all and (max-width: 1200px) {
    left: calc(50% + 115px);
  }

  @media all and (max-width: 768px) {
    width: 175px;
    height: 305px;
    bottom: -57.67px;
    left: calc(50% + 73.5px);
  }

  @media all and (max-width: 480px) {
    width: 96px;
    height: 167px;
    bottom: -40.5px;
    left: calc(50% + 40px);
  }
`

const Feature = () => (
  <StaticQuery
    query={graphql`
      query {
        allContentfulUniqueImg {
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
      const { edges } = data.allContentfulUniqueImg
      return (
        <Wrapper bgSrc={edges[2].node.image.fixed.src}>
          <Inner>
            <Title>for all devices</Title>
            <Headline>unique design</Headline>
            <TabletImg
              className="lazyload"
              data-src={edges[0].node.image.fixed.src}
            />
            <PhoneImg
              className="lazyload"
              data-src={edges[1].node.image.fixed.src}
            />
          </Inner>
        </Wrapper>
      )
    }}
  />
)

export default Feature
