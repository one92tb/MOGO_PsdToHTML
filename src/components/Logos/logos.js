import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"

const Wrapper = styled.div`
  padding: 51px 0 50px 0;
  background: #f8f8f8;
`

const Inner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  @media all and (max-width: 1200px) {
    justify-content: space-evenly;
  }
`

const Logo = styled.img``

const Logos = () => (
  <StaticQuery
    query={graphql`
      query {
        allContentfulLogos {
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
      const { edges } = data.allContentfulLogos
      return (
        <Wrapper>
          <Inner>
            {edges
              .sort((a, b) => a.node.order - b.node.order)
              .map((logo, id) => (
                <Logo key={id} data-src={logo.node.image.fixed.src} className="lazyload"/>
              ))}
          </Inner>
        </Wrapper>
      )
    }}
  />
)

export default Logos
