import React from "react"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"

const Wrapper = styled.section`
  width: 100%;
  position: relative;
`

const Content = styled.div`
  padding-bottom: 58px;
`

const Icon = styled.i`
  padding-top: 60.5px;
  color: #f38181;
  text-align: center;
  display: block;
`

const Text = styled.span`
  color: #f38181;
  font-family: "Montserrat-Bold";
  font-size: 24px;
  text-align: center;
  display: block;
  margin-top: 16px;

  ::after {
    content: "";
    width: 60px;
    display: block;
    border-bottom: 3px solid #f38181;
    margin: 16.5px auto 0 auto;
  }
`

const Background = styled.img`
  position: absolute;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  opacity: 0.15;
`

const OpenMap = () => (
  <StaticQuery
    query={graphql`
      query {
        allContentfulMap {
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
      const background = data.allContentfulMap.edges[0]
      return (
        <Wrapper>
          <Background
            src={background.node.image.fixed.src}
            alt={background.node.image.name}
          />
          <Content>
            <Icon className="flaticon-marker" />
            <Text>open map</Text>
          </Content>
        </Wrapper>
      )
    }}
  />
)

export default OpenMap
