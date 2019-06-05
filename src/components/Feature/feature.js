import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"

const Wrapper = styled.div`
  width: 100%;

  position: relative;
  display: block;
  height: 852px;

  ::after {
    content: "";
    background-image: url(${props => props.bgSrc});
    opacity: 0.2;
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
  font-family: KaushanScript-Regular;
  font-size: 24px;
  text-align: center;
  display: block;
  color: #333;
  margin: 0;
  padding: 108.5px 0 17px 0;

  ::first-letter {
    text-transform: capitalize;
  }
`
const Header = styled.span`
  font-family: Montserrat-Bold;
  color: #333;
  font-size: 30px;
  display: block;
  text-transform: uppercase;
  text-align: center;

  ::after {
    content: "";
    display: block;
    width: 60px;
    border-top: 3px solid #f38181;
    margin: 34.5px auto 45px auto;
  }
`
const TabletImg = styled.img`
  margin-left: 336px;
`
const PhoneImg = styled.img`
  position: absolute;
  right: 230px;
  bottom: -90px;
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
            <Header>unique design</Header>
            <TabletImg
              src={edges[0].node.image.fixed.src}
              height={582}
              width={477}
            />
            <PhoneImg src={edges[1].node.image.fixed.src} />
          </Inner>
        </Wrapper>
      )
    }}
  />
)

export default Feature
